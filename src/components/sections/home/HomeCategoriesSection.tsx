import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ExamCard } from "@/components/cards/ExamCard";
import { Carousel } from "@/components/ui/Carousel";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { CATEGORIES } from "@/lib/constants";

export function HomeCategoriesSection() {
  return (
    <section className="section-spacing relative">
      <Container>
        <SectionHeader
          title={
            <>
              Choose Your Exam,{" "}
              <span className="text-orange-500">Start Your Journey</span>
            </>
          }
          subtitle="Comprehensive preparation for every competitive exam"
          align="center"
        />

        <RevealGroup>
          <div className="xl:hidden">
            <Carousel itemClassName="gap-4">
              {CATEGORIES.map((cat, index) => (
                <div
                  key={cat.id}
                  className={`snap-start shrink-0 w-[280px] sm:w-[300px] reveal-child reveal-delay-${(index % 4) + 1}`}
                >
                  <ExamCard category={cat} className="h-full" />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="hidden xl:grid grid-cols-5 gap-4">
            {CATEGORIES.map((cat, index) => (
              <ExamCard
                key={cat.id}
                category={cat}
                className={`reveal-child reveal-delay-${(index % 4) + 1}`}
              />
            ))}
          </div>
        </RevealGroup>
      </Container>
    </section>
  );
}
