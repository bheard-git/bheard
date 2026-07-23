"use client";

import "@/lib/motion/config";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  Handshake,
  Target,
  Eye,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import ClientLogos from "@/components/ClientLogos";
import { prefersReducedMotion } from "@/lib/motion/animations";
import { sectionBandY, sectionPageX } from "@/components/system/sectionTheme";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NEHA_LINKEDIN = "https://www.linkedin.com/in/nehagupta";
const BHEARD_STORY_IMAGE = "/assets/home/about/the%20bheard%20story.png";
const FOUNDER_IMAGE = "/assets/about/Neha-founder-profile-image.jpeg";
const PROTECTED_IMAGE_CLASS =
  "pointer-events-none select-none object-cover [-webkit-user-drag:none]";

const VALUES: ReadonlyArray<{
  title: string;
  body: string;
  icon: LucideIcon;
}> = [
  {
    title: "Ownership",
    body: "We treat your goals like our own. We don't stop at deliverables; we focus on business outcomes.",
    icon: Target,
  },
  {
    title: "Transparency",
    body: "Clear communication, honest recommendations, and no vanity metrics disguised as success.",
    icon: Eye,
  },
  {
    title: "Results First",
    body: "Every decision begins with one question: will this move the business forward?",
    icon: Trophy,
  },
  {
    title: "Deep Partnership",
    body: "We work as an extension of your team, not an external vendor.",
    icon: Handshake,
  },
  {
    title: "Excellence",
    body: "Every campaign, design, and strategy is refined until it meets the highest standard.",
    icon: Sparkles,
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: "Retained partnerships",
    body: "Ongoing brand, content, and social media management for brands that want a long-term growth partner.",
    href: "/brand-solutions",
  },
  {
    title: "Project engagements",
    body: "Websites, mobile apps, campaigns, and platform builds with defined scope and outcomes.",
    href: "/tech-solutions",
  },
  {
    title: "AI Agent deployments",
    body: "Conversational AI configured, integrated, and optimised for hotels, resorts, and consumer brands.",
    href: "/services/tech-solutions/ai-chatbots-agents",
  },
] as const;

