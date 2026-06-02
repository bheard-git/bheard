"use client";

import Image from "next/image";
import MockSocialScroller from "@/components/solutions/MockSocialScroller";
import type { ServicePinItem } from "@/components/solutions/ServicePinStack";

type BrandServicesStickyFeedProps = {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: ServicePinItem[];
  /** Decorative visual in the sticky aside (all items render as cards). */
  asideVisual?: React.ReactNode;
};

export default function BrandServicesStickyFeed({
  eyebrow,
  heading,
  intro,
  items,
  asideVisual = <MockSocialScroller />,
}: BrandServicesStickyFeedProps) {

  return (
    <section className="bg-surface py-section-y-sm md:py-section-y">
      <div className="mx-auto grid max-w-content-max grid-cols-1 gap-10 px-gutter-sm md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-8 md:px-gutter lg:gap-12">
        <aside className="md:sticky md:top-24 md:h-[calc(100dvh-7rem)] md:self-start">
          <p className="font-label text-label-sm uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h2 className="mt-3 max-w-xl font-headline text-[clamp(2rem,4.2vw,3.25rem)] font-black uppercase leading-[1.02] tracking-tight text-on-background">
            {heading}
          </h2>
          {intro ? (
            <p className="mt-4 max-w-lg font-body text-body-lg leading-relaxed text-on-surface-variant">{intro}</p>
          ) : null}

          <div className="mt-7 h-[min(62dvh,520px)] md:h-[calc(100dvh-15rem)]">
            <div className="h-full">{asideVisual}</div>
          </div>
        </aside>

        <div className="space-y-7 md:space-y-10">
          {items.map((item, index) => (
            <article
              key={item.id}
              className="group relative sticky top-24 h-[calc(100dvh-7.5rem)] overflow-hidden rounded-[1.75rem] border border-inverse-surface/10 shadow-[0_30px_90px_-52px_rgba(17,24,39,0.42)]"
              style={{ zIndex: 20 + index }}
            >
              {item.visual ? (
                <div className="absolute inset-0">{item.visual}</div>
              ) : item.imageSrc ? (
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
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
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
