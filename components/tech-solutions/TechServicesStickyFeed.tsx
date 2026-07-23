"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import TechServiceScrollVisual, { type TechServiceVisualId } from "@/components/tech-solutions/TechServiceScrollVisual";
import type { ServicePinItem } from "@/components/solutions/ServicePinStack";
import { sectionContentBand, sectionPageX } from "@/components/system/sectionTheme";

type TechServicesStickyFeedProps = {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: ServicePinItem[];
};

function isTechVisualId(id: string): id is TechServiceVisualId {
  return id === "web" || id === "mobile" || id === "ux" || id === "commerce" || id === "ai";
}

export default function TechServicesStickyFeed({ eyebrow, heading, intro, items }: TechServicesStickyFeedProps) {
  const [activeId, setActiveId] = useState<TechServiceVisualId>("web");
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const setCardRef = useCallback((index: number, el: HTMLElement | null) => {
    cardRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const nodes = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    let ticking = false;
    const syncActiveService = () => {
      const centerY = window.innerHeight * 0.52;
      const probeRect = nodes[0]?.getBoundingClientRect();
      const probeX = probeRect ? Math.max(probeRect.left + 24, Math.min(probeRect.right - 24, probeRect.left + probeRect.width * 0.5)) : window.innerWidth * 0.72;

      const probeTarget = document.elementFromPoint(probeX, centerY);
      const topCard = probeTarget?.closest<HTMLElement>("[data-service-id]");
      const topId = topCard?.getAttribute("data-service-id");
      if (topId && isTechVisualId(topId)) {
        setActiveId((current) => (current === topId ? current : topId));
        return;
      }

      let fallbackId: TechServiceVisualId | null = null;
      let maxVisibleArea = 0;
      for (const node of nodes) {
        const id = node.getAttribute("data-service-id");
        if (!id || !isTechVisualId(id)) {
          continue;
        }
        const rect = node.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, window.innerHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibleArea = visibleHeight * Math.max(0, rect.width);
        if (visibleArea >= maxVisibleArea) {
          maxVisibleArea = visibleArea;
          fallbackId = id;
        }
      }
      if (fallbackId) {
        setActiveId((current) => (current === fallbackId ? current : fallbackId));
      }
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        syncActiveService();
        ticking = false;
      });
    };

    syncActiveService();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [items]);

  return (
    <section className={`bg-surface ${sectionPageX} py-section-y-sm md:py-section-y`}>
      <div className={`grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-8 lg:gap-12 ${sectionContentBand}`}>
        <aside className="md:sticky md:top-24 md:h-[calc(100dvh-7rem)] md:self-start">
          <div className="flex flex-col item-center justify-center h-full">
            <p className="font-label text-label-sm uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
            <h2 className="mt-3 max-w-xl font-headline text-[clamp(2rem,4.2vw,3.25rem)] font-black uppercase leading-[1.02] tracking-tight text-on-background">
              {heading}
            </h2>
            {intro ? (
              <p className="mt-4 max-w-lg font-body text-body-lg leading-relaxed text-on-surface-variant">{intro}</p>
            ) : null}

            <div className="mt-7 max-w-xl">
              <TechServiceScrollVisual activeId={activeId} />
            </div>
          </div>
        </aside>

        <div className="space-y-7 md:space-y-10">
          {items.map((item, index) => (
            <article
              key={item.id}
              id={item.id}
              ref={(el) => setCardRef(index, el)}
              data-service-id={item.id}
              className="group sticky top-24 h-[calc(100dvh-7.5rem)] scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-inverse-surface/10 shadow-[0_30px_90px_-52px_rgba(17,24,39,0.42)]"
              style={{ zIndex: 20 + index }}
            >
              {item.imageSrc ? (
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt ?? item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 56vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high via-surface to-surface-container-low" />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/42 to-black/14" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/36 to-transparent" />
              <div className="absolute inset-0 flex items-end justify-start p-7 md:p-10">
                <div className="max-w-2xl text-left">
                  <p className="font-label text-[10px] uppercase tracking-[0.22em] text-primary">Service</p>
                  <h3 className="mt-3 font-headline text-[clamp(1.6rem,3.2vw,2.45rem)] font-black uppercase leading-[1.04] tracking-tight text-surface">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-surface/95 md:text-base">
                    {item.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
