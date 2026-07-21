import { ArrowRight, LineChart, Plug, Rocket, Search, Settings } from "lucide-react";
import { aiGuestAgentsContent } from "@/lib/content/ai-guest-agents";
import { aiGuestBandY, aiGuestContainer, sectionBgAlt } from "./sectionTheme";
import type { LucideIcon } from "lucide-react";

const stepIcons: Record<string, LucideIcon> = {
  search: Search,
  settings: Settings,
  plug: Plug,
  rocket: Rocket,
  "line-chart": LineChart,
};

/** Vertical center of the 48px icon circle: step number line + mt-2 + half icon height */
const ICON_CENTER_TOP = "top-[calc(1.75rem+0.5rem+1.5rem)]";

export default function HowItWorksTimeline() {
  const { howItWorks } = aiGuestAgentsContent;

  return (
    <section className={`${sectionBgAlt} ${aiGuestBandY}`}>
      <div className={aiGuestContainer}>
        <h2 className="font-headline text-[clamp(1.75rem,3.5vw,2.75rem)] font-black uppercase leading-tight tracking-tight text-on-background">
          {howItWorks.heading}
        </h2>

        <div className="mt-8 hidden md:grid md:grid-cols-5 md:gap-6">
          {howItWorks.steps.map((step, i) => {
            const Icon = stepIcons[step.icon] ?? Search;
            const isLast = i === howItWorks.steps.length - 1;

            return (
              <div key={step.number} className="relative flex flex-col">
                <p className="font-headline text-lg font-bold leading-none text-primary">{step.number}.</p>
                <div className="relative z-10 mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 text-primary md:h-8 md:w-8" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="mt-3 font-headline text-sm font-bold uppercase tracking-tight text-on-background">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-xs leading-relaxed text-on-surface-variant">{step.description}</p>

                {!isLast ? (
                  <div
                    className={`pointer-events-none absolute ${ICON_CENTER_TOP} left-12 right-0 z-0 flex -translate-y-1/2 items-center`}
                    aria-hidden
                  >
                    <div className="h-px flex-1 border-t border-dashed border-outline-variant" />
                    <ArrowRight className="h-5 w-5 shrink-0 text-primary md:h-6 md:w-6" strokeWidth={2} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-8 space-y-8 md:hidden">
          {howItWorks.steps.map((step, i) => {
            const Icon = stepIcons[step.icon] ?? Search;
            return (
              <div key={step.number}>
                <p className="font-headline text-lg font-bold text-primary">{step.number}.</p>
                <div className="mt-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="mt-2 font-headline text-base font-bold uppercase tracking-tight text-on-background">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">{step.description}</p>
                {i < howItWorks.steps.length - 1 ? (
                  <div className="mt-6 flex justify-center">
                    <ArrowRight className="h-6 w-6 rotate-90 text-primary" strokeWidth={2} aria-hidden />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
