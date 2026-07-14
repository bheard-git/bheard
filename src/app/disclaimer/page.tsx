import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Disclaimer — Rodha",
  description: "Disclaimer for Rodha's educational platform and content.",
};

export default function DisclaimerPage() {
  return (
    <section className="section-spacing">
      <Container>
        <h1 className="text-h1 font-bold">Disclaimer</h1>
        <p className="mt-4 text-body-lg text-text-muted">Last updated: July 2026</p>
        <p className="mt-8 text-text-dimmed">Full disclaimer coming soon...</p>
      </Container>
    </section>
  );
}
