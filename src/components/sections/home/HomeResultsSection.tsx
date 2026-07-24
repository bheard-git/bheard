import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { TopperCardAlternate } from "@/components/cards/TopperCardAlternate";
import { Carousel } from "@/components/ui/Carousel";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { topResults } from "@/data/results";

export function HomeResultsSection() {
  return (
    <section id="results" className="section-spacing relative overflow-hidden">
      <Container>
        <SectionHeader
          title={
            <>
              Results that{" "}
              <span className="text-orange-500">speak for themselves.</span>
            </>
          }
          subtitle="Real students. Real success."
          viewAllHref="/mba#results"
          viewAllLabel="View All Results"
          align="left"
        />
        <RevealGroup>
          <Carousel itemClassName="gap-4">
            {topResults.map((topper, index) => (
              <div
                key={topper.id}
                className={`snap-start shrink-0 reveal-child reveal-delay-${(index % 4) + 1}`}
              >
                <TopperCardAlternate
                  topper={topper}
                  variant={index % 2 === 0 ? "orange" : "dark"}
                />
              </div>
            ))}
          </Carousel>
        </RevealGroup>
      </Container>
    </section>
  );
}
