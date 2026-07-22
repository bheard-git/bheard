import BrandSolutionsView from "@/components/brand-solutions/BrandSolutionsView";
import type { FaqItem } from "@/components/site/FaqSection";

export const metadata = {
  title: "Brand Solutions | BHEARD",
  description:
    "Story systems, content engines, and campaigns engineered for memorability — brand strategy, execution, and proof in one motion language.",
};

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BRAND_FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function BrandSolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BrandSolutionsView faqItems={BRAND_FAQS} />
    </>
  );
}