export default function AboutPageView() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        return;
      }

      const reveals = gsap.utils.toArray<HTMLElement>("[data-about-reveal]");
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 44, willChange: "transform" },
          {
            opacity: 1,
            y: 0,
            duration: 0.62,
            ease: "power3.out",
            clearProps: "willChange",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
          }
        );
      });

      const valueItems = gsap.utils.toArray<HTMLElement>("[data-about-value]");
      if (valueItems.length) {
        gsap.fromTo(
          valueItems,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: valueItems[0]?.closest("[data-about-values-wrap]"),
              start: "top 87%",
              once: true,
            },
          }
        );
      }
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef}>
      <AboutHeroSection />

      <section className={`bg-surface-container-highest/60 ${sectionPageX} ${sectionBandY}`}>
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:gap-20 md:items-center">
          <div data-about-reveal>
            <h2 className="mb-6 max-w-[16ch] font-headline text-[clamp(2rem,5.2vw,4.2rem)] font-extrabold uppercase leading-[0.95] text-neutral-900">
              The BHeard Story
            </h2>
            <div className="space-y-5 font-body text-body-lg text-on-surface-variant">
              <p>
                Founded in 2014 in Mumbai, BHeard began as a digital marketing consultancy during the
                rise of social media and has since evolved into a Brand &amp; Technology Studio serving
                lifestyle and consumer brands, wellness, travel, and{" "}
                <Link
                  href="/industries"
                  className="font-semibold text-neutral-900 underline decoration-primary underline-offset-4 hover:text-primary"
                >
                  hospitality
                </Link>
                , across India, the US, and Southeast Asia.
              </p>
              <p>
                Led by founder Neha Gupta, whose experience includes consulting and digital
                transformation at Accenture, BHeard brings together strategists, designers, marketers,
                and developers to solve modern business challenges through branding, marketing, and
                technology.
              </p>
              <p>
                Over the last decade, we have partnered with brands including Accor, Radisson Blu, HUL,
                ITC, BNP Paribas, and Goa Tourism, helping businesses strengthen their market presence,
                improve customer engagement, and navigate an increasingly digital world.{" "}
                <Link
                  href="/work"
                  className="font-semibold text-neutral-900 underline decoration-primary underline-offset-4 hover:text-primary"
                >
                  See our work
                </Link>
                .
              </p>
              <p>
                Today, we combine strategy, creativity, and technology to build brands, digital
                experiences, and growth-focused solutions that help businesses stay relevant and
                competitive.
              </p>
            </div>
          </div>
          <div
            data-about-reveal
            className="relative aspect-[4/5] max-h-[400px] w-full overflow-hidden rounded-xl bg-surface-container-high md:aspect-square"
          >
            <Image
              src={BHEARD_STORY_IMAGE}
              alt="BHeard team collaborating on brand strategy"
              fill
              draggable={false}
              className={`${PROTECTED_IMAGE_CLASS} object-center grayscale`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
          </div>
        </div>
      </section>

      <section className={`bg-surface-container-lowest ${sectionPageX} ${sectionBandY}`}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-14" data-about-reveal>
            <h2 className="max-w-[16ch] font-headline text-[clamp(2rem,5.2vw,4.2rem)] font-extrabold uppercase leading-[0.95] text-neutral-900">
              Founder Spotlight
            </h2>
            <span className="mb-3 inline-block font-body text-body-lg font-semibold uppercase tracking-widest text-primary">
              Led by Experience. Driven by Innovation.
            </span>
          </div>

          <article
            data-about-reveal
            className="grid gap-8 overflow-hidden rounded-2xl border border-outline-variant/80 bg-white shadow-sm md:grid-cols-12 md:gap-0"
          >
            <div className="relative aspect-[5/4] bg-surface-container-high md:col-span-5 md:aspect-auto md:min-h-[420px]">
              <Image
                src={FOUNDER_IMAGE}
                alt="Neha Gupta, founder of BHeard"
                fill
                draggable={false}
                className={`${PROTECTED_IMAGE_CLASS} object-top`}
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:col-span-7 md:px-10 md:py-12 lg:px-14">
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-neutral-900 md:text-3xl">
                <a
                  href={NEHA_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Neha Gupta
                </a>
              </h3>
              <p className="mt-2 font-body text-sm font-semibold uppercase tracking-wide text-primary">
                Founder · BHeard
              </p>
              <div className="mt-6 space-y-5 font-body text-base leading-relaxed text-on-surface-variant md:text-lg">
                <p>
                  Neha Gupta is an entrepreneur and growth strategist whose career spans technology,
                  consulting, marketing, and brand building. Her diverse experience across industries
                  enables her to combine strategic thinking, creativity, and consumer insight to help
                  businesses build stronger brands and drive meaningful growth.
                </p>
                <p>
                  She believes the most effective marketing goes beyond visibility — it creates
                  authentic connections, compelling brand experiences, and measurable business impact.
                  Having worked with organizations at various stages of growth, Neha brings a
                  practical, outcome-driven approach to turning business challenges into opportunities.
                </p>
                <p>
                  Passionate about the evolving intersection of storytelling, technology, and consumer
                  behavior, she is committed to helping brands stay relevant, differentiate themselves,
                  and create lasting value in an increasingly competitive marketplace.
                </p>
              </div>
              <blockquote className="mt-8 border-l-2 border-primary pl-5">
                <p className="font-body text-lg italic leading-relaxed text-neutral-800 md:text-xl">
                  &ldquo;The best marketing has never been about being seen. It&apos;s about being
                  chosen. Everything we build — a campaign, a platform, an AI agent — exists to move
                  that decision.&rdquo;
                </p>
                <cite className="mt-3 block font-body text-sm not-italic text-on-surface-variant">
                  — Neha Gupta, Founder
                </cite>
              </blockquote>
            </div>
          </article>
        </div>
      </section>

      <section
        className={`relative overflow-hidden bg-neutral-900 ${sectionPageX} ${sectionBandY}`}
        data-about-values-wrap
      >
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-primary/25 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16" data-about-reveal>
            <h2 className="font-headline text-display-lg font-extrabold uppercase leading-none text-white">
              What We Believe
            </h2>
          </div>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4 pt-7">
            {VALUES.map(({ title, body, icon: Icon }) => (
              <li
                key={title}
                data-about-value
                className="flex flex-col items-center px-2 text-center sm:px-3"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary-fixed"
                  aria-hidden
                >
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-headline text-lg font-bold uppercase tracking-tight text-white md:text-xl">
                  {title}
                </h3>
                <p className="mt-3 max-w-[28ch] font-body text-sm leading-relaxed text-neutral-300 md:text-base">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`bg-surface ${sectionPageX} ${sectionBandY}`}>
        <div className="mx-auto max-w-7xl">
          <div data-about-reveal className="mb-10 md:mb-14">
            <h2 className="max-w-[18ch] font-headline text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase leading-[0.95] text-neutral-900">
              How We Work With Brands
            </h2>
            <p className="mt-4 max-w-2xl font-body text-body-lg text-on-surface-variant">
              We partner with brands in three ways. Whichever the model, we work as an extension of
              your team — with clear communication, defined outcomes, and no vanity metrics.
            </p>
          </div>
          <ul className="grid md:grid-cols-3 md:divide-x md:divide-primary/50">
            {ENGAGEMENT_MODELS.map((model, index) => (
              <li
                key={model.title}
                data-about-reveal
                className={`flex flex-col py-6 md:px-8 md:py-0 ${
                  index < ENGAGEMENT_MODELS.length - 1
                    ? "border-b border-primary/50 pb-8 md:border-b-0 md:pb-0"
                    : ""
                } ${index === 0 ? "md:pl-0" : ""} ${index === ENGAGEMENT_MODELS.length - 1 ? "md:pr-0" : ""}`}
              >
                <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-neutral-900">
                  {model.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-base leading-relaxed text-on-surface-variant">
                  {model.body}
                </p>
                <Link
                  href={model.href}
                  className="mt-5 inline-flex items-center gap-2 font-headline text-sm font-bold uppercase tracking-wide text-neutral-900 transition-colors hover:text-primary"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClientLogos />

      <section
        id="contact"
        className={`scroll-mt-28 bg-gradient-to-br from-primary-container to-primary-dim ${sectionPageX} py-24 md:py-32`}
      >
        <div className="mx-auto max-w-8xl">
          <div
            className="grid gap-10 md:grid-cols-12 md:items-center md:gap-16"
            data-about-reveal
          >
            <div className="md:col-span-7">
              <h2 className="font-headline text-display-lg font-black uppercase leading-[0.95] text-on-primary-container">
                Let&apos;s Build What&apos;s Next
              </h2>
              <p className="mt-5 max-w-xl font-body text-body-lg text-on-primary-container/90">
                Whether you&apos;re launching, growing, or reimagining your brand, we&apos;d love to
                hear what you&apos;re building.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-5">
              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-5 font-headline text-lg font-bold text-neutral-900 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Let&apos;s Talk
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
              <a
                href="mailto:hello@bheard.in"
                className="font-body text-sm font-medium text-on-primary-container/85 underline decoration-on-primary-container/40 underline-offset-4"
              >
                hello@bheard.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
