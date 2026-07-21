import Image from "next/image";
import { Building2, Home, Layers, Leaf, Palmtree } from "lucide-react";
import { aiGuestAgentsContent } from "@/lib/content/ai-guest-agents";
import { aiGuestBandY, aiGuestContainer, sectionBgWhite } from "./sectionTheme";
import type { LucideIcon } from "lucide-react";

const industryIcons: Record<string, LucideIcon> = {
  building: Building2,
  palmtree: Palmtree,
  leaf: Leaf,
  home: Home,
  layers: Layers,
};

export default function IndustriesSection() {
  const { industries } = aiGuestAgentsContent;

  return (
    <section className={`${sectionBgWhite} ${aiGuestBandY}`}>
      <div className={aiGuestContainer}>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="overflow-hidden rounded-lg shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)]">
            <Image
              src={industries.imageSrc}
              alt={industries.imageAlt}
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-headline text-[clamp(1.5rem,3vw,2.25rem)] font-black uppercase leading-tight tracking-tight text-on-background">
              {industries.heading}
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
              {industries.paragraph}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-3">
              {industries.items.map((item) => {
                const Icon = industryIcons[item.icon] ?? Building2;
                return (
                  <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                    <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} aria-hidden />
                    <span className="font-body text-xs font-medium text-on-background md:text-sm">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
