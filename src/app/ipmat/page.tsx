import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";

export const metadata: Metadata = {
  title: "IPMAT Preparation — Rodha",
  description: "Targeted IPMAT coaching for IIM Indore, Rohtak and other top B-schools. Structured preparation with expert faculty.",
};

export default function IPMATPage() {
  return (
    <>
      <HeroSection
        title={<>Ace <span className="text-gradient-orange">IPMAT</span> on Your First Attempt</>}
        subtitle="Targeted preparation for IIM Indore & Rohtak's Integrated Programme in Management. Start your MBA journey early."
      >
        <a href="#courses" className="btn-primary text-body-lg px-8 py-3">
          View IPMAT Courses
        </a>
        <a href="/contact" className="btn-secondary text-body-lg px-8 py-3">
          Book Free Demo
        </a>
      </HeroSection>

      <section id="courses" className="section-spacing">
        <Container>
          <SectionHeader title="IPMAT Courses" subtitle="Programs designed for the unique IPMAT pattern." />
          <p className="text-center text-text-dimmed">Course cards coming soon...</p>
        </Container>
      </section>
    </>
  );
}
