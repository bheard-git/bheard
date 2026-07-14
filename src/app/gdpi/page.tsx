import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";

export const metadata: Metadata = {
  title: "GDPI Preparation — Rodha",
  description: "GDPI preparation to ace your B-school selection process. Mock GDs, interview practice, and expert feedback.",
};

export default function GDPIPage() {
  return (
    <>
      <HeroSection
        title={<>Convert Your <span className="text-gradient-orange">GDPI</span> Calls</>}
        subtitle="Master Group Discussions and Personal Interviews with mock sessions, expert feedback, and proven frameworks."
      >
        <a href="#courses" className="btn-primary text-body-lg px-8 py-3">
          View GDPI Courses
        </a>
        <a href="/contact" className="btn-secondary text-body-lg px-8 py-3">
          Book Free Demo
        </a>
      </HeroSection>

      <section id="courses" className="section-spacing">
        <Container>
          <SectionHeader title="GDPI Courses" subtitle="Prepare for the final step of your B-school admission." />
          <p className="text-center text-text-dimmed">Course cards coming soon...</p>
        </Container>
      </section>
    </>
  );
}
