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
  ClipboardCheck,
  Flame,
  Lightbulb,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import ClientLogos from "@/components/ClientLogos";
import { prefersReducedMotion } from "@/lib/motion/animations";
import { sectionBandY, sectionPageX, sectionStackTop } from "@/components/system/sectionTheme";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const ABOUT_FOOTER_TEXT = "LET'S BUILD YOUR\nNEXT GROWTH CHAPTER";

const VALUES: ReadonlyArray<{
  title: string;
  body: string;
  icon: LucideIcon;
}> = [
  {
    title: "Accountability",
    body: "We take ownership of our work, our commitments, and the outcomes we deliver.",
    icon: ClipboardCheck,
  },
  {
    title: "Integrity",
    body: "We build trust through transparency, honesty, and ethical decision-making.",
    icon: ShieldCheck,
  },
  {
    title: "Passion",
    body: "We bring energy, curiosity, and dedication to every project and partnership.",
    icon: Flame,
  },
  {
    title: "Innovation",
    body: "We continuously explore new ideas, technologies, and approaches to create meaningful impact.",
    icon: Lightbulb,
  },
];

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

      gsap.fromTo(
        '[data-about-footer="headline-letter"]',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.024,
          scrollTrigger: {
            trigger: '[data-about-footer="section"]',
            start: "top 80%",
            once: true,
          },
        }
      );
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
                BHeard emerged in the early 2010s, at a time when social media was beginning to reshape how brands
                communicated, engaged, and built relationships with their audiences.
              </p>
              <p>
                What started as a digital marketing consultancy working with lifestyle and hospitality brands has
                evolved into a brand and technology studio, helping businesses navigate an increasingly connected world.
              </p>
              <p>
                Today, we work at the intersection of strategy, creativity, and technology to build stronger brands,
                smarter digital experiences, and meaningful customer connections.
              </p>
              <p>
                From social media and content to websites, automation, and digital innovation, we help brands stay
                relevant, grow with confidence, and create lasting impact in a digital-first era.
              </p>
            </div>
          </div>
          <div
            data-about-reveal
            className="relative aspect-[4/5] max-h-[400px] w-full overflow-hidden rounded-xl bg-surface-container-high md:aspect-square"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="BHeard team collaborating on brand and technology strategy"
              fill
              className="object-cover grayscale transition duration-700 hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
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
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                alt="Neha Gupta, founder of BHeard"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:col-span-7 md:px-10 md:py-12 lg:px-14">
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-neutral-900 md:text-3xl">
                Neha Gupta
              </h3>
              <p className="mt-2 font-body text-sm font-semibold uppercase tracking-wide text-primary">
                Founder · BHeard
              </p>
              <div className="mt-6 space-y-5 font-body text-base leading-relaxed text-on-surface-variant md:text-lg">
                <p>
                  BHeard was founded by Neha Gupta, a technology and marketing leader with experience across consulting,
                  digital transformation, analytics, and business growth.
                </p>
                <p>
                  Prior to launching BHeard, she worked with global organizations including Accenture, driving
                  innovation and consulting initiatives across Asia-Pacific markets.
                </p>
                <p>
                  Over the last decade, she has helped build BHeard into a trusted partner for hospitality, travel,
                  lifestyle, and consumer brands, combining strategic thinking, creativity, and technology to deliver
                  meaningful business impact.
                </p>
              </div>
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
              Our Values
            </h2>
          </div>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 pt-7">
            {VALUES.map(({ title, body, icon: Icon }) => (
              <li
                key={title}
                data-about-value
                className="flex flex-col items-center px-2 text-center sm:px-4"
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

      <ClientLogos />

      <section
        id="contact"
        className={`scroll-mt-28 bg-gradient-to-br from-primary-container to-primary-dim ${sectionPageX} py-24 md:py-32`}
      >
        <div className="mx-auto max-w-8xl">
          <div
            data-about-footer="section"
            className="grid gap-10 md:grid-cols-12 md:items-center md:gap-16"
            data-about-reveal
          >
            <div className="md:col-span-7">
              <h2 className="font-headline text-display-lg font-black uppercase leading-[0.95] text-on-primary-container">
                {ABOUT_FOOTER_TEXT.split("").map((char, idx) => {
                  if (char === "\n") return <br key={`about-footer-br-${idx}`} />;
                  if (char === " ") {
                    return (
                      <span
                        key={`about-footer-space-${idx}`}
                        data-about-footer="headline-letter"
                        className="inline-block opacity-0 motion-reduce:opacity-100"
                      >
                        &nbsp;
                      </span>
                    );
                  }
                  return (
                    <span
                      key={`about-footer-char-${idx}`}
                      data-about-footer="headline-letter"
                      className="inline-block opacity-0 motion-reduce:opacity-100"
                    >
                      {char}
                    </span>
                  );
                })}
              </h2>
              <p className="mt-5 max-w-xl font-body text-body-lg text-on-primary-container/90">
                Tell us about your brand, product, or campaign goals. We&apos;ll reply with a clear point of view—and how
                we can help you scale with confidence from Mumbai to global markets.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-5">
              <a
                href="mailto:hello@bheard.in"
                className="block rounded-xl bg-white px-6 py-5 font-headline text-lg font-bold text-neutral-900 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                hello@bheard.in
              </a>
              <p className="font-body text-sm font-medium uppercase tracking-wider text-on-primary-container/85">
                Mumbai, India · Remote-friendly engagements
              </p>
              <Link
                href="/brand-solutions"
                className="inline-flex w-fit items-center gap-2 border-b-2 border-on-primary-container pb-1 font-headline text-sm font-bold uppercase tracking-wide text-on-primary-container transition hover:border-white hover:text-white"
              >
                Explore brand solutions
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
