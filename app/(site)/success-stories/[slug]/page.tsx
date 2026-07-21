import { notFound } from "next/navigation";
import { WorkDetailView } from "@/components/work";
import { loadCaseStudyBySlug, loadPublishedCaseStudies } from "@/lib/success-stories/loadCaseStudies";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = await loadCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study | BHeard" };
  }
  return {
    title: `${study.heroMeta} Case Study | BHeard`,
    description: study.heroSubtitle.slice(0, 158),
  };
}

export default async function SuccessStoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = await loadCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const allStudies = await loadPublishedCaseStudies();
  const relatedStudies = allStudies.filter((s) => s.slug !== study.slug).slice(0, 3);

  return <WorkDetailView study={study} relatedStudies={relatedStudies} />;
}
