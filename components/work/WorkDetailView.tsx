"use client";

import "@/lib/motion/config";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { CaseStudyContent, CaseStudyImpactItem } from "@/lib/case-studies";
import CaseStudyRichText from "@/components/work/CaseStudyRichText";
import RelatedCaseStudiesSection from "@/components/work/RelatedCaseStudiesSection";
import { mapCaseStudyToSolutionsCard } from "@/lib/solutions/solutionsCaseStudies";
import PageBreadcrumb from "@/components/system/PageBreadcrumb";
import {
  splitHeroBreadcrumbNav,
  splitHeroEyebrow,
  splitHeroInset,
  splitHeroTextColumn,
  splitHeroTitle,
} from "@/components/system/splitHeroTheme";
import { fadeUpScrollOnce, prefersReducedMotion } from "@/lib/motion/animations";
import { publicAsset } from "@/lib/utils/publicAsset";
import { sectionContentBand, sectionPageX } from "@/components/system/sectionTheme";

const band = sectionContentBand;

/** Simulated primary border via shadow at ~30% opacity */
const primaryIconShadow =
  "rounded-xl bg-white shadow-[0_0_0_1px_rgba(255,146,62,0.3),0_6px_20px_-4px_rgba(255,146,62,0.3)]";

const primaryCardShadow =
  "rounded-xl bg-white shadow-[0_0_0_1px_rgba(255,146,62,0.3),0_8px_28px_-8px_rgba(255,146,62,0.22)]";

const workIcon = (filename: string) => publicAsset("assets", "work", "icons", filename);

const sectionIcons = {
  challenge: workIcon("challege mark.png"),
  approach: workIcon("approch horse.png"),
  biggerPicture: workIcon("eye-icon.png"),
} as const;

const impactIconSrc = {
  chart: workIcon("growth icon.png"),
  users: workIcon("lead icon.png"),
  bot: workIcon("ai-led.png"),
  trending: workIcon("growth icon.png"),
  globe: workIcon("growth icon.png"),
  sparkles: workIcon("growth icon.png"),
} as const;

function normalizeImpactItems(study: CaseStudyContent): CaseStudyImpactItem[] {
  const icons = ["chart", "users", "bot", "trending", "globe", "sparkles"] as const;
  const fallback = study.results.stats.slice(0, 3).map((stat, i) => ({
    icon: icons[i] ?? "chart",
    value: stat.value,
    title: stat.label,
    description: "",
  }));

  const raw = study.impactItems ?? fallback;

  return raw.map((item, index) => {
    if (item.value?.trim()) {
      return item;
    }

    const stat = study.results.stats[index];
    if (stat) {
      return {
        ...item,
        value: stat.value,
        title: item.title || stat.label,
        description: item.description ?? "",
      };
    }

    return {
      ...item,
      value: item.title,
      title: item.description?.split(".")[0] ?? "Impact",
      description: item.description ?? "",
    };
  });
}

function cleanImpactDescription(value: string, title: string, description: string): string {
  let text = description.trim();
  if (!text) return text;

  const valueEsc = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  text = text.replace(new RegExp(`^${valueEsc}\\s*[-–—:]?\\s*`, "i"), "");
  text = text.replace(new RegExp(`^${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*[-–—:]?\\s*`, "i"), "");
  return text.trim();
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <span className="mb-2 block h-0.5 w-10 bg-primary" aria-hidden />
      <h2 className="font-headline text-xl font-black uppercase tracking-tight text-on-surface md:text-2xl">
        {children}
      </h2>
    </div>
  );
}

function IconBox({ src, size = "section" }: { src: string; size?: "section" | "impact" }) {
  const boxClass =
    size === "section"
      ? "flex h-28 w-28 shrink-0 items-center justify-center p-1.5 md:h-30 md:w-30 md:p-2"
      : "flex h-12 w-12 shrink-0 items-center justify-center p-1 md:h-14 md:w-14 md:p-1.5";

  const imgClass = size === "section" ? "h-full w-full object-contain" : "h-full w-full object-contain";

  return (
    <div className={`${boxClass} ${primaryIconShadow}`} aria-hidden>
      <Image src={src} alt="" width={96} height={96} className={imgClass} />
    </div>
  );
}

