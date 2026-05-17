import { notFound } from "next/navigation";
import CaseStudyDetailView from "@/components/success-stories/CaseStudyDetailView";
import { getStoryBySlug } from "@/lib/services/stories.service";
import { successStoryToCaseStudy } from "@/lib/success-stories/mapper";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const row = await getStoryBySlug(slug);
  const study = row && row.published ? successStoryToCaseStudy(row) : null;

  if (!study) {
    return { title: "Story | BHEARD" };
  }
  return {
    title: `${study.heroTitle} | BHEARD`,
    description: study.heroSubtitle.slice(0, 158),
  };
}

export default async function SuccessStoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const row = await getStoryBySlug(slug);
  const study = row && row.published ? successStoryToCaseStudy(row) : null;

  if (!study) {
    notFound();
  }
  return <CaseStudyDetailView study={study} />;
}
