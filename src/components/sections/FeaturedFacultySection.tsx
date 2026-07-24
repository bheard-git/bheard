import { Container } from "@/components/layout/Container";
import { Carousel } from "@/components/ui/Carousel";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FacultyListingCard } from "@/components/cards/FacultyListingCard";
import type { Faculty } from "@/lib/types";

interface FeaturedFacultySectionProps {
  members: Faculty[];
}

export function FeaturedFacultySection({ members }: FeaturedFacultySectionProps) {
  if (members.length === 0) return null;

  return (
    <section className="section-spacing pt-8 md:pt-10 pb-6 md:pb-8 bg-bg-secondary">
      <Container>
        <SectionHeader
          label="Featured Faculty"
          title={
            <>
              Learn from India&apos;s{" "}
              <span className="text-orange-500">Top Educators</span>
            </>
          }
          align="left"
        />
        <RevealGroup>
          <Carousel>
            {members.map((member, index) => (
              <div
                key={member.id}
                className={`snap-start shrink-0 reveal-child reveal-delay-${(index % 4) + 1}`}
              >
                <FacultyListingCard faculty={member} variant="carousel" />
              </div>
            ))}
          </Carousel>
        </RevealGroup>
      </Container>
    </section>
  );
}