function NarrativeSection({
  heading,
  iconSrc,
  centerWithIcon = false,
  children,
}: {
  heading?: string;
  iconSrc?: string;
  centerWithIcon?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      {heading ? <SectionHeading>{heading}</SectionHeading> : null}
      <div
        className={`${heading ? "mt-6 md:mt-8" : ""} grid gap-6 md:grid-cols-[auto_minmax(0,1fr)] md:gap-8 ${
          centerWithIcon ? "md:items-center" : "md:items-start"
        }`}
      >
        {iconSrc ? <IconBox src={iconSrc} size="section" /> : null}
        <div className={iconSrc ? undefined : "md:col-span-2"}>{children}</div>
      </div>
    </div>
  );
}

function ImpactCard({ item }: { item: CaseStudyImpactItem }) {
  const iconSrc = impactIconSrc[item.icon] ?? impactIconSrc.chart;
  const description = cleanImpactDescription(item.value, item.title, item.description);

  return (
    <article className={`flex h-full flex-col p-5 md:p-6 ${primaryCardShadow}`}>
      <div className="flex items-start gap-3">
        <IconBox src={iconSrc} size="impact" />
        <div className="min-w-0 pt-0.5">
          <p className="font-headline text-2xl font-black leading-none text-primary md:text-3xl">{item.value}</p>
          <h3 className="mt-1.5 font-headline text-sm font-black uppercase tracking-wide text-on-surface md:text-base">
            {item.title}
          </h3>
        </div>
      </div>
      {description ? (
        <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-on-surface-variant">{description}</p>
      ) : null}
      {item.href && item.hrefLabel ? (
        <Link
          href={item.href}
          className="mt-3 inline-flex items-center gap-1 font-label text-xs font-bold uppercase tracking-[0.14em] text-primary hover:underline"
        >
          {item.hrefLabel} <span aria-hidden>→</span>
        </Link>
      ) : null}
    </article>
  );
}

