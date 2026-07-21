export type CaseStudyStat = {
  /** Display value — numbers only when verified (e.g. GP30) */
  value: string;
  label: string;
};

export type CaseStudyExecutionBlock = {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  /** Visual rhythm on desktop */
  align?: "left" | "right";
};

export type CaseStudyImpactItem = {
  icon: "chart" | "users" | "bot" | "trending" | "globe" | "sparkles";
  value: string;
  title: string;
  description: string;
  href?: string;
  hrefLabel?: string;
};

export type CaseStudyExtraSection = {
  heading: string;
  body: string;
};

export type CaseStudyContent = {
  slug: string;
  /** Listing + SEO */
  listTitle: string;
  listTagline: string;
  listDescription: string;
  listMeta: string;
  listImage: string;
  listImageAlt: string;
  listStats?: CaseStudyStat[];

  heroTitle: string;
  heroTitleAccent?: string;
  heroSubtitle: string;
  heroMeta: string;
  heroImage: string;
  heroImageAlt: string;
  trustedBy?: { name: string; logo?: string };

  overview: { heading: string; body: string };
  challenge: { heading: string; intro: string; bullets?: string[] };
  strategy: { heading: string; intro: string; bullets?: string[] };
  execution: CaseStudyExecutionBlock[];
  results: { heading: string; stats: CaseStudyStat[]; closing: string };
  impactItems?: CaseStudyImpactItem[];
  extraSections?: CaseStudyExtraSection[];
  closingStatement: string;
  cta: { title: string; subtext: string };
};
