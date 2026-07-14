import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";

export const metadata: Metadata = {
  title: "CLAT Preparation — Rodha",
  description: "Strategic CLAT preparation for top National Law Universities. Legal reasoning, English, current affairs, and more.",
};

export default function CLATPage() {
  return (
    <>
      <HeroSection
        title={<>Your Path to Top <span className="text-gradient-orange">NLUs</span></>}
        subtitle="Strategic CLAT preparation with legal reasoning workshops, mock tests, and daily current affairs updates."
      >
        <a href="#courses" className="btn-primary text-body-lg px-8 py-3">
          View CLAT Courses
        </a>
        <a href="/contact" className="btn-secondary text-body-lg px-8 py-3">
          Book Free Demo
        </a>
      </HeroSection>

      <section id="courses" className="section-spacing">
        <Container>
          <SectionHeader title="CLAT Courses" subtitle="Programs designed for National Law University admissions." />
          <p className="text-center text-text-dimmed">Course cards coming soon...</p>
        </Container>
      </section>
    </>
  );
}
