import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Our Team — Rodha",
  description: "Meet the passionate team behind Rodha, dedicated to helping aspirants achieve their dream B-school and law school admissions.",
};

export default function TeamPage() {
  return (
    <section className="section-spacing">
      <Container>
        <h1 className="text-h1 md:text-hero font-bold">Our <span className="text-gradient-orange">Team</span></h1>
        <p className="mt-4 text-body-lg text-text-muted max-w-2xl">
          Meet the people who make Rodha possible.
        </p>
        <p className="mt-8 text-text-dimmed">Full content coming soon...</p>
      </Container>
    </section>
  );
}
