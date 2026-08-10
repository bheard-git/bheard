import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { WorkDetailView } from "@/components/work";
import { workDetailBreadcrumbs } from "@/lib/seo/breadcrumbs";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { CASE_STUDY_SEO } from "@/lib/seo/pages";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/seo/schema";
import { loadCaseStudyBySlug, loadCaseStudyBySlugFromLocal, loadPublishedCaseStudies } from "@/lib/success-stories/loadCaseStudies";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await loadCaseStudyBySlugFromLocal(slug);

  if (!study) {
    return { title: "Case Study | BHeard" };
  }

  const seo = CASE_STUDY_SEO[slug];
  const title = seo?.title ?? `${study.listTitle} Case Study — ${study.heroMeta} | BHeard`;
  const description = seo?.description ?? study.listDescription.slice(0, 158);

  return buildPageMetadata({
    title,
    description,
    pathname: `/work/${slug}`,
    ogType: "article",
    ogImage: study.heroImage,
  });
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = await loadCaseStudyBySlugFromLocal(slug);

  if (!study) {
    notFound();
  }

  const allStudies = await loadPublishedCaseStudies();
  const relatedStudies = allStudies.filter((s) => s.slug !== study.slug).slice(0, 3);

  const seo = CASE_STUDY_SEO[slug];
  const title = seo?.title ?? `${study.listTitle} Case Study — ${study.heroMeta} | BHeard`;
  const description = seo?.description ?? study.listDescription;

  const schema = [
    buildArticleSchema({
      headline: title,
      description,
      pathname: `/work/${slug}`,
      image: study.heroImage,
      about: study.heroMeta,
    }),
    buildBreadcrumbSchema(workDetailBreadcrumbs(study.listTitle)),
  ];

  return (
    <>
      <JsonLd data={schema} />
      {/* <pre>{JSON.stringify(study, null, 2)}</pre> */}
      <WorkDetailView study={study} relatedStudies={relatedStudies} />
    </>
  );
}
