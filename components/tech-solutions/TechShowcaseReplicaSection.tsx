"use client";

import "@/lib/motion/config";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/motion/animations";
import { sectionContentBand, sectionPageX } from "@/components/system/sectionTheme";
import { TECHNOLOGY_GROUPS, TECH_SHOWCASE_FEATURES, type TechFeature } from "@/lib/solutions/techShowcaseReplicaData";
import TechnologyCard from "./TeckStack/TechnologyCard";
import TeckStackGroup from "./TeckStack/TeckStackGroup";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function FeatureIcon({ icon }: { icon: TechFeature["icon"] }) {
  return icon;
}

export default function TechShowcaseReplicaSection({
  sectionClassName = "py-10 md:py-14",
}: {
  sectionClassName?: string;
}) {  
  const rootRef = useRef<HTMLElement | null>(null);
  const boardRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const board = boardRef.current;
      if (!root || !board) return;

      const intro = root.querySelectorAll<HTMLElement>("[data-reveal='intro']");
      const groups = root.querySelectorAll<HTMLElement>("[data-reveal='group']");
      const tiles = root.querySelectorAll<HTMLElement>("[data-reveal='tile']");
      const features = root.querySelectorAll<HTMLElement>("[data-reveal='feature']");
      const floating = root.querySelectorAll<HTMLElement>("[data-float='chip']");
      const blobs = root.querySelectorAll<HTMLElement>("[data-float='blob']");

      if (prefersReducedMotion()) {
        gsap.set([intro, groups, tiles, features], { opacity: 1, y: 0, scale: 1 });
        return;
      }

      gsap.fromTo(
        intro,
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.62,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 82%", once: true },
        }
      );

      gsap.fromTo(
        groups,
        { opacity: 0, y: 24, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: board,
            start: "top 86%",
            end: "top 58%",
            scrub: 0.85,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        tiles,
        { opacity: 0, y: 14, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.02,
          ease: "power2.out",
          scrollTrigger: {
            trigger: board,
            start: "top 82%",
            end: "top 54%",
            scrub: 0.75,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        features,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: board,
            start: "bottom 100%",
            end: "bottom 90%",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        }
      );

      floating.forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -8 : 6,
          duration: 3.2 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      blobs.forEach((el, i) => {
        gsap.to(el, {
          x: i % 2 === 0 ? 10 : -12,
          y: i % 2 === 0 ? -8 : 10,
          duration: 7 + i * 1.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: rootRef, revertOnUpdate: true }
  );

  return (
    <section ref={rootRef} className={`relative overflow-hidden bg-[#f6f7fb] ${sectionPageX} ${sectionClassName}`}>
      <div className={sectionContentBand}>
        <div className="max-w-4xl relative z-1">
            <div
              data-float="blob"
              className="pointer-events-none absolute -right-[16rem] top-[6rem] hidden h-[320px] w-[320px] opacity-90 rotate-180 md:block"
              aria-hidden
            >
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="" style={{width: "583.44px", height: "583.44px"}}><path d="M81,55.5Q66,61,65,76.5Q64,92,52.5,85Q41,78,31,74.5Q21,71,23,60.5Q25,50,24,40Q23,30,31,23.5Q39,17,46,28.5Q53,40,65.5,35Q78,30,87,40Q96,50,81,55.5Z" stroke="none" fill="#F3E2D2"></path><path d="M81,55.5Q66,61,65,76.5Q64,92,52.5,85Q41,78,31,74.5Q21,71,23,60.5Q25,50,24,40Q23,30,31,23.5Q39,17,46,28.5Q53,40,65.5,35Q78,30,87,40Q96,50,81,55.5Z" transform="translate(0.1 -2.98)" stroke="#F3E2D2" strokeWidth="0.25" fill="none"></path></svg>   
            </div>
          <p data-reveal="intro" className="font-label text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Technology stack
          </p>
          <h2
            data-reveal="intro"
            className="mt-3 font-headline text-[clamp(2.2rem,5.5vw,4.6rem)] font-black relative z-1 uppercase leading-[0.9] tracking-tight text-[#0a1330]"
          >
            Built on modern tech.
            <br />
            Engineered for impact<span className="text-primary">.</span>
          </h2>
          <p data-reveal="intro" className="mt-5 max-w-2xl font-body text-[clamp(1rem,1.6vw,1.38rem)] leading-relaxed text-[#5b667f]">
            We leverage best-in-class technologies and frameworks to build scalable, secure, and high-performance
            digital products.
          </p>
        </div>

          <div className="relative my-8 md:my-10">
            
            <div
              data-float="blob"
              className="pointer-events-none absolute opacity-50 -left-24 bottom-8 hidden h-[220px] w-[220px] border border-[#f38458cf] rounded-[100%] bg-[radial-gradient(circle_at_40%_40%,#F3E2D2,#F3E2D2_50%,transparent_72%)] md:block"
              aria-hidden
            />
            <div
              data-float="blob"
              className="pointer-events-none absolute -left-20 top-36 hidden h-28 w-40 opacity-100 md:block"
              style={{
                backgroundImage: "radial-gradient(#F3E2D2 1.1px, transparent 2.1px)",
                backgroundSize: "8px 8px",
              }}
              aria-hidden
            />

            <div
              data-float="chip"
              className="pointer-events-none absolute text-[#F38358] -left-5 top-[44%] z-20 hidden h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-medium shadow-[0_16px_30px_-20px_rgba(0,0,0,0.35)] md:flex"
              aria-hidden
            >
              {"{ }"}
            </div>
            <div
              data-float="chip"
              className="pointer-events-none absolute text-[#F38358] -right-5 -top-[11%] z-20 hidden h-11 w-11 items-center justify-center rounded-xl bg-white font-mono text-lg font-medium shadow-[0_16px_30px_-20px_rgba(0,0,0,0.35)] md:flex"
              aria-hidden
            >
              {"</>"}
            </div>
            <div
              data-float="chip"
              className="pointer-events-none absolute  text-[#F38358] -right-5 bottom-[16%] z-20 hidden h-11 w-11 items-center justify-center rounded-xl bg-white font-mono text-lg font-medium shadow-[0_16px_30px_-20px_rgba(0,0,0,0.35)] md:flex"
              aria-hidden
            >
              {"</>"}
            </div>

            <div
              ref={boardRef}
              className="relative max-w-[1200px] mx-auto overflow-hidden rounded-[32px] border border-[#ffe0cb] bg-gradient-to-b from-[#fbf8f6] via-[#f7f3f0] to-[#fdf0e7] p-4 shadow-[0_28px_70px_-34px_rgba(4,8,25,0.9)] md:p-5"
            >
              <div className="pointer-events-none absolute inset-0 opacity-[0.24]" aria-hidden>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(60,102,255,0.22),transparent_42%),radial-gradient(circle_at_82%_84%,rgba(75,24,143,0.2),transparent_45%)]" />
              </div>

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex gap-4">
                  {TECHNOLOGY_GROUPS.slice(0, 3).map((group, index) => (
                    <TeckStackGroup key={group.title} title={group.title} span={group.span} groupSpan={group.groupSpan} color={group.color} items={group.items.map((item) => ({ name: item.name, icon: item.icon as string }))} />
                  ))}
                </div>
                <div className="flex gap-4 my-4">
                  {TECHNOLOGY_GROUPS.slice(3, 7).map((group, index) => (
                    <TeckStackGroup key={group.title} title={group.title} span={group.span} groupSpan={group.groupSpan} color={group.color} items={group.items.map((item) => ({ name: item.name, icon: item.icon as string }))} />
                  ))}
                </div>
                
              </div>

              <div className="relative z-10 mt-4 grid grid-cols-1 gap-2.5 rounded-full border border-[#ffe0cb] bg-[#fbf8f6] p-3 md:grid-cols-4 md:gap-3 md:p-4 divide-x-[1px] divide-[#ffd6ba]">
                {TECH_SHOWCASE_FEATURES.map((feature) => (
                  <article
                    key={feature.id}
                    data-reveal="feature"
                    className="group flex items-center gap-2.5 lg:gap-5 2xl:gap-7 px-3 py-2.5 justify-center"
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center text-primary">
                      <FeatureIcon icon={feature.icon} />
                    </div>
                    <div>
                      <p className="font-label text-sm font-bold uppercase tracking-[0.14em] text-[#F38358]">{feature.title}</p>
                      <p className="mt-0.5 font-body text-sm max-w-[130px] leading-snug text-[#5c5c5c]">{feature.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
