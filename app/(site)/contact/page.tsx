import type { Metadata } from "next";
import InnerPageHero from "@/components/system/InnerPageHero";
import ContactLeadForm from "@/components/site/ContactLeadForm";
import { sectionContentBand, sectionPageX } from "@/components/system/sectionTheme";

export const metadata: Metadata = {
  title: "Contact BHeard - Branding & Tech Agency in Lower Parel, Mumbai",
  description:
    "Book a call with BHeard. Head office in Lower Parel, Mumbai, with a branch office in Delhi. Write to hello@bheard.in or call +91 9326602832.",
};

export default function ContactPage() {
  return (
    <>
      <InnerPageHero
        watermark="Contact"
        heading="Let's Talk"
        subtext="We work with a focused number of clients each quarter. Share your brief — we'll respond within one business day."
      />
      <section className={`bg-surface ${sectionPageX} py-section-y-sm md:py-section-y`}>
        <div className={`${sectionContentBand} grid max-w-5xl gap-10 md:grid-cols-12 md:gap-12`}>
          <aside className="md:col-span-4">
            <h2 className="font-headline text-xl font-bold uppercase tracking-tight text-on-surface">
              Get in touch
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant">
              Head office in Lower Parel, Mumbai, with a branch office in Delhi.
            </p>
            <ul className="mt-6 space-y-3 font-body text-sm">
              <li>
                <a
                  href="tel:+919326602832"
                  className="font-semibold text-on-surface transition-colors hover:text-primary"
                >
                  +91 9326602832
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@bheard.in"
                  className="font-semibold text-on-surface transition-colors hover:text-primary"
                >
                  hello@bheard.in
                </a>
              </li>
            </ul>
            <address className="mt-8 not-italic font-body text-sm leading-relaxed text-on-surface-variant">
              <p className="font-headline text-xs font-bold uppercase tracking-widest text-primary">
                Head Office — Mumbai
              </p>
              <p className="mt-2">
                B1-604, Marathon Innova Corporate Centre,
                <br />
                Marathon NextGen Compound, Lower Parel,
                <br />
                Mumbai, Maharashtra – 400013
              </p>
              <p className="mt-6 font-headline text-xs font-bold uppercase tracking-widest text-primary">
                Branch Office — Delhi
              </p>
              <p className="mt-2">
                WH-75, Mayapuri Industrial Area, Phase-1,
                <br />
                South West Delhi, Delhi – 110064
              </p>
            </address>
          </aside>
          <div className="rounded-2xl border border-outline-variant/60 bg-white p-6 shadow-sm md:col-span-8 md:p-8">
            <div className="mb-6">
              <h2 className="font-headline text-2xl font-bold text-on-surface">Send a message</h2>
              <p className="mt-2 text-sm text-on-surface-variant">
                Tell us about your brand, product, or campaign goals — we&apos;ll come back with a
                clear point of view.
              </p>
            </div>
            <ContactLeadForm sourcePage="/contact" />
          </div>
        </div>
      </section>
    </>
  );
}
