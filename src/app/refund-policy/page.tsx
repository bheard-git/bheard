import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Refund Policy — Rodha",
  description: "Rodha's refund policy for course purchases and subscription services.",
};

export default function RefundPolicyPage() {
  return (
    <section className="section-spacing">
      <Container>
        <h1 className="text-h1 font-bold">Refund Policy</h1>
        <p className="mt-4 text-body-lg text-text-muted">Last updated: July 2026</p>
        <p className="mt-8 text-text-dimmed">Full refund policy coming soon...</p>
      </Container>
    </section>
  );
}
