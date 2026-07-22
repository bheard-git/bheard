/** Curated Unsplash assets for Brand / Tech solution pages (hostname allowed in next.config). */

import { publicAsset } from "@/lib/utils/publicAsset";

export const BRAND_HERO_MEDIA = {
  kind: "video" as const,
  src: "/assets/brand%20solutions/hero/brand%20solutions%20hero%20banner.mp4",
  alt: "Brand team collaborating on creative strategy in a modern studio",
} as const;

export const TECH_HERO_MEDIA = {
  kind: "video" as const,
  src: publicAsset("assets", "tech solutions", "hero", "tech solutions hero banner.mp4"),
  alt: "Product team collaborating on digital platform design and development",
} as const;

export const BRAND_CHAOS_MEDIA = {
  src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80",
  alt: "Busy meeting with many screens suggesting fragmented marketing noise",
} as const;

export const BRAND_STRUCTURE_MEDIA = {
  src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  alt: "Minimal open office with structured lines and calm workspace light",
} as const;

export const BRAND_SERVICE_IMAGES: Record<string, { imageSrc: string; imageAlt: string }> = {
  social: {
    imageSrc: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Social media apps on a smartphone representing community and engagement",
  },
  copy: {
    imageSrc: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Notebook and pen for copywriting and narrative craft",
  },
  video: {
    imageSrc: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Video editing timeline on a display",
  },
  design: {
    imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Graphic design tools and color swatches on a desk",
  },
  campaign: {
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Analytics dashboard suggesting campaign performance",
  },
  influencer: {
    imageSrc: publicAsset("assets", "brand solutions", "influencermarketing.png"),
    imageAlt: "Influencer recording content at a luxury resort",
  },
  aiContent: {
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "AI-powered content creation and Meta campaign optimization workflow",
  },
};

export const TECH_SERVICE_IMAGES: Record<string, { imageSrc: string; imageAlt: string }> = {
  custom: {
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Custom software development and business systems planning",
  },
  web: {
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Custom web development on a developer workstation",
  },
  mobile: {
    imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Custom mobile app on iOS and Android devices",
  },
  ux: {
    imageSrc: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "UI/UX design wireframes and user experience planning",
  },
  commerce: {
    imageSrc: publicAsset("assets", "tech solutions", "servcies", "Ecommerce.jpg"),
    imageAlt: "E-commerce platform with shopping cart on a laptop",
  },
  ai: {
    imageSrc: publicAsset("assets", "tech solutions", "servcies", "Chatbots & AI Agents .png"),
    imageAlt: "Friendly AI chatbot emerging from a smartphone screen",
  },
};

export const PROCESS_THUMB_BRAND: Record<string, { imageSrc: string; imageAlt: string }> = {
  Discover: {
    imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Team discovery workshop",
  },
  Strategize: {
    imageSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Strategist presenting positioning slides",
  },
  Create: {
    imageSrc: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Design workspace with layouts",
  },
  Amplify: {
    imageSrc: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Campaign launch and collaboration",
  },
  "Measure & Evolve": {
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Analytics charts for optimization",
  },
};

export const PROCESS_THUMB_TECH: Record<string, { imageSrc: string; imageAlt: string }> = {
  Discover: {
    imageSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Team discovery workshop for technology requirements",
  },
  Strategize: {
    imageSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Strategist presenting product architecture and roadmap",
  },
  Design: {
    imageSrc: "https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=800&q=80",
    imageAlt: "UI/UX wireframes and prototypes on a design desk",
  },
  Develop: {
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Developer building scalable digital products",
  },
  "Optimize & Scale": {
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Analytics and performance monitoring for optimization",
  },
};

export const CASE_MOMENT_THUMBS: Record<string, { imageSrc: string; imageAlt: string }> = {
  eng: {
    imageSrc: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Social engagement on mobile",
  },
  ret: {
    imageSrc: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Audience watching content on a laptop",
  },
  reach: {
    imageSrc: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Team celebrating a campaign milestone",
  },
};
