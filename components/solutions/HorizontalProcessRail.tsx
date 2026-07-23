"use client";

import "@/lib/motion/config";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/motion/animations";
import { solutionsHomeBand } from "@/lib/solutions/solutionsSectionTheme";
import { sectionPageX } from "@/components/system/sectionTheme";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export type ProcessRailStep = {
  title: string;
  subtitle: string;
  body: string;
  imageSrc?: string;
  imageAlt?: string;
};

type HorizontalProcessRailProps = {
  eyebrow: string;
  heading: string;
  subheading?: string;
  steps: ProcessRailStep[];
  pinHeightClassName?: string;
  cardClassName?: string;
  immersiveCardStyle?: boolean;
  sectionClassName?: string;
  borderTop?: boolean;
};

export default function HorizontalProcessRail({
  eyebrow,
  heading,
  subheading,
  steps,
  pinHeightClassName,
  cardClassName,
  immersiveCardStyle = false,
  sectionClassName = "py-section-y-sm md:py-section-y",
  borderTop = true,
}: HorizontalProcessRailProps) {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const loadedCountRef = useRef(0);
  const totalImages = steps.filter((step) => step.imageSrc).length;
  const didFinalRefreshRef = useRef(false);

  useEffect(() => {
    loadedCountRef.current = 0;
    didFinalRefreshRef.current = false;
  }, [totalImages]);

  const bumpRefresh = useCallback(() => {
    if (didFinalRefreshRef.current || totalImages === 0) return;
    loadedCountRef.current += 1;
    if (loadedCountRef.current >= totalImages) {
      didFinalRefreshRef.current = true;
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }
  }, [totalImages]);

  useGSAP(
    () => {
      const pin = pinRef.current;
      const track = trackRef.current;
      const bar = barRef.current;
      if (!pin || !track || !bar) return;

      if (prefersReducedMotion()) {
        gsap.set(track, { x: 0 });
        gsap.set(bar, { scaleX: 1, transformOrigin: "left center" });
        return;
      }

      const getScrollDistance = () => {
        const viewportWidth = pin.getBoundingClientRect().width;
        const cards = track.querySelectorAll<HTMLElement>("article");
        if (!cards.length) return 0;
        const last = cards[cards.length - 1];
        return Math.max(0, last.offsetLeft + last.offsetWidth - viewportWidth);
      };

      gsap.set(bar, { scaleX: 0.06, transformOrigin: "left center" });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: pin,
            start: "top 14%",
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        .to(track, { x: () => -getScrollDistance(), ease: "none" }, 0)
        .to(bar, { scaleX: 1, ease: "none", transformOrigin: "left center" }, 0);
    },
    { scope: pinRef, dependencies: [steps.length], revertOnUpdate: true }
  );

  const sectionBorderClass = borderTop
    ? "border-y border-inverse-surface/10"
    : "border-b border-inverse-surface/10";

  return (
    <section
      className={`relative z-20 ${sectionBorderClass} bg-surface-container-low ${sectionClassName}`}
    >
      <div className={sectionPageX}>
        <div className={solutionsHomeBand}>
          <p className="font-label text-label-sm uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h2 className="mt-3 max-w-3xl font-headline text-[clamp(2rem,4vw,3.25rem)] font-black uppercase leading-tight tracking-tight text-on-background">
            {heading}
          </h2>
          {subheading ? (
            <p className="mt-4 max-w-2xl font-body text-body-lg leading-relaxed text-on-surface-variant">{subheading}</p>
          ) : null}
        </div>
      </div>
      <div className="px-8">
        <div
          ref={pinRef}
          className={`relative z-10 mt-12 flex min-h-[320px] flex-col justify-center md:mt-16 md:min-h-[360px] ${immersiveCardStyle ? "py-8 md:py-12" : ""} ${pinHeightClassName ?? ""}`}
        >
          <div className="mb-6 h-px w-full shrink-0 overflow-hidden rounded-full bg-inverse-surface/10">
            <div
              ref={barRef}
              className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-primary-container to-tertiary-container"
            />
          </div>

          <div
            className={`no-scrollbar overflow-hidden ${immersiveCardStyle ? "flex items-center py-6 md:py-10" : "pb-4"}`}
          >
            <div ref={trackRef} className="flex w-max gap-5">
              {steps.map((s) => (
                <article
                  key={s.title}
                  className={`group relative w-[min(88vw,320px)] shrink-0 overflow-hidden border border-inverse-surface/10 bg-surface-bright shadow-[0_18px_60px_-40px_rgba(17,24,39,0.35)] md:w-[380px] ${
                    immersiveCardStyle
                      ? ""
                      : "rounded-2xl transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_-44px_rgba(17,24,39,0.38)]"
                  } ${cardClassName ?? ""}`}
                >
                  {s.imageSrc ? (
                    immersiveCardStyle ? (
                      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[62%] overflow-hidden">
                        <Image
                          src={s.imageSrc}
                          alt={s.imageAlt ?? ""}
                          fill
                          sizes="380px"
                          className="object-cover object-center"
                          onLoadingComplete={bumpRefresh}
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-inverse-surface/10">
                        <Image
                          src={s.imageSrc}
                          alt={s.imageAlt ?? ""}
                          fill
                          sizes="380px"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05] h-[64%]"
                          onLoadingComplete={bumpRefresh}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent" />
                      </div>
                    )
                  ) : null}
                  {immersiveCardStyle ? (
                    <div className="absolute inset-x-0 bottom-0 z-10 flex h-[38%] min-h-[11.5rem] flex-col overflow-hidden bg-white transition-[height] duration-500 ease-out motion-reduce:h-[66%] motion-reduce:transition-none group-hover:h-[66%] group-focus-within:h-[66%] md:min-h-[13rem]">
                      <div className="flex min-h-0 flex-1 flex-col p-7 md:p-9">
                        <p className="shrink-0 font-label text-label-sm uppercase tracking-[0.18em] text-primary">
                          {s.subtitle}
                        </p>
                        <h3 className="mt-3 shrink-0 font-headline text-xl font-bold uppercase tracking-tight text-on-background">
                          {s.title}
                        </h3>
                        <div className="relative mt-4 min-h-0 flex-1 overflow-hidden">
                          <p className="font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
                            {s.body}
                          </p>
                          <div
                            aria-hidden
                            className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/90 to-transparent opacity-100 transition-opacity duration-500 ease-out group-hover:opacity-0 group-focus-within:opacity-0 motion-reduce:opacity-0"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative overflow-hidden p-6 md:p-7">
                      <p className="font-label text-label-sm uppercase tracking-[0.18em] text-primary">{s.subtitle}</p>
                      <h3 className="mt-3 font-headline text-xl font-bold uppercase tracking-tight text-on-background">
                        {s.title}
                      </h3>
                      <p className="mt-4 font-body text-sm leading-relaxed text-on-surface-variant md:text-base">{s.body}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
