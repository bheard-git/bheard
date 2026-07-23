import { getCaseStudyBySlug } from "@/lib/case-studies";
import type { CaseStudyContent } from "@/lib/case-studies/types";
import type { CaseStudyStat } from "@/lib/case-studies/types";
import type { SolutionsCaseStudyCardProps } from "@/components/solutions/SolutionsCaseStudyCard";

type CaseStudySlugConfig = {
  slug: string;
  stats?: CaseStudyStat[];
};

type StaticCaseStudyCardConfig = Omit<SolutionsCaseStudyCardProps, "className">;

const BRAND_CASE_STUDY_CONFIG: CaseStudySlugConfig[] = [
  {
    slug: "radisson-blu-goa",
    stats: [
      { value: "1.4M+", label: "Reach" },
      { value: "12%", label: "Engagement Rate" },
      { value: "9.4%", label: "Lower CAC" },
    ],
  },
  {
    slug: "zumba-wear",
    stats: [
      { value: "23.3K", label: "Instagram Followers" },
      { value: "274+", label: "Facebook Purchases" },
      { value: "19%", label: "Peak FB Engagement" },
    ],
  },
  {
    slug: "goa-tourism",
    stats: [
      { value: "261.6K", label: "Views" },
      { value: "130K+", label: "Reach" },
      { value: "12.5%", label: "Engagement Rate" },
    ],
  },
];

const TECH_CASE_STUDY_CONFIG: Array<CaseStudySlugConfig | StaticCaseStudyCardConfig> = [
  {
    slug: "curly-tales-app",
    stats: [
      { value: "2M+", label: "Readers Reached" },
      { value: "4.7★", label: "App Rating" },
    ],
  },
  {
    id: "digi-1",
    image: null,
    imageAlt: "DIGI 1 customer experience platform",
    brandName: "DIGI 1",
    title: "Customer experience platform for retail engagement and loyalty.",
    metaStrip:
      "Customer Experience Platform · Loyalty & Service Management · Retail Digital Transformation",
    stats: [
      { value: "9,500+", label: "Customer Engagements" },
      { value: "7,000+", label: "Loyalty Members" },
      { value: "6,000+", label: "Demo Requests & Store" },
    ],
    href: null,
  },
  {
    slug: "rodha-edtech",
    stats: [
      { value: "10,000+", label: "Concurrent Users Supported" },
      { value: "500+", label: "Simultaneous DB Connections" },
    ],
  },
];

function isSlugConfig(
  entry: CaseStudySlugConfig | StaticCaseStudyCardConfig
): entry is CaseStudySlugConfig {
  return "slug" in entry;
}

function buildSlugCard({ slug, stats = [] }: CaseStudySlugConfig): SolutionsCaseStudyCardProps | null {
  const study = getCaseStudyBySlug(slug);
  if (!study) return null;

  return {
    id: slug,
    image: study.listImage,
    imageAlt: study.listImageAlt,
    brandName: study.listTitle,
    title: study.listTagline,
    metaStrip: study.listMeta,
    stats,
    href: `/work/${slug}`,
  };
}

function buildCards(
  config: Array<CaseStudySlugConfig | StaticCaseStudyCardConfig>
): SolutionsCaseStudyCardProps[] {
  return config
    .map((entry) => (isSlugConfig(entry) ? buildSlugCard(entry) : entry))
    .filter((card): card is SolutionsCaseStudyCardProps => card != null);
}

export const BRAND_SOLUTIONS_CASE_STUDY_CARDS = buildCards(BRAND_CASE_STUDY_CONFIG);

export const TECH_SOLUTIONS_CASE_STUDY_CARDS = buildCards(TECH_CASE_STUDY_CONFIG);

export function mapCaseStudyToSolutionsCard(study: CaseStudyContent): SolutionsCaseStudyCardProps {
  return {
    id: study.slug,
    image: study.listImage,
    imageAlt: study.listImageAlt,
    brandName: study.listTitle,
    title: study.listTagline,
    metaStrip: study.listMeta,
    stats: study.listStats,
    href: `/work/${study.slug}`,
  };
}
