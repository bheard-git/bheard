"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ClientLogos from "@/components/ClientLogos";
import { sectionBandY, sectionPageX } from "@/components/system/sectionTheme";

const INDUSTRIES = [
  {
    id: "consumer-fmcg",
    title: "Consumer & FMCG",
    headline: "Winning Attention in Competitive Categories",
    body: "We help consumer brands build stronger positioning, launch products with confidence, and create connected digital experiences that influence purchase decisions across every touchpoint.",
    expertise: [
      { label: "Brand Strategy", href: "/brand-solutions" },
      { label: "D2C Websites", href: "/tech-solutions" },
      { label: "Product Launch Campaigns", href: "/brand-solutions" },
      { label: "Performance Marketing", href: "/brand-solutions" },
      { label: "Content Systems", href: "/brand-solutions" },
    ],
    trustedBy: "HUL · ITC · BNP Paribas · Zumba Wear",
    work: {
      text: "Supporting HUL and ITC with brand strategy, product launch campaigns, digital content, and integrated marketing across multiple consumer categories.",
      href: "/work/zumba-wear",
    },
  },
  {
    id: "hospitality-luxury",
    title: "Hospitality & Luxury",
    headline: "Where Guest Experience Begins Before Check-in",
    body: "The guest journey starts long before someone walks through your doors. Every interaction — from social media and your website to the booking experience — shapes how your brand is perceived. For over a decade, we've helped hotels, resorts, and luxury brands strengthen digital presence, increase booking intent, and create guest experiences that extend beyond the stay.",
    expertise: [
      { label: "AI Guest Assistants", href: "/services/tech-solutions/ai-chatbots-agents" },
      { label: "Social Media", href: "/brand-solutions" },
      { label: "Performance Marketing", href: "/brand-solutions" },
      { label: "Influencer Campaigns", href: "/brand-solutions" },
    ],
    trustedBy: "Accor · Radisson · Novotel · ITC · Treat Resorts",
    work: {
      text: "Delivering integrated brand, marketing, and technology solutions for Radisson Blu, Accor, Novotel, and other hospitality brands — from social media and booking websites to AI Guest Agents.",
      href: "/work/radisson-blu-goa",
    },
  },
  {
    id: "health-wellness",
    title: "Health & Wellness",
    headline: "Trust Comes Before Conversion",
    body: "We help wellness brands build authority through founder-led storytelling, content strategy, and digital experiences that strengthen credibility before the customer is ready to buy.",
    expertise: [
      { label: "Founder Branding", href: "/brand-solutions" },
      { label: "Content Strategy", href: "/brand-solutions" },
      { label: "Social Media", href: "/brand-solutions" },
      { label: "Digital Campaigns", href: "/brand-solutions" },
      { label: "Wellness Platforms", href: "/tech-solutions" },
    ],
    trustedBy:
      "Dr. Mickey Mehta · German Osteo Care · Jaslok Hospital · Dr Tvacha · Shammi's Yogalaya · Dr. Sameera Gupta",
    work: {
      text: "Partnering with wellness brands and global healthcare companies, including German Osteocare, to build credibility through content strategy, digital campaigns, and strategic brand positioning.",
      href: "/work/dr-mickey-mehta",
    },
  },
  {
    id: "travel-tourism",
    title: "Travel & Tourism",
    headline: "Inspiring Journeys Before They Begin",
    body: "We combine destination storytelling with digital strategy to help tourism brands spark curiosity, increase travel consideration, and influence travel decisions.",
    expertise: [
      { label: "Destination Campaigns", href: "/brand-solutions" },
      { label: "Tourism Marketing", href: "/brand-solutions" },
      { label: "Influencer Collaborations", href: "/brand-solutions" },
      { label: "Travel Websites", href: "/tech-solutions" },
      { label: "Paid Media", href: "/brand-solutions" },
    ],
    trustedBy: "Goa Tourism · Caper Travel",
    work: {
      text: "Creating destination marketing campaigns and digital experiences for Goa Tourism and Caper Travel, inspiring domestic and NRI travellers across digital channels.",
      href: "/work/goa-tourism",
    },
  },
  {
    id: "education-edtech",
    title: "Education & EdTech",
    headline: "Building Trust That Leads to Enrolment",
    body: "Modern education extends far beyond the classroom. We design digital platforms, mobile applications, marketing campaigns, and student experiences that help institutions attract, engage, and retain learners.",
    expertise: [
      { label: "Learning Platforms", href: "/tech-solutions" },
      { label: "Mobile Apps", href: "/tech-solutions" },
      { label: "Lead Generation", href: "/brand-solutions" },
      { label: "AI Automation", href: "/services/tech-solutions/ai-chatbots-agents" },
      { label: "Brand Strategy", href: "/brand-solutions" },
    ],
    trustedBy: "Broward College · Rodha",
    work: {
      text: "Developed digital platforms, brand communication, and student experiences for Broward College, supporting its expansion and engagement in the Indian market.",
      href: "/work/rodha-edtech",
    },
  },
] as const;

