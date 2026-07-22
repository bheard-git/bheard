"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLeadForm } from "@/components/site/LeadFormProvider";
import { prefersReducedMotion } from "@/lib/motion/animations";
import {
  splitHeroEyebrow,
  splitHeroInset,
  splitHeroTextColumn,
  splitHeroTitle,
} from "@/components/system/splitHeroTheme";
import { TECH_HERO_MEDIA } from "@/lib/solutions/visualAssets";

const primaryCtaClassName =
  "inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-headline text-sm font-bold uppercase tracking-widest text-on-primary shadow-[0_0_48px_-12px_rgba(255,146,62,0.65)] transition-transform hover:scale-[1.02] active:scale-[0.99]";

const secondaryCtaClassName =
  "inline-flex items-center gap-2 border border-inverse-surface/15 bg-surface-bright/70 px-7 py-3.5 font-headline text-sm font-bold uppercase tracking-widest text-on-background backdrop-blur-md transition-[transform,box-shadow,border-color] hover:scale-[1.02] hover:border-primary/35 hover:shadow-md active:scale-[0.99]";

function TechHeroVideo() {
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    setReduceMotion(prefersReducedMotion());
  }, []);

  return (
    <video
      src={TECH_HERO_MEDIA.src}
      autoPlay={!reduceMotion}
      loop={!reduceMotion}
      muted
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      tabIndex={-1}
      draggable={false}
      aria-hidden
      onContextMenu={(e) => e.preventDefault()}
      className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
    />
  );
}

export default function TechSolutionsHero() {
  const { openLeadForm } = useLeadForm();

  return (
    <header className="relative bg-white md:min-h-[calc(100dvh-5.55rem)]">
      <div
        className={`${splitHeroInset} relative z-10 md:flex md:min-h-[calc(100dvh-5.55rem)] md:items-center`}
      >
        <div className="flex w-full flex-col md:flex-row md:gap-6">
          <div className={`py-1 ${splitHeroTextColumn}`}>
            <p className={splitHeroEyebrow}>Build what scales</p>

            <h1 className={splitHeroTitle}>
              Systems keep businesses running.
              <br />
              <span className="text-primary">Technology helps them scale.</span>
            </h1>

            <p className="mt-3 max-w-lg font-body text-base font-semibold leading-relaxed text-on-background md:mt-4 md:text-lg">
              AI-powered tools, automation systems, and custom digital experiences designed to help modern businesses
              scale efficiently.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={() =>
                  openLeadForm({
                    sourcePage: "/tech-solutions",
                    title: "Let's talk",
                    subtitle: "Tell us about your project - we'll respond within one business day.",
                  })
                }
                className={`${primaryCtaClassName} w-fit`}
              >
                Start a Project <span aria-hidden>→</span>
              </button>
              <Link href="/work" className={`${secondaryCtaClassName} w-fit`}>
                See Our Work <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block" aria-hidden />
        </div>
      </div>

      <figure className="relative mt-5 min-h-[min(56vw,320px)] overflow-hidden rounded-lg md:absolute md:inset-y-0 md:right-0 md:mt-0 md:min-h-0 md:w-[60%] md:rounded-none md:rounded-bl-[1.25rem]">
        <TechHeroVideo />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-white via-white/75 to-transparent md:w-[32%]"
          aria-hidden
        />
      </figure>
    </header>
  );
}
