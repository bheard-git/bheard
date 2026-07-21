"use client";

import "@/lib/motion/config";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CareerApplicationForm from "@/components/careers/CareerApplicationForm";
import { prefersReducedMotion } from "@/lib/motion/animations";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const band = "mx-auto w-full max-w-7xl px-8";
const bandLight = "bg-surface-container-lowest py-10 md:py-14";
const bandWarm = "bg-[#fbf8f6] py-10 md:py-14";
const LIFE_AT_IMAGE = "/assets/home/about/team%20work.jpg";
const PROTECTED_IMAGE_CLASS =
  "pointer-events-none select-none object-cover grayscale [-webkit-user-drag:none]";

type CareersListingViewProps = {
  slug: string;
  roleTitle: string;
  onlineApplicationsReady: boolean;
};

const BELIEFS = [
  {
    title: "Ownership",
    body: "We treat our clients' goals like our own, and we trust our team with outcomes, not just tasks.",
  },
  {
    title: "Transparency",
    body: "Clear communication, honest feedback, and no vanity metrics disguised as success.",
  },
  {
    title: "Results First",
    body: "Every decision begins with one question: will this move the business forward?",
  },
  {
    title: "Excellence",
    body: "Every campaign, design, and strategy is refined until it meets the highest standard.",
  },
] as const;

const ROLE_GROUPS = [
  {
    title: "Brand & Strategy",
    roles: "Brand strategists, account managers, campaign planners",
  },
  {
    title: "Content & Creative",
    roles: "Copywriters, graphic designers, video editors, social media managers",
  },
  {
    title: "Technology",
    roles: "Web and mobile developers, UI/UX designers, AI and automation engineers",
  },
  {
    title: "Growth",
    roles: "Performance marketers, SEO specialists",
  },
] as const;

const OFFICES = [
  {
    city: "Mumbai",
    label: "Head office",
    detail: "Lower Parel, Mumbai",
  },
  {
    city: "Delhi",
    label: "Branch office",
    detail: "Delhi NCR",
  },
] as const;

