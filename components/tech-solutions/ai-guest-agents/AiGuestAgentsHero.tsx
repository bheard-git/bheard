"use client";

import Image from "next/image";
import Link from "next/link";
import { useLeadForm } from "@/components/site/LeadFormProvider";
import PageBreadcrumb from "@/components/system/PageBreadcrumb";
import {
  splitHeroBreadcrumbNav,
  splitHeroEyebrow,
  splitHeroInset,
  splitHeroTextColumn,
  splitHeroTitle,
} from "@/components/system/splitHeroTheme";
import { AI_GUEST_AGENTS_PAGE_PATH, aiGuestAgentsContent } from "@/lib/content/ai-guest-agents";

const ctaClassName =
  "inline-flex items-center gap-2 rounded-lg bg-primary px-9 py-4 font-headline text-sm font-bold uppercase tracking-widest text-on-primary shadow-[0_0_48px_-12px_rgba(255,146,62,0.65)] transition-transform hover:scale-[1.02]";

export default function AiGuestAgentsHero() {
  const { openLeadForm } = useLeadForm();
  const { hero, breadcrumb } = aiGuestAgentsContent;

  const breadcrumbItems = breadcrumb.map((crumb) => ({
    label: crumb.label,
    href: "href" in crumb ? crumb.href : undefined,
  }));

  return (
    <header className="relative bg-white md:min-h-[calc(100dvh-5.55rem)]">
      <div className={`${splitHeroInset} relative z-10 flex min-h-0 flex-col md:min-h-[calc(100dvh-5.55rem)]`}>
        <PageBreadcrumb items={breadcrumbItems} className={splitHeroBreadcrumbNav} />

        <div className="flex flex-1 flex-col justify-center py-8 md:py-10">
          <div className={splitHeroTextColumn}>
            <p className={splitHeroEyebrow}>{hero.eyebrow}</p>

            <h1 className={splitHeroTitle}>
              {hero.headingLine1}
              <br />
              <span className="text-primary">{hero.headingLine2}</span>
              <br />
              {hero.headingLine3}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 md:mt-6">
              <span className="font-label text-sm font-bold uppercase tracking-[0.18em] text-on-surface-variant md:text-base">
                {hero.trustedBy.label}
              </span>
              <Link href={hero.trustedBy.href} className="transition-opacity hover:opacity-80">
                <Image
                  src={hero.trustedBy.logoSrc}
                  alt={hero.trustedBy.logoAlt}
                  width={220}
                  height={56}
                  className="h-12 w-auto object-contain md:h-14"
                />
              </Link>
            </div>

            <button
              type="button"
              onClick={() =>
                openLeadForm({
                  sourcePage: AI_GUEST_AGENTS_PAGE_PATH,
                  title: "Book a Demo",
                  subtitle: "Tell us about your property — we'll show you how AI Guest Agents can help.",
                })
              }
              className={`${ctaClassName} mt-5 w-fit md:mt-6`}
            >
              {hero.ctaLabel} <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </div>

      <figure className="relative mt-5 min-h-[min(56vw,320px)] overflow-hidden rounded-lg md:absolute md:inset-y-0 md:right-0 md:mt-0 md:min-h-0 md:w-[60%] md:rounded-none md:rounded-bl-[1.25rem]">
        <Image
          src={hero.imageSrc}
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-white via-white/75 to-transparent md:w-[32%]"
          aria-hidden
        />
      </figure>
    </header>
  );
}