export default function WorkDetailView({
  study,
  relatedStudies,
}: {
  study: CaseStudyContent;
  relatedStudies: CaseStudyContent[];
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root || prefersReducedMotion()) return;
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        fadeUpScrollOnce(el, { start: "top 88%" });
      });
    },
    { scope: rootRef, dependencies: [study.slug], revertOnUpdate: true }
  );

  const impactItems = normalizeImpactItems(study);

  return (
    <div ref={rootRef} className="bg-surface-container-lowest pb-12 text-on-background md:pb-16">

      <header className="relative bg-white md:min-h-[calc(100dvh-5.55rem)]">
        <div
          className={`${splitHeroInset} relative z-10 flex min-h-0 flex-col md:min-h-[calc(100dvh-5.55rem)]`}
        >
          {/* <PageBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Work", href: "/work" },
              { label: study.listTitle },
            ]}
            className={splitHeroBreadcrumbNav}
          /> */}

          <div className="flex flex-1 flex-col justify-center py-8 md:py-10">
            <div className={splitHeroTextColumn} data-reveal>
              <p className={splitHeroEyebrow}>{study.heroMeta}</p>
              <h1 className={splitHeroTitle}>
                {study.heroTitle}
                {study.heroTitleAccent ? (
                  <span className="block text-primary">{study.heroTitleAccent}</span>
                ) : null}
              </h1>
              {study.trustedBy ? (
                <div className="mt-6">
                  <span className="mb-2 block h-0.5 w-10 bg-primary" aria-hidden />
                  <p className="font-label text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                    Trusted by:
                  </p>
                  {study.trustedBy.logo ? (
                    <Image
                      src={study.trustedBy.logo}
                      alt={study.trustedBy.name}
                      width={180}
                      height={48}
                      className="mt-2 h-10 w-auto object-contain object-left md:h-12"
                    />
                  ) : (
                    <p className="mt-2 font-headline text-lg font-bold uppercase tracking-tight text-on-surface">
                      {study.trustedBy.name}
                    </p>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <figure
          data-reveal
          className="relative mt-5 min-h-[min(56vw,320px)] overflow-hidden rounded-lg md:absolute md:inset-y-0 md:right-0 md:mt-0 md:min-h-0 md:w-[60%] lg:w-[75%] md:rounded-none md:rounded-bl-[1.25rem]"
        >
          <Image
            src={study.heroImage}
            alt={study.heroImageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-white via-white/75 to-transparent md:w-[32%]"
            aria-hidden
          />
        </figure>
      </header>

      <div className="mt-8 border-t border-black/10 md:mt-10" aria-hidden />

      <section className={`bg-surface-container-lowest ${sectionPageX} py-10 md:py-14`}>
        <div className={band} data-reveal>
          <NarrativeSection heading={study.challenge.heading} iconSrc={sectionIcons.challenge}>
            <div className="space-y-3">
              {study.challenge.intro.split("\n\n").map((para) => (
                <CaseStudyRichText key={para.slice(0, 40)} content={para} />
              ))}
              {study.challenge.bullets?.length ? (
                <ul className="mt-1 space-y-2">
                  {study.challenge.bullets.map((bullet) => (
                    <li key={bullet} className="font-body text-base leading-relaxed text-on-surface-variant">
                      • {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </NarrativeSection>
        </div>
      </section>

      <section className={`bg-[#fbf8f6] ${sectionPageX} py-10 md:py-14`}>
        <div className={band} data-reveal>
          <NarrativeSection heading={study.strategy.heading} iconSrc={sectionIcons.approach}>
            <div className="space-y-3">
              {study.strategy.intro.split("\n\n").map((para) => (
                <CaseStudyRichText key={para.slice(0, 40)} content={para} />
              ))}
              {study.strategy.bullets?.length ? (
                <ul className="mt-1 space-y-2">
                  {study.strategy.bullets.map((bullet) => (
                    <li key={bullet} className="font-body text-base leading-relaxed text-on-surface-variant">
                      • {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </NarrativeSection>
        </div>
      </section>

      <section className={`bg-surface-container-lowest ${sectionPageX} py-10 md:py-14`}>
        <div className={band} data-reveal>
          <SectionHeading>Impact</SectionHeading>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-8">
            {impactItems.map((item) => (
              <ImpactCard key={`${item.value}-${item.title}`} item={item} />
            ))}
          </div>
        </div>
      </section>

      {study.extraSections?.map((section) => (
        <section key={section.heading} className={`bg-surface-container-lowest ${sectionPageX} py-10 md:py-14`}>
          <div className={band} data-reveal>
            <NarrativeSection heading={section.heading}>
              <CaseStudyRichText content={section.body} />
            </NarrativeSection>
          </div>
        </section>
      ))}

      <section className={`bg-[#fbf8f6] ${sectionPageX} py-10 md:py-14`}>
        <div className={band} data-reveal>
          <NarrativeSection heading="The Bigger Picture" iconSrc={sectionIcons.biggerPicture} centerWithIcon>
            <div className="space-y-3">
              {study.heroSubtitle.split("\n\n").map((para) => (
                <CaseStudyRichText key={para.slice(0, 40)} content={para} />
              ))}
              <CaseStudyRichText content={study.closingStatement} />
            </div>
          </NarrativeSection>
        </div>
      </section>

      <RelatedCaseStudiesSection
        cards={relatedStudies.map(mapCaseStudyToSolutionsCard)}
        reveal
      />

      <section className={`${sectionPageX} mt-10 md:mt-12`}>
        <div className={band}>
          <div
            data-reveal
            className="rounded-xl bg-primary px-6 py-8 md:flex md:items-center md:justify-between md:gap-8 md:px-10 md:py-10"
          >
            <div>
              <h2 className="font-headline text-2xl font-black uppercase tracking-tight text-on-background md:text-3xl">
                {study.cta.title}
              </h2>
              <p className="mt-2 max-w-xl font-body text-base leading-relaxed text-on-background/90 md:text-lg">
                {study.cta.subtext}
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-8 py-3.5 font-label text-xs font-bold uppercase tracking-[0.16em] text-on-background transition-transform hover:scale-[1.02] md:mt-0"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
