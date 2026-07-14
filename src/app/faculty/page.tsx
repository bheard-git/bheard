import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";

export const metadata: Metadata = {
  title: "Our Faculty — Rodha",
  description: "Learn from India's top educators and IIM/NLU alumni. Meet the faculty who power Rodha's exam preparation programs.",
};

export default function FacultyPage() {
  return (
    <section className="section-spacing">
      <Container>
        <SectionHeader
          title="Our Faculty"
          subtitle="Learn from the best minds in competitive exam preparation."
        />
        <p className="text-center text-text-dimmed">Faculty profiles coming soon...</p>
      </Container>
    </section>
  );
}
