import AiGuestAgentsHero from "./AiGuestAgentsHero";
import ExperienceSplitSection from "./ExperienceSplitSection";
import FeatureGridSection from "./FeatureGridSection";
import HowItWorksTimeline from "./HowItWorksTimeline";
import IndustriesSection from "./IndustriesSection";
import AiGuestAgentsFaq from "./AiGuestAgentsFaq";
import AiGuestAgentsCta from "./AiGuestAgentsCta";
import { sectionBgWhite } from "./sectionTheme";

export default function AiGuestAgentsView() {
  return (
    <div data-motion-exclude className={`${sectionBgWhite} pb-12 text-on-background md:pb-16`}>
      <AiGuestAgentsHero />
      <ExperienceSplitSection />
      <FeatureGridSection />
      <HowItWorksTimeline />
      <IndustriesSection />
      <AiGuestAgentsFaq />
      <AiGuestAgentsCta />
    </div>
  );
}
