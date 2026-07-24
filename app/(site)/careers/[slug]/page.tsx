import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareerDetailView, { type CareerDetailRole } from "@/components/careers/CareerDetailView";
import JsonLd from "@/components/seo/JsonLd";
import { getActiveCareerBySlug } from "@/lib/services/careers.service";
import { careerDetailBreadcrumbs } from "@/lib/seo/breadcrumbs";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildJobPostingSchema } from "@/lib/seo/schema";

export const dynamic = "force-dynamic";

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const role = await getActiveCareerBySlug(slug);

  if (!role) return { title: "Role Not Found | BHeard" };

  const title = `${role.title} | BHeard Careers`;
  const description = `Join BHeard as ${role.title} — ${role.department}, ${role.location} (${role.type}). Apply now.`;

  return buildPageMetadata({
    title,
    description,
    pathname: `/careers/${slug}`,
  });
}

export default async function CareerDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const role = await getActiveCareerBySlug(slug);

  if (!role) {
    notFound();
  }

  const detail: CareerDetailRole = {
    slug: role.slug,
    title: role.title,
    department: role.department,
    type: role.type,
    location: role.location,
    description: role.description,
    id: role.id,
  };

  const onlineApplicationsReady = Boolean(process.env.DATABASE_URL && role.id);

  const schema = [
    buildJobPostingSchema({
      title: role.title,
      description: role.description,
      slug: role.slug,
      department: role.department,
      location: role.location,
      type: role.type,
      datePosted: role.updatedAt ? new Date(role.updatedAt).toISOString().slice(0, 10) : undefined,
    }),
    buildBreadcrumbSchema(careerDetailBreadcrumbs(role.title)),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <CareerDetailView role={detail} onlineApplicationsReady={onlineApplicationsReady} />
    </>
  );
}
