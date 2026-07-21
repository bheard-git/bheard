"use client";

import "@/lib/motion/config";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/motion/animations";

gsap.registerPlugin(useGSAP);

const TEAM_IMAGES = [
  { src: "/assets/team/team-1.jpeg", alt: "BHEARD team member collaborating in the studio" },
  { src: "/assets/team/team-3.jpeg", alt: "BHEARD team member at work" },
  { src: "/assets/team/team-5.jpeg", alt: "BHEARD team in a creative session" },
  { src: "/assets/team/team-7.jpeg", alt: "BHEARD team member smiling" },
] as const;

const PROTECTED_IMAGE_CLASS =
  "pointer-events-none select-none object-cover object-center grayscale [-webkit-user-drag:none]";

export default function AboutHeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const marqueeSegments = useMemo(() => {
    const base = TEAM_IMAGES.map((member, idx) => ({
      key: `team-${idx}`,
      ...member,
    }));
    return [...base, ...base];
  }, []);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || prefersReducedMotion()) return;

      gsap.set('[data-about-hero-intro="eyebrow"]', { opacity: 0, y: 16 });
      gsap.set('[data-about-hero-intro="headline"]', { opacity: 0, y: 28 });
      gsap.set('[data-about-hero-intro="sub"]', { opacity: 0, y: 20 });
      gsap.set('[data-about-hero-intro="carousel"]', { opacity: 0, y: 20 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to('[data-about-hero-intro="eyebrow"]', { opacity: 1, y: 0, duration: 0.45 })
        .to('[data-about-hero-intro="headline"]', { opacity: 1, y: 0, duration: 0.65 }, "-=0.2")
        .to('[data-about-hero-intro="sub"]', { opacity: 1, y: 0, duration: 0.5 }, "-=0.35")
        .to('[data-about-hero-intro="carousel"]', { opacity: 1, y: 0, duration: 0.55 }, "-=0.3");
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pb-14 pt-20 md:px-8 md:pb-16 md:pt-24"
      aria-labelledby="about-hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-surface-container-low via-surface to-surface-container-lowest" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] h-[min(50vw,420px)] w-[min(80vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p
          data-about-hero-intro="eyebrow"
          className="mb-5 font-body text-xs font-bold uppercase tracking-[0.22em] text-primary opacity-0 motion-reduce:opacity-100"
        >
          About BHeard
        </p>

        <h1
          id="about-hero-heading"
          data-about-hero-intro="headline"
          className="max-w-[18ch] font-headline text-[clamp(1.75rem,4.8vw,3.35rem)] font-black leading-[1.12] tracking-tight text-neutral-900 opacity-0 motion-reduce:opacity-100 md:max-w-[22ch] md:leading-[1.1]"
        >
          Glad you&apos;re taking time to get to know us better
        </h1>

        <p
          data-about-hero-intro="sub"
          className="mt-5 max-w-2xl font-body text-base leading-relaxed text-on-surface-variant opacity-0 motion-reduce:opacity-100 md:text-lg"
        >
          Strategy. Creativity. Technology. Brought together to help brands grow, connect, and stay
          ahead in a digital-first world.
        </p>
      </div>

      <div
        data-about-hero-intro="carousel"
        className="relative z-[1] mt-8 w-full opacity-0 motion-reduce:opacity-100 md:mt-12"
        role="region"
        aria-label="BHeard team gallery"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-10 bg-gradient-to-r from-surface via-surface/90 to-transparent sm:w-16 md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-10 bg-gradient-to-l from-surface via-surface/90 to-transparent sm:w-16 md:w-24" />

        <div className="overflow-hidden">
          <div className="about-team-marquee-track flex w-max select-none items-stretch gap-4 py-2 sm:gap-5 md:gap-6">
            {marqueeSegments.map((member, index) => (
              <figure
                key={`${member.key}-${index}`}
                className="relative aspect-[3/4] w-[min(42vw,200px)] shrink-0 overflow-hidden rounded-2xl border border-outline-variant/50 bg-surface-container-high sm:w-[min(36vw,240px)] md:w-[min(28vw,280px)] lg:w-[min(24vw,300px)]"
              >
                <Image
                  src={member.src}
                  alt={member.alt}
                  fill
                  draggable={false}
                  sizes="(max-width: 640px) 42vw, (max-width: 1024px) 28vw, 300px"
                  className={PROTECTED_IMAGE_CLASS}
                  priority={index < 4}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-team-marquee-track {
          animation: about-team-marquee 48s linear infinite;
          will-change: transform;
        }
        @keyframes about-team-marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-team-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
