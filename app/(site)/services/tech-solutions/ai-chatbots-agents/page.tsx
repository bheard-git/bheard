import type { Metadata } from "next";
import AiGuestAgentsView from "@/components/tech-solutions/ai-guest-agents/AiGuestAgentsView";
import JsonLd from "@/components/seo/JsonLd";
import { aiGuestAgentsContent } from "@/lib/content/ai-guest-agents";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.aiGuestAgents);

export default function AiGuestAgentsPage() {
  const faqs = aiGuestAgentsContent.faq.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  const schema = [
    buildServiceSchema({
      name: "AI Guest Agents",
      description: PAGE_SEO.aiGuestAgents.description,
      pathname: PAGE_SEO.aiGuestAgents.pathname,
      serviceType: "AI Guest Agents for Hospitality",
    }),
    buildFaqSchema(faqs),
    buildBreadcrumbSchema(BREADCRUMBS.aiGuestAgents),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <AiGuestAgentsView />
    </>
  );
}
