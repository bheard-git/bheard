"use client";

import "@/lib/motion/config";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SectionCharReveal from "@/components/motion/SectionCharReveal";
import { sectionBandY, sectionPageX, sectionTitleMarginCompact } from "@/components/system/sectionTheme";
import { prefersReducedMotion } from "@/lib/motion/animations";

gsap.registerPlugin(useGSAP);

function SignalCard({ stat, label }: { stat: string; label: string }) {
  return (
    <article
      data-g-step="true"
      className="flex h-full min-h-[160px] flex-col justify-between border border-outline-variant/60 bg-surface-container p-6 transition-colors duration-[400ms] ease-out hover:bg-surface-container-high md:min-h-0 md:p-7"
    >
      <p className="font-headline text-4xl font-black leading-none text-primary md:text-5xl">
        {stat}
      </p>
      <p className="mt-4 text-sm font-medium leading-snug text-on-surface-variant md:text-base">
        {label}
      </p>
    </article>
  );
}

function ProofImageCard({
  src,
  alt,
  category,
  title,
  href,
  className = "",
}: {
  src: string;
  alt: string;
  category: string;
  title: string;
  href?: string;
  className?: string;
}) {
  const figureRef = useRef<HTMLElement | null>(null);
  const imgWrapRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const root = figureRef.current;
      const wrap = imgWrapRef.current;
      if (!root || !wrap || prefersReducedMotion()) {
        return;
      }

      const xTo = gsap.quickTo(wrap, "x", { duration: 0.26, ease: "power2.out" });
      const yTo = gsap.quickTo(wrap, "y", { duration: 0.26, ease: "power2.out" });

      const onMove = (e: PointerEvent) => {
        const r = root.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        xTo(px * 28);
        yTo(py * 22);
      };

      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      root.addEventListener("pointermove", onMove);
      root.addEventListener("pointerleave", onLeave);
      root.addEventListener("pointercancel", onLeave);

      return () => {
        root.removeEventListener("pointermove", onMove);
        root.removeEventListener("pointerleave", onLeave);
        root.removeEventListener("pointercancel", onLeave);
      };
    },
    { scope: figureRef }
  );

  const content = (
    <>
      <div ref={imgWrapRef} className="absolute inset-[-8%] will-change-transform">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 58vw" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 z-[1] p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{category}</p>
        <p className="mt-2 font-headline text-2xl font-black uppercase leading-tight text-surface md:text-3xl">
          {title}
        </p>
      </figcaption>
    </>
  );

  return (
    <figure
      ref={figureRef}
      data-g-step="true"
      className={`group relative min-h-[280px] overflow-hidden border border-outline-variant/60 md:min-h-[400px] ${className}`}
    >
      {href ? (
        <Link href={href} className="absolute inset-0 block" aria-label={`${category}: ${title}`}>
          {content}
        </Link>
      ) : (
        content
      )}
    </figure>
  );
}

export default function ServicesVariantOne() {
  return (
    <section className={`bg-surface ${sectionPageX} ${sectionBandY}`}>
      <div className="mx-auto max-w-7xl">
        <SectionCharReveal
          as="div"
          layout="flow"
          scrubEnd="+=34%"
          className={sectionTitleMarginCompact}
          title="Outcomes in the wild"
        />

        <div className="space-y-4 md:space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <ProofImageCard
              className="md:col-span-7"
              src="/assets/home/proof-of-craft/hospitality-lifestyle.webp"
              alt="Radisson Blu hotel facade"
              category="Hospitality & lifestyle"
              title="Luxury storytelling + performance media, moving as one system."
              href="/industries"
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-5 md:grid-cols-1 md:grid-rows-2">
              <SignalCard
                stat="2.6M"
                label="Views driven through consistent content and community."
              />
              <SignalCard
                stat="9.4%"
                label="Lower acquisition costs while generating 3× more leads."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-5 md:grid-cols-1 md:grid-rows-2">
              <SignalCard
                stat="275K+"
                label="Reach generated through event-led digital storytelling."
              />
              <SignalCard
                stat="12%"
                label="Average engagement rate across all campaign touchpoints."
              />
            </div>

            <ProofImageCard
              className="md:col-span-7"
              src="/assets/home/proof-of-craft/events-digital-campaigns.webp"
              alt="Team collaborating on events and digital campaigns"
              category="Events & digital campaigns"
              title="Events, media & digital momentum — built in sync."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
