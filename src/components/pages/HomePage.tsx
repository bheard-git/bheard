import { HomePageBackground } from "@/components/sections/home/HomePageBackground";
import { HomePageBodyTheme } from "@/components/sections/home/HomePageBodyTheme";
import { HomePageGradientAnchors } from "@/components/sections/home/HomePageGradientAnchors";
import { HomeTopZone } from "@/components/sections/home/HomeTopZone";
import { HomeHeroSection } from "@/components/sections/home/HomeHeroSection";
import { HomeCategoriesSection } from "@/components/sections/home/HomeCategoriesSection";
import { HomeImpactSection } from "@/components/sections/home/HomeImpactSection";
import { HomeResultsSection } from "@/components/sections/home/HomeResultsSection";
import { HomeAppPromotionSection } from "@/components/sections/home/HomeAppPromotionSection";
import { CTABand } from "@/components/sections/CTABand";
import { RevealGroup } from "@/components/ui/RevealGroup";

export function HomePage() {
  return (
    <HomePageBackground>
      <HomePageBodyTheme />
      <HomePageGradientAnchors />
      <HomeTopZone>
        <HomeHeroSection />
        <HomeCategoriesSection />
      </HomeTopZone>
      <HomeImpactSection />
      <HomeResultsSection />
      <HomeAppPromotionSection />
      <RevealGroup>
        <CTABand
          title="Your Dream. Our Guidance."
          titleAccent="Unstoppable You."
          subtitle="Take the first step towards your success. We'll be with you, all the way."
          backgroundImage="/assets/backgrounds/home-cta-bg.png"
          secondaryOutline="orange"
          primaryAction={{ label: "Book Free Counselling", href: "/contact" }}
          secondaryAction={{ label: "Explore Courses", href: "/mba" }}
          className="reveal-child reveal-delay-1"
        />
      </RevealGroup>
    </HomePageBackground>
  );
}
