import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareerDetailView, { type CareerDetailRole } from "@/components/careers/CareerDetailView";
import { getActiveCareerBySlug } from "@/lib/services/careers.service";

export const dynamic = "force-dynamic";

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const role = await getActiveCareerBySlug(slug);

  if (!role) return { title: "Role Not Found | BHEARD" };
  return {
    title: `${role.title} | BHEARD Careers`,
    description: `${role.title} - ${role.location} (${role.type})`,
  };
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

  return <CareerDetailView role={detail} onlineApplicationsReady={onlineApplicationsReady} />;
}
