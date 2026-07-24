import type { Metadata } from "next";
import BrandSolutionsView from "@/components/brand-solutions/BrandSolutionsView";
import JsonLd from "@/components/seo/JsonLd";
import type { FaqItem } from "@/components/site/FaqSection";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.brandSolutions);

const BRAND_FAQS: FaqItem[] = [
  {
    question: "Why Choose BHeard as Your Brand & Digital Growth Partner?",
    answer:
      "BHeard combines branding, content, social media marketing, campaigns, and technology solutions under one team, helping brands move faster and maintain consistency across channels.",
  },
  {
    question: "Do you work with brands across industries and markets?",
    answer:
      "Yes. While we've built deep expertise across lifestyle, wellness, travel, consumer, hospitality, and education sectors, our approach is rooted in understanding customer behaviour, category dynamics, and business objectives, allowing us to work with brands across India and international markets.",
  },
  {
    question: "Can you manage both content creation and social media management?",
    answer:
      "Absolutely. We provide content creation, design, video editing, copywriting, community management, and reporting.",
  },
  {
    question: "Do you offer influencer marketing services?",
    answer:
      "Yes. We manage influencer identification, outreach, collaborations, content planning, and campaign reporting for lifestyle, hospitality, and consumer brands.",
  },
  {
    question: "How do I get started?",
    answer:
      "Schedule a discovery call with our team and we'll recommend the right branding, content, and growth strategy based on your business objectives.",
  },
];

export default function BrandSolutionsPage() {
  const schema = [
    buildServiceSchema({
      name: "Brand Solutions",
      description: PAGE_SEO.brandSolutions.description,
      pathname: PAGE_SEO.brandSolutions.pathname,
      serviceType: "Branding & Digital Marketing",
    }),
    buildFaqSchema(BRAND_FAQS),
    buildBreadcrumbSchema(BREADCRUMBS.brandSolutions),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <BrandSolutionsView faqItems={BRAND_FAQS} />
    </>
  );
}
