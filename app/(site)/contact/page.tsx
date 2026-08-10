import type { Metadata } from "next";
import ContactLeadForm from "@/components/site/ContactLeadForm";
import ListingBandHero from "@/components/system/ListingBandHero";
import JsonLd from "@/components/seo/JsonLd";
import { sectionBandY, sectionContentBand, sectionPageX } from "@/components/system/sectionTheme";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildBreadcrumbSchema, buildContactPageSchema } from "@/lib/seo/schema";
import SignalDivider from "@/components/signal/SignalDivider";
import {
  MapPin,
} from "lucide-react";
import LinkedIn from "@/components/icons/LinkedIn";
import { FaInstagram } from "react-icons/fa";

export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.contact);

export default function ContactPage() {
  const schema = [buildContactPageSchema(), buildBreadcrumbSchema(BREADCRUMBS.contact)];

  return (
    <>
      <JsonLd data={schema} />
      <ListingBandHero
        watermark="Contact"
        eyebrow="Let's Talk"
        title="Ready to Be Heard?"
        copy="We work with a limited number of clients to ensure focused strategy and high-quality execution. Tell us what you're building — we'd love to help you build it."
        className="contact-section"
        copyClass="max-w-lg xl:max-w-2xl"
      />
      <section className={`bg-surface ${sectionPageX} ${sectionBandY} relative `}>
        <div className="-translate-y-[52px] md:-translate-y-20 w-screen left-0 absolute top-0">
          <SignalDivider className="h-12 md:h-16" />
        </div>
        <div className={`${sectionContentBand} grid max-w-5xl gap-10 lg:grid-cols-12 md:gap-12 min-h-[270px]`}>
          <aside className="lg:col-span-7">
            <h2 className="font-headline text-xl font-bold uppercase tracking-tight text-on-surface">
            Let's Build What's Next
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant">
            Whether you're launching a brand, growing a business, or reimagining your digital presence, every conversation starts the same way — understanding what you're trying to achieve.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant">
            Share your brief below, and our team will get back to you shortly.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant">
              Prefer to talk it through? Write to us at <a
                  href="mailto:hello@bheard.in"
                  className="font-semibold text-on-surface transition-colors inline-block hover:text-primary"
                >
                  hello@bheard.in
                </a> or call <a
                  href="tel:+919326602832"
                  className="font-semibold text-on-surface transition-colors inline-block hover:text-primary"
                >
                  +91 9326602832
                </a> — we're happy to jump on a call.
            </p>
            {/* <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="group rounded-2xl border border-outline-variant/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div>
                    <p className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      Head Office - Mumbai
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm leading-relaxed text-on-surface-variant">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <p>
                    B1-604, Marathon Innova Corporate Centre,
                    <br />
                    Marathon NextGen Compound,
                    <br />
                    Lower Parel,
                    <br />
                    Mumbai, Maharashtra – 400013
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl border border-outline-variant/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div>
                    <p className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      Branch Office - Delhi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm leading-relaxed text-on-surface-variant">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <p>
                    WH-75, Mayapuri Industrial Area,
                    <br />
                    Phase-1,
                    <br />
                    South West Delhi,
                    <br />
                    Delhi – 110064
                  </p>
                </div>
              </div>
            </div> */}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <p className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-primary whitespace-nowrap">
                Follow us on
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.instagram.com/letsbheard/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-1 rounded-full text-sm font-medium text-on-surface transition-all duration-300 hover:text-primary-fixed"
                >
                  <FaInstagram className="h-4 w-4 hover:text-primary-fixed"/>
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.linkedin.com/company/letsbheard/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center gap-1 rounded-full text-sm font-medium text-on-surface transition-all duration-300 hover:text-primary-fixed"
                >
                  <LinkedIn className="h-4 w-4 hover:text-primary-fixed" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </aside>
          <div className="lg:-translate-y-[25rem] lg:h-10 relative lg:col-span-5">
            <div className="rounded-2xl w-full h-fit lg:absolute border border-outline-variant/60 bg-white p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="font-headline text-2xl font-bold text-on-surface">Tell Us About Your Project</h2>
                <p className="mt-2 text-sm text-on-surface-variant">
                  Tell us about your brand, product, or campaign goals — we&apos;ll come back with a
                  clear point of view.
                </p>
              </div>
              <ContactLeadForm sourcePage="/contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