export default function CareersListingView({
  slug,
  roleTitle,
  onlineApplicationsReady,
}: CareersListingViewProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        '[data-careers-banner="eyebrow"], [data-careers-banner="title"], [data-careers-banner="copy"]',
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.08, ease: "power3.out" }
      );

      const reveals = gsap.utils.toArray<HTMLElement>("[data-careers-reveal]");
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          }
        );
      });
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef}>
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 px-8 pb-20 pt-36 md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-primary/20 blur-[120px]" />
        <div className="pointer-events-none absolute -left-14 bottom-0 h-52 w-52 rounded-full bg-primary-fixed/20 blur-[100px]" />
        <div className="mx-auto max-w-content-max">
          <p
            data-careers-banner="eyebrow"
            className="font-label text-label-sm uppercase tracking-[0.2em] text-primary-fixed"
          >
            Careers at BHeard
          </p>
          <h1
            data-careers-banner="title"
            className="mt-4 max-w-4xl font-headline text-[clamp(2.4rem,7vw,4.8rem)] font-black uppercase leading-[0.94] tracking-tight text-white"
          >
            Grow Your Career With Us
          </h1>
          <p
            data-careers-banner="copy"
            className="mt-6 max-w-2xl font-body text-base leading-relaxed text-neutral-300 md:text-lg"
          >
            Join a team where creativity, technology, and innovation come together to create
            meaningful work and lasting impact.
          </p>
        </div>
      </section>

      <section className={bandLight}>
        <div className={band} data-careers-reveal>
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
            <div>
              <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-on-background md:text-4xl">
                Life at BHeard
              </h2>
              <div className="mt-5 space-y-4 font-body text-base leading-relaxed text-on-surface-variant md:text-lg">
                <p>
                  BHeard brings strategy, creative, and technology together under one team. Strategists,
                  designers, writers, and developers work side by side — which means the work you do
                  here moves across brand campaigns, digital platforms, and{" "}
                  <Link
                    href="/services/tech-solutions/ai-chatbots-agents"
                    className="font-semibold text-on-background underline decoration-primary underline-offset-4"
                  >
                    AI-led solutions
                  </Link>{" "}
                  rather than staying in one lane.
                </p>
                <p>
                  We combine human creativity with AI-powered workflows to work smarter, move faster,
                  and raise the quality of what we deliver.
                </p>
                <p>
                  We are a focused team working with brands across hospitality, lifestyle, consumer,
                  wellness, and education{" "}
                  <Link
                    href="/industries"
                    className="font-semibold text-on-background underline decoration-primary underline-offset-4"
                  >
                    industries
                  </Link>
                  , in India, the US, and Southeast Asia. You&apos;ll work directly with clients and see
                  how your work contributes to real business outcomes from the very beginning.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface-container-high">
              <Image
                src={LIFE_AT_IMAGE}
                alt="BHeard team collaborating in the studio"
                fill
                draggable={false}
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`${PROTECTED_IMAGE_CLASS} object-center`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={bandWarm}>
        <div className={band} data-careers-reveal>
          <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-primary md:text-4xl">
            What We Believe
          </h2>
          <ul className="mt-8 grid grid-cols-1 divide-y divide-primary/40 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {BELIEFS.map((item) => (
              <li key={item.title} className="px-0 py-6 first:pt-0 last:pb-0 sm:px-5 sm:py-0 lg:px-6">
                <h3 className="font-headline text-lg font-bold uppercase tracking-tight text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={bandLight}>
        <div className={band} data-careers-reveal>
          <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-on-background md:text-4xl">
            Who We&apos;re Looking For
          </h2>
          <p className="mt-4 max-w-3xl font-body text-base text-on-surface-variant md:text-lg">
            We&apos;re always open to connecting with talented people across:
          </p>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ROLE_GROUPS.map((group) => (
              <li
                key={group.title}
                className="rounded-lg border border-outline-variant/60 bg-white px-4 py-3"
              >
                <h3 className="font-headline text-sm font-bold uppercase tracking-wide text-on-background">
                  {group.title}
                </h3>
                <p className="mt-1.5 font-body text-sm leading-snug text-on-surface-variant">{group.roles}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-3xl font-body text-base text-on-surface-variant md:text-lg">
            Across every role, we value people who are agile, curious, and comfortable using AI
            tools to multiply their productivity — not replace their thinking. If your role
            isn&apos;t listed here but you believe your work speaks for itself, we&apos;d still like
            to hear from you.
          </p>
        </div>
      </section>

      <section className={bandWarm}>
        <div className={band} data-careers-reveal>
          <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-12">
            <div>
              <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-on-background md:text-4xl">
                Where We Work
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-on-surface-variant md:text-lg">
                Our head office is in Lower Parel, Mumbai, with a branch office in Delhi — working with
                brands across India and international markets.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {OFFICES.map((office) => (
                <li
                  key={office.city}
                  className="rounded-lg border border-outline-variant/60 bg-white px-5 py-4"
                >
                  <p className="font-label text-xs uppercase tracking-[0.16em] text-primary">
                    {office.label}
                  </p>
                  <h3 className="mt-2 font-headline text-xl font-bold uppercase tracking-tight text-on-background">
                    {office.city}
                  </h3>
                  <p className="mt-1 font-body text-sm text-on-surface-variant">{office.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${bandLight} border-t border-outline-variant/60`}>
        <div className={band} data-careers-reveal>
          <div className="max-w-4xl">
            <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-on-background md:text-4xl">
              Let&apos;s Talk
            </h2>
            <p className="mt-4 font-body text-base text-on-surface-variant md:text-lg">
              Share your resume and a note about the work you want to do at{" "}
              <a
                className="font-semibold text-on-background underline decoration-primary underline-offset-4"
                href="mailto:hello@bheard.in"
              >
                hello@bheard.in
              </a>
              , or apply through the form below.
            </p>
            <div className="mt-10">
              <CareerApplicationForm
                slug={slug}
                roleTitle={roleTitle}
                onlineApplicationsReady={onlineApplicationsReady}
                variant="general"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
