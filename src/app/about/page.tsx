import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "About Us — Rodha",
  description: "Learn about Rodha's mission to democratize competitive exam preparation through expert mentorship and proven strategies.",
};

export default function AboutPage() {
  return (
    <section className="section-spacing">
      <Container>
        <h1 className="text-h1 md:text-hero font-bold">About <span className="text-gradient-orange">Rodha</span></h1>
        <p className="mt-4 text-body-lg text-text-muted max-w-2xl">
          Our mission is to make quality competitive exam preparation accessible to every aspirant across India.
        </p>
        <p className="mt-8 text-text-dimmed">Full content coming soon...</p>
      </Container>
    </section>
  );
}
