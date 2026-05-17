import type { SuccessStoryRecord as SuccessStory } from "@/lib/db/models";
import type { CaseStudyContent, CaseStudyExecutionBlock, CaseStudyStat } from "@/lib/case-studies";

type CaseData = Partial<Omit<CaseStudyContent, "slug">>;

function asStats(value: unknown, fallback: CaseStudyStat[] = []): CaseStudyStat[] {
  if (!Array.isArray(value)) return fallback;
  return value
    .map((v) => {
      if (!v || typeof v !== "object") return null;
      const valueStr = String((v as { value?: string }).value ?? "").trim();
      const label = String((v as { label?: string }).label ?? "").trim();
      if (!valueStr || !label) return null;
      return { value: valueStr, label };
    })
    .filter(Boolean) as CaseStudyStat[];
}

function asExecution(value: unknown): CaseStudyExecutionBlock[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((v) => {
      if (!v || typeof v !== "object") return null;
      const heading = String((v as { heading?: string }).heading ?? "").trim();
      const body = String((v as { body?: string }).body ?? "").trim();
      const image = String((v as { image?: string }).image ?? "").trim();
      const imageAlt = String((v as { imageAlt?: string }).imageAlt ?? "").trim() || heading;
      const alignRaw = (v as { align?: string }).align;
      const align = alignRaw === "left" || alignRaw === "right" ? alignRaw : "left";
      if (!heading || !body || !image) return null;
      return { heading, body, image, imageAlt, align };
    })
    .filter(Boolean) as CaseStudyExecutionBlock[];
}

export function successStoryToCaseStudy(row: SuccessStory): CaseStudyContent {
  const data = (row.caseData ?? {}) as CaseData;
  const listTitle = (data.listTitle ?? row.title).trim();
  const listDescription = (data.listDescription ?? row.summary).trim();
  const listMeta = (data.listMeta ?? row.industry).trim();
  const heroTitle = (data.heroTitle ?? row.title).trim();
  const heroSubtitle = (data.heroSubtitle ?? row.summary).trim();
  const heroMeta = (data.heroMeta ?? row.industry).trim();
  const execution = asExecution((data as CaseData & { execution?: unknown }).execution);
  const listImage = (data.listImage ?? row.listImage ?? row.heroImage ?? "").toString();
  const heroImage = (data.heroImage ?? row.heroImage ?? row.listImage ?? listImage).toString();

  return {
    slug: row.slug,
    listTitle,
    listTagline: String(data.listTagline ?? row.summary).trim(),
    listDescription,
    listMeta,
    listImage,
    listImageAlt: String(data.listImageAlt ?? listTitle).trim(),
    listStats: asStats((data as CaseData & { listStats?: unknown }).listStats),
    heroTitle,
    heroSubtitle,
    heroMeta,
    heroImage,
    heroImageAlt: String(data.heroImageAlt ?? heroTitle).trim(),
    overview: {
      heading: String((data as CaseData & { overview?: { heading?: string } }).overview?.heading ?? "The brief"),
      body: String((data as CaseData & { overview?: { body?: string } }).overview?.body ?? row.about),
    },
    challenge: {
      heading: String((data as CaseData & { challenge?: { heading?: string } }).challenge?.heading ?? "The challenge"),
      intro: String((data as CaseData & { challenge?: { intro?: string } }).challenge?.intro ?? row.challenge),
      bullets: Array.isArray((data as CaseData & { challenge?: { bullets?: unknown } }).challenge?.bullets)
        ? ((data as CaseData & { challenge?: { bullets?: string[] } }).challenge?.bullets ?? [])
        : [],
    },
    strategy: {
      heading: String((data as CaseData & { strategy?: { heading?: string } }).strategy?.heading ?? "Our approach"),
      intro: String((data as CaseData & { strategy?: { intro?: string } }).strategy?.intro ?? row.solution),
      bullets: Array.isArray((data as CaseData & { strategy?: { bullets?: unknown } }).strategy?.bullets)
        ? ((data as CaseData & { strategy?: { bullets?: string[] } }).strategy?.bullets ?? [])
        : [],
    },
    execution:
      execution.length > 0
        ? execution
        : [
            {
              heading: "Execution",
              body: row.solution,
              image: heroImage,
              imageAlt: heroTitle,
              align: "left" as const,
            },
          ],
    results: {
      heading: String((data as CaseData & { results?: { heading?: string } }).results?.heading ?? "The impact"),
      stats: asStats((data as CaseData & { results?: { stats?: unknown } }).results?.stats, [
        { value: "Impact", label: row.results },
      ]),
      closing: String((data as CaseData & { results?: { closing?: string } }).results?.closing ?? row.results),
    },
    closingStatement: String(data.closingStatement ?? row.summary),
    cta: {
      title: String((data as CaseData & { cta?: { title?: string } }).cta?.title ?? row.contactCta),
      subtext: String((data as CaseData & { cta?: { subtext?: string } }).cta?.subtext ?? "Let's build your next story."),
    },
  };
}
