import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";

export const metadata: Metadata = {
  title: "FAQ — Rodha",
  description: "Frequently asked questions about Rodha's courses, pricing, mentorship programs, and exam preparation approach.",
};

export default function FAQPage() {
  return (
    <section className="section-spacing">
      <Container>
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Find answers to the most common questions about our programs."
        />
        <p className="text-center text-text-dimmed">FAQ content coming soon...</p>
      </Container>
    </section>
  );
}
