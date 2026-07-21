import AiGuestAgentsView from "@/components/tech-solutions/ai-guest-agents/AiGuestAgentsView";
import { aiGuestAgentsContent } from "@/lib/content/ai-guest-agents";

export const metadata = {
  title: "AI Guest Agents for Hotels & Resorts | BHeard",
  description:
    "AI Guest Agents that answer enquiries, recommend rooms, qualify leads and upsell 24/7 across website, WhatsApp, Instagram and more. Trusted by Radisson.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: aiGuestAgentsContent.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function AiGuestAgentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AiGuestAgentsView />
    </>
  );
}
