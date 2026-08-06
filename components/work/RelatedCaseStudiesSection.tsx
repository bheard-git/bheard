"use client";

import SolutionsCaseStudyCard, {
  type SolutionsCaseStudyCardProps,
} from "@/components/solutions/SolutionsCaseStudyCard";
import { sectionContentBand, sectionPageX } from "@/components/system/sectionTheme";

type RelatedCaseStudiesSectionProps = {
  cards: SolutionsCaseStudyCardProps[];
  heading?: string;
  reveal?: boolean;
  className?: string;
};

export default function RelatedCaseStudiesSection({
  cards,
  heading = "Related Case Studies",
  reveal = false,
  className = "mt-20 md:mt-24",
}: RelatedCaseStudiesSectionProps) {
  if (cards.length === 0) return null;

  return (
    <section className={`${sectionPageX} ${className}`}>
      <div className={sectionContentBand}>
        <div {...(reveal ? { "data-reveal": true } : {})} className="mb-6 md:mb-8">
          <h2 className="mt-3 max-w-3xl font-headline text-[clamp(1.75rem,3.5vw,2.75rem)] font-black uppercase leading-tight tracking-tight text-on-background">
            {heading}
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
          {cards.map((card) => (
            <div key={card.id} {...(reveal ? { "data-reveal": true } : {})}>
              <SolutionsCaseStudyCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
