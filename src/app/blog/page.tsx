import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";

export const metadata: Metadata = {
  title: "Blog — Rodha",
  description: "Insights, tips, and strategies for CAT, IPMAT, GDPI, and CLAT preparation from Rodha's expert faculty.",
};

export default function BlogPage() {
  return (
    <section className="section-spacing">
      <Container>
        <SectionHeader
          title="Blog & Insights"
          subtitle="Tips, strategies, and exam insights from our expert faculty."
        />
        <p className="text-center text-text-dimmed">Blog posts coming soon...</p>
      </Container>
    </section>
  );
}
