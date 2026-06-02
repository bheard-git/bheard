"use client";

import "@/lib/motion/config";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TECH_STACK_GROUPS, TECH_STACK_HIGHLIGHTS } from "@/lib/solutions/techStack";
import { prefersReducedMotion } from "@/lib/motion/animations";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TechShowcaseSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const canvas = canvasRef.current;
      if (!root || !canvas || prefersReducedMotion()) return;

      const heading = root.querySelectorAll<HTMLElement>("[data-tech-intro]");
      const groups = canvas.querySelectorAll<HTMLElement>("[data-tech-group]");
      const tiles = canvas.querySelectorAll<HTMLElement>("[data-tech-tile]");
      const highlights = canvas.querySelectorAll<HTMLElement>("[data-tech-highlight]");

      gsap.fromTo(
        heading,
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.58,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        groups,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: canvas,
            start: "top 86%",
            end: "top 62%",
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        tiles,
        { y: 16, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.018,
          ease: "power2.out",
          scrollTrigger: {
            trigger: canvas,
            start: "top 84%",
            end: "top 56%",
            scrub: 0.85,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        highlights,
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: canvas,
            start: "bottom 92%",
            end: "bottom 70%",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: rootRef, revertOnUpdate: true }
  );

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden border-y border-inverse-surface/10 bg-surface-container-low py-section-y-sm md:py-section-y"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at 14% 20%, rgba(255,146,62,0.1), transparent 36%), radial-gradient(circle at 84% 70%, rgba(111,109,255,0.1), transparent 34%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.24]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(17,24,39,0.3) 1px, transparent 1px), radial-gradient(rgba(255,146,62,0.2) 1px, transparent 1px)",
          backgroundSize: "22px 22px, 30px 30px",
          backgroundPosition: "0 0, 11px 11px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-[30%] hidden h-20 w-20 rotate-12 rounded-2xl border border-primary/20 bg-primary/5 md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-[18%] hidden h-12 w-12 rounded-full border border-inverse-surface/15 bg-surface-bright/45 md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[14%] right-[20%] hidden h-2 w-2 rounded-full bg-primary/35 md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[10%] -bottom-[28%] h-[360px] w-[360px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[6%] -top-[24%] h-[320px] w-[320px] rounded-full bg-[#6f6dff]/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-content-max px-gutter-sm md:px-gutter">
        <p data-tech-intro className="font-label text-label-sm uppercase tracking-[0.2em] text-primary">
          Technology stack
        </p>
        <h2
          data-tech-intro
          className="mt-3 max-w-4xl font-headline text-[clamp(2rem,4.8vw,4rem)] font-black uppercase leading-[0.95] tracking-tight text-on-background"
        >
          Built on modern tech.
          <br />
          Engineered for impact<span className="text-primary">.</span>
        </h2>
        <div
          data-tech-intro
          className="mt-6 max-w-3xl space-y-4 font-body text-body-lg leading-relaxed text-on-surface-variant md:text-xl"
        >
          <p>
            We leverage best-in-class technologies and frameworks to build scalable, secure, and high-performance
            digital products.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-content-max px-gutter-sm md:mt-14 md:px-gutter">
        <div ref={canvasRef} className="relative mt-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-6 md:gap-7">
            {TECH_STACK_GROUPS.map((group) => (
              <section
                key={group.id}
                data-tech-group
                className={`${group.colSpan === "two" ? "md:col-span-2" : "md:col-span-1"}`}
              >
                <p className={`mb-4 font-label text-[10px] uppercase tracking-[0.18em] ${group.labelClassName}`}>{group.label}</p>
                <div
                  className={`grid gap-x-4 gap-y-5 ${
                    group.items.length <= 2
                      ? "grid-cols-2"
                      : group.items.length <= 4
                        ? "grid-cols-2"
                        : group.items.length <= 6
                          ? "grid-cols-3"
                          : "grid-cols-4"
                  }`}
                >
                  {group.items.map((item) => (
                    <article key={item.id} data-tech-tile className="group/tech flex flex-col items-center text-center">
                      <div className="relative flex h-12 w-12 items-center justify-center">
                        <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 blur-md transition-opacity duration-300 group-hover/tech:opacity-100" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.logoSrc}
                          alt={item.logoAlt ?? item.name}
                          className="relative z-10 h-10 w-10 object-contain transition-transform duration-500 ease-out group-hover/tech:rotate-[360deg]"
                          loading="lazy"
                        />
                      </div>
                      <p className="mt-2 font-body text-[11px] leading-tight text-on-surface-variant">{item.name}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-4">
            {TECH_STACK_HIGHLIGHTS.map((item) => (
              <article
                key={item.id}
                data-tech-highlight
                className="flex items-center gap-2.5 rounded-xl border border-inverse-surface/10 bg-surface-bright/70 px-3 py-2.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/35 bg-primary/10 text-sm text-primary">
                  {item.icon}
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.14em] text-primary">{item.title}</p>
                  <p className="mt-0.5 font-body text-xs leading-snug text-on-surface-variant">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
