import { CASE_STUDIES } from "@/lib/case-studies/data";
import type { CaseStudyContent } from "@/lib/case-studies";
import { listPublishedStories, getStoryBySlug } from "@/lib/services/stories.service";
import { successStoryToCaseStudy } from "@/lib/success-stories/mapper";

export async function loadPublishedCaseStudies(): Promise<CaseStudyContent[]> {
  try {
    const rows = await listPublishedStories();
    if (rows.length > 0) {
      return rows.map(successStoryToCaseStudy);
    }
  } catch (err) {
    console.warn("[stories] falling back to static case studies:", err instanceof Error ? err.message : err);
  }
  return CASE_STUDIES;
}

export async function loadCaseStudyBySlug(slug: string): Promise<CaseStudyContent | null> {
  try {
    const row = await getStoryBySlug(slug);
    if (row?.published) {
      return successStoryToCaseStudy(row);
    }
  } catch (err) {
    console.warn(`[stories] falling back to static case study "${slug}":`, err instanceof Error ? err.message : err);
  }
  return CASE_STUDIES.find((s) => s.slug === slug) ?? null;
}
