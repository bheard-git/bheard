"use client";

import { Container } from "@/components/layout/Container";
import { ExamCard } from "@/components/cards/ExamCard";
import { Carousel } from "@/components/ui/Carousel";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { CATEGORIES } from "@/lib/constants";
import { useCounsellingModal } from "@/hooks/useCounsellingModal";
import { SectionHeaderV2 } from "../SectionHeaderV2";
import { ExamCardV2 } from "@/components/cards/ExamCardV2";

export function HomeCategoriesSection() {
  const { openCounsellingModal } = useCounsellingModal();

  return (
    <section data-home-zone="categories" className="home-section-spacing home-section-spacing-lg relative bg-[#FFF3E8]">
      <Container>
        <SectionHeaderV2
          title={<p>Choose Your Exam, <br />Start Your Journey</p>}
          // subtitle="Comprehensive preparation for every competitive exam"
          className="max-w-[472px] mx-auto lg:!mb-10"
          align="center"
          badge="EXPLORE YOUR OPPORTUNITIES"
        />

        <RevealGroup>
          <div className="xl:hidden">
            <Carousel itemClassName="gap-4">
              {CATEGORIES.map((cat, index) => (
                <div
                  key={cat.id}
                  className={`snap-start shrink-0 w-[200px] sm:w-[270px] reveal-child reveal-delay-${(index % 4) + 1}`}
                >
                  <ExamCardV2
                    category={cat}
                    className="h-full"
                    onCounsellingSelect={(category) =>
                      openCounsellingModal({ defaultExam: category.id })
                    }
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="hidden xl:grid grid-cols-5 gap-4">
            {CATEGORIES.map((cat, index) => (
              <ExamCardV2
                key={cat.id}
                category={cat}
                className={`reveal-child reveal-delay-${(index % 4) + 1}`}
                onCounsellingSelect={(category) =>
                  openCounsellingModal({ defaultExam: category.id })
                }
              />
            ))}
          </div>
        </RevealGroup>
      </Container>
    </section>
  );
}
