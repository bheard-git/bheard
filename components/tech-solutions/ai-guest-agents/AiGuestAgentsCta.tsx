"use client";

import { ConciergeBell } from "lucide-react";
import { useLeadForm } from "@/components/site/LeadFormProvider";
import { AI_GUEST_AGENTS_PAGE_PATH, aiGuestAgentsContent } from "@/lib/content/ai-guest-agents";
import { aiGuestContainer, aiGuestSectionX } from "./sectionTheme";

export default function AiGuestAgentsCta() {
  const { openLeadForm } = useLeadForm();
  const { closingCta } = aiGuestAgentsContent;

  return (
    <section className={`${aiGuestSectionX} mt-10 md:mt-12`}>
      <div className={aiGuestContainer}>
        <div className="relative overflow-hidden rounded-xl bg-primary px-6 py-8 md:px-10 md:py-10">
          <ConciergeBell
            className="pointer-events-none absolute right-4 top-1/2 h-48 w-48 -translate-y-1/2 text-black/[0.06] md:right-8 md:h-64 md:w-64"
            strokeWidth={0.75}
            aria-hidden
          />

          <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:gap-10 md:text-left">
            <div>
              <h2 className="max-w-2xl font-headline text-[clamp(1.5rem,3.5vw,2.5rem)] font-black uppercase leading-tight tracking-tight text-on-background">
                {closingCta.heading}
              </h2>
              <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-on-background/90 md:mt-4 md:text-base">
                {closingCta.paragraph}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                openLeadForm({
                  sourcePage: AI_GUEST_AGENTS_PAGE_PATH,
                  title: "Book a Demo",
                  subtitle: "Tell us about your property — we'll show you how AI Guest Agents can help.",
                })
              }
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-white px-9 py-4 font-headline text-sm font-bold uppercase tracking-widest text-primary shadow-lg transition-transform hover:scale-[1.02]"
            >
              {closingCta.ctaLabel} <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
