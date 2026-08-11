/** Global default OG/Twitter image — 1200×630 */
export const OG_IMAGE_PATH = "/assets/og/og-image.png";

export const SITE_NAME = "BHeard";

export const ORGANIZATION = {
  name: "BHeard",
  legalName: "BHeard Consulting Pvt. Ltd.",
  alternateName: ["BHEARD", "B Heard", "BHeard Agency"],
  foundingDate: "2014",
  founderName: "Neha Gupta",
  founderLinkedIn: "https://www.linkedin.com/in/nehagupta",
  email: "hello@bheard.in",
  phone: "+91-9326602832",
  logoPath: "/logo.png",
  sameAs: [
    "https://www.instagram.com/letsbheard",
    "https://www.linkedin.com/company/letsbheard/",
  ],
  areaServed: ["India", "United States", "Southeast Asia"],
  description:
    "Mumbai's integrated branding and technology agency for hospitality, lifestyle and consumer brands — brand strategy, technology and AI under one roof.",
} as const;

export const LOCATIONS = [
  {
    name: "BHeard — Mumbai Head Office",
    streetAddress:
      "B1-604, Marathon Innova Corporate Centre, Marathon NextGen Compound, Lower Parel",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400013",
    addressCountry: "IN",
  },
  {
    name: "BHeard — Delhi Branch Office",
    streetAddress: "WH-75, Mayapuri Industrial Area, Phase-1",
    addressLocality: "South West Delhi",
    addressRegion: "Delhi",
    postalCode: "110064",
    addressCountry: "IN",
  },
] as const;

/** AI search crawlers — explicitly allowed on production (GEO / AI visibility). */
export const AI_SEARCH_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "Applebot-Extended",
  "FacebookBot",
] as const;
