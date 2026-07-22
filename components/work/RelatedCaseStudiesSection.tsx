"use client";

import SolutionsCaseStudyCard, {
  type SolutionsCaseStudyCardProps,
} from "@/components/solutions/SolutionsCaseStudyCard";

const band = "mx-auto w-full max-w-7xl px-8";

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
  className = "mt-10 md:mt-12",
}: RelatedCaseStudiesSectionProps) {
  if (cards.length === 0) return null;

  return (
    <section className={className}>
      <div className={band}>
        <div {...(reveal ? { "data-reveal": true } : {})} className="mb-6 text-center md:mb-8">
          <h2 className="font-headline text-2xl font-black uppercase tracking-tight text-on-surface md:text-3xl">
            {heading}
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
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
