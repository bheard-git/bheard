"use client";

import ClientLogos from "@/components/ClientLogos";
import IndustriesClosingCta from "@/components/industries/IndustriesClosingCta";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustrySectionBlock from "@/components/industries/IndustrySectionBlock";
import { INDUSTRIES } from "@/lib/industries/data";

export default function IndustriesHubView() {
  return (
    <div className="bg-white">
      <IndustriesHero />

      <section className="px-6 pb-0 md:px-8">
        <div className="mx-auto max-w-7xl">
          {INDUSTRIES.map((industry, index) => (
            <IndustrySectionBlock key={industry.id} industry={industry} index={index} />
          ))}
        </div>
      </section>

      <ClientLogos title="Brands That Have Trusted BHeard" />
      <IndustriesClosingCta />
    </div>
  );
}
