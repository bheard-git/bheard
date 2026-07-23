"use client";

import "@/lib/motion/config";
import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/motion/animations";
import { splitHeroEyebrow } from "@/components/system/splitHeroTheme";
import { sectionContentBand, sectionPageX } from "@/components/system/sectionTheme";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export type ListingBandHeroProps = {
  watermark: string;
  eyebrow: string;
  title: ReactNode;
  copy: string;
};

export default function ListingBandHero({ watermark, eyebrow, title, copy }: ListingBandHeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const watermarkRef = useRef<HTMLSpanElement | null>(null);
  const eyebrowRef = useRef<HTMLParagraphElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const accentRef = useRef<HTMLSpanElement | null>(null);
  const copyRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || prefersReducedMotion()) return;

      const introTargets = [eyebrowRef.current, titleRef.current, accentRef.current, copyRef.current].filter(
        Boolean
      ) as HTMLElement[];

      gsap.set(introTargets, { opacity: 0, y: 36 });

      gsap.to(introTargets, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
      });

      const wm = watermarkRef.current;
      if (wm) {
        gsap.to(wm, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    },
    { scope: sectionRef, dependencies: [watermark, eyebrow, title, copy], revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      className={`relative isolate overflow-hidden bg-[#fbf8f6] ${sectionPageX} py-16 md:py-20`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 -z-10 h-64 w-64 rounded-full bg-primary/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-14 bottom-0 -z-10 h-52 w-52 rounded-full bg-primary/10 blur-[100px]"
      />
      <div className={`relative ${sectionContentBand}`}>
        <span
          ref={watermarkRef}
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 font-headline text-[clamp(4rem,14vw,10rem)] font-extrabold uppercase leading-none text-on-background/[0.04]"
        >
          {watermark}
        </span>
        <p ref={eyebrowRef} className={`relative z-10 opacity-0 motion-reduce:opacity-100 ${splitHeroEyebrow}`}>
          {eyebrow}
        </p>
        <h1
          ref={titleRef}
          className="relative z-10 mt-4 max-w-4xl font-headline text-[clamp(2.3rem,7vw,4.8rem)] font-black uppercase leading-[0.94] tracking-tight text-on-background opacity-0 motion-reduce:opacity-100"
        >
          {title}
        </h1>
        <span
          ref={accentRef}
          className="relative z-10 mt-5 block h-0.5 w-12 bg-primary opacity-0 motion-reduce:opacity-100"
          aria-hidden
        />
        <p
          ref={copyRef}
          className="relative z-10 mt-6 max-w-2xl font-body text-base leading-relaxed text-on-surface-variant opacity-0 motion-reduce:opacity-100 md:text-lg"
        >
          {copy}
        </p>
      </div>
    </section>
  );
}
