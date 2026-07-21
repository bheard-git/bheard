import TechSolutionsView from "@/components/tech-solutions/TechSolutionsView";
import FaqSection, { type FaqItem } from "@/components/site/FaqSection";

export const metadata = {
  title: "Tech Solutions | BHEARD",
  description:
    "Scalable web and mobile products, UI/UX, e-commerce, and AI automation — engineered for performance, clarity, and measurable growth.",
};

const TECH_FAQS: FaqItem[] = [
  {
    question: "What technology does BHeard use to build websites?",
    answer:
      "BHeard builds websites on modern, production-grade technology stacks. For most projects we use Next.js (React) on the frontend for performance and SEO, Node.js or PHP on the backend, and databases including PostgreSQL and MySQL. For e-commerce we use Shopify or custom-built storefronts. All builds are optimised for Core Web Vitals, mobile responsiveness, and security best practices.",
  },
  {
    question: "Does BHeard build mobile apps for both iOS and Android?",
    answer:
      "Yes. We develop mobile applications for both iOS and Android. For most projects we use Flutter or React Native, which allow a single codebase to deliver native-quality experiences on both platforms. For performance-critical applications we also develop in native Swift (iOS) or Kotlin (Android). Every app is built for maintainability and scalability from day one.",
  },
  {
    question: "What is included in a UI/UX design engagement?",
    answer:
      "A UI/UX engagement at BHeard includes user research, information architecture, wireframing, interactive prototyping, and final high-fidelity UI design. We test with real users before handoff, and our designs are delivered as developer-ready Figma files with a documented design system. UX decisions are grounded in usability principles and conversion optimisation, not aesthetic preference alone.",
  },
  {
    question: "Can BHeard build AI chatbots and automation agents for my business?",
    answer:
      "Yes. BHeard builds AI-powered chatbots and intelligent automation agents that qualify leads, handle customer queries, and move users through conversion funnels — 24 hours a day without adding headcount. We integrate with WhatsApp, website chat, and internal tools. For hospitality clients, we have built AI revenue agents that handle guest queries and booking assistance.",
  },
  {
    question: "How does BHeard approach e-commerce development?",
    answer:
      "We build end-to-end e-commerce platforms covering storefront design, product catalogue architecture, payment gateway integration, inventory management hooks, and conversion optimisation. We use Shopify for speed-to-market and custom React/Next.js builds for full control. Every e-commerce project is designed to be ready to sell from day one, with analytics instrumentation built in.",
  },
  {
    question: "What is the typical timeline for a custom web development project?",
    answer:
      "A standard business website takes 6 to 10 weeks from kickoff to launch: 1 week for discovery and requirements, 2 to 3 weeks for design and prototype, 3 to 4 weeks for development and integration, and 1 week for testing and deployment. Complex web applications and e-commerce platforms take longer — typically 12 to 20 weeks. We provide a detailed project roadmap at the start of every engagement.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: TECH_FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function TechSolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TechSolutionsView />
      <FaqSection heading="Tech Solutions — Frequently Asked Questions" items={TECH_FAQS} />
    </>
  );
}
