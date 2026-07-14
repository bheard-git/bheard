import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions — Rodha",
  description: "Terms and conditions for using Rodha's platform and educational services.",
};

export default function TermsPage() {
  return (
    <section className="section-spacing">
      <Container>
        <h1 className="text-h1 font-bold">Terms & Conditions</h1>
        <p className="mt-4 text-body-lg text-text-muted">Last updated: July 2026</p>
        <p className="mt-8 text-text-dimmed">Full terms and conditions coming soon...</p>
      </Container>
    </section>
  );
}
