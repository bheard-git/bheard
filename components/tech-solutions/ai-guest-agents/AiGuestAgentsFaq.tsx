"use client";

import TwoColumnFaqSection from "@/components/solutions/TwoColumnFaqSection";
import { aiGuestAgentsContent } from "@/lib/content/ai-guest-agents";
import { aiGuestBandY, aiGuestContainer, aiGuestSectionX, sectionBgAlt } from "./sectionTheme";

export default function AiGuestAgentsFaq() {
  const { faq } = aiGuestAgentsContent;

  return (
    <TwoColumnFaqSection
      headingLine1={faq.headingLine1}
      headingLine2={faq.headingLine2}
      items={faq.items}
      className={`${sectionBgAlt} ${aiGuestSectionX} ${aiGuestBandY}`}
      containerClassName={aiGuestContainer}
    />
  );
}
