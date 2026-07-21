import BrandSolutionsView from "@/components/brand-solutions/BrandSolutionsView";
import FaqSection, { type FaqItem } from "@/components/site/FaqSection";

export const metadata = {
  title: "Brand Solutions | BHEARD",
  description:
    "Story systems, content engines, and campaigns engineered for memorability — brand strategy, execution, and proof in one motion language.",
};

const BRAND_FAQS: FaqItem[] = [
  {
    question: "What does a branding agency do?",
    answer:
      "A branding agency helps businesses define and communicate who they are — consistently and memorably. At BHeard, this means brand strategy (positioning, messaging, tone of voice), visual identity, social media management, content creation, video production, and campaign planning. We work across every touchpoint so your brand builds recognition instead of starting over with each new piece of communication.",
  },
  {
    question: "What is the difference between brand strategy and brand identity?",
    answer:
      "Brand strategy is the thinking — it defines your positioning, target audience, value proposition, and competitive differentiation. Brand identity is the expression — logo, colour palette, typography, visual language. Strategy informs every identity decision. Without strategy, identity is just aesthetics. BHeard builds both together so your visuals are not just beautiful but also strategically coherent.",
  },
  {
    question: "How does BHeard approach social media management?",
    answer:
      "We build strategy-led social media ecosystems, not content calendars. That means starting with your business goals, defining a content strategy aligned to audience intent, building reusable creative systems, and managing community consistently. Our social media work for hospitality and lifestyle brands has delivered 12% average engagement rates and 2.6M+ content views.",
  },
  {
    question: "What industries does BHeard specialise in for brand solutions?",
    answer:
      "BHeard has deep experience in hospitality, luxury lifestyle, travel and tourism, wellness, and consumer brands — categories where trust, emotion, and experience drive decisions as much as product features. We have delivered brand solutions for properties like Radisson Candolim, wellness brands like Mickey Mehta, and lifestyle brands across India.",
  },
  {
    question: "How long does a brand strategy project typically take?",
    answer:
      "A foundational brand strategy engagement — covering positioning, audience definition, messaging framework, and brand voice — typically takes 4 to 8 weeks. Visual identity design adds another 3 to 6 weeks depending on scope. Social media management is an ongoing retainer. We work with a limited number of clients at a time to ensure quality and strategic focus on each engagement.",
  },
  {
    question: "Can BHeard help with both brand strategy and content production?",
    answer:
      "Yes. This is one of BHeard's core advantages: strategy and creative production are handled by one team, not separate vendors. Strategy informs content decisions in real time, which means fewer briefing loops, faster iteration, and content that is coherent with your brand positioning from day one. We handle brand strategy, copywriting, graphic design, video production, and campaign execution under one roof.",
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
      <BrandSolutionsView />
      <FaqSection heading="Brand Solutions — Frequently Asked Questions" items={BRAND_FAQS} />
    </>
  );
}