export default function IndustriesHubView() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 px-8 pb-20 pt-36 md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-primary/20 blur-[120px]" />
        <div className="mx-auto max-w-content-max">
          <p className="font-label text-label-sm uppercase tracking-[0.2em] text-primary-fixed">
            Industries We Serve
          </p>
          <h1 className="mt-4 max-w-4xl font-headline text-[clamp(2.2rem,6vw,4.2rem)] font-black uppercase leading-[0.94] tracking-tight text-white">
            Built for Industries Where Brand Drives Business
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-neutral-300 md:text-lg">
            Every industry earns growth differently. Understanding that difference is where strategy
            begins. From hospitality and travel to consumer, wellness, and education — across India,
            the US, and Southeast Asia — every strategy we build starts with understanding the people
            behind the purchase.
          </p>
        </div>
      </section>

      <section className={`bg-surface ${sectionPageX} ${sectionBandY}`}>
        <div className="mx-auto max-w-content-max space-y-16 md:space-y-24">
          {INDUSTRIES.map((industry, index) => (
            <article
              key={industry.id}
              id={industry.id}
              className="scroll-mt-28 border-t border-outline-variant/50 pt-12 first:border-t-0 first:pt-0 md:pt-16"
            >
              <p className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {String(index + 1).padStart(2, "0")} · {industry.title}
              </p>
              <h2 className="mt-3 max-w-[20ch] font-headline text-[clamp(1.75rem,4vw,2.75rem)] font-black uppercase leading-[0.98] text-neutral-900">
                {industry.headline}
              </h2>
              <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-on-surface-variant md:text-lg">
                {industry.body}
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-neutral-900">
                    Expertise
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {industry.expertise.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="inline-block rounded-sm border border-outline-variant/70 bg-surface-container px-3 py-1.5 font-body text-sm text-on-surface transition-colors hover:border-primary/50 hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-neutral-900">
                    Trusted by
                  </h3>
                  <p className="mt-3 font-body text-base text-on-surface-variant">{industry.trustedBy}</p>
                </div>
              </div>

              <p className="mt-6 max-w-3xl font-body text-base leading-relaxed text-on-surface-variant">
                {industry.work.text}{" "}
                <Link
                  href={industry.work.href}
                  className="font-semibold text-neutral-900 underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
                >
                  Explore our work
                </Link>
              </p>
            </article>
          ))}
        </div>
      </section>

      <ClientLogos />

      <section
        className={`bg-gradient-to-br from-primary-container to-primary-dim ${sectionPageX} py-20 md:py-28`}
      >
        <div className="mx-auto max-w-content-max">
          <h2 className="max-w-[16ch] font-headline text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[0.95] text-on-primary-container">
            Let&apos;s Build What&apos;s Next
          </h2>
          <p className="mt-5 max-w-xl font-body text-body-lg text-on-primary-container/90">
            If your brand operates in a category where experience, trust, and digital innovation drive
            growth, we&apos;d love to talk.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 font-headline text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-primary"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
