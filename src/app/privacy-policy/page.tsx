import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — Rodha",
  description: "Rodha's privacy policy explaining how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-spacing">
      <Container>
        <h1 className="text-h1 font-bold">Privacy Policy</h1>
        <p className="mt-4 text-body-lg text-text-muted">Last updated: July 2026</p>
        <p className="mt-8 text-text-dimmed">Full privacy policy coming soon...</p>
      </Container>
    </section>
  );
}
