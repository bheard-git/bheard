import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CTABand } from "@/components/sections/CTABand";
import { EXTERNAL_URLS } from "@/lib/constants";
import { faqPageJsonLd } from "@/lib/structured-data";
import { FAQ_DATA } from "@/data/faq";
import { FAQClient } from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ — Rodha",
  description:
    "Frequently asked questions about Rodha's courses, pricing, mentorship programs, test series, and exam preparation approach.",
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(FAQ_DATA)) }}
      />
      <section className="bg-hero-gradient section-spacing pt-8 md:pt-10">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-h1 md:text-[40px] font-bold tracking-tight">
              Frequently Asked{" "}
              <span className="text-orange-500">Questions</span>
            </h1>
            <p className="mt-3 text-body-lg text-text-muted max-w-xl mx-auto">
              Find answers to common questions about our programs, payments,
              mentorship, and test series.
            </p>
          </div>

          <div className="mt-8 md:mt-10">
            <FAQClient />
          </div>
        </Container>
      </section>

      <CTABand
        title="Still Have Questions?"
        subtitle="Our team is here to help you find the right program for your goals."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Ask Rodha Buddy", href: EXTERNAL_URLS.rodhaBuddy }}
      />
    </>
  );
}
