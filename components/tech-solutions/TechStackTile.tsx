"use client";

import { type TechStackItem } from "@/lib/solutions/techStack";
import { useMemo, useState } from "react";

type TechStackTileProps = {
  item: TechStackItem;
};

export default function TechStackTile({ item }: TechStackTileProps) {
  const initials = useMemo(() => {
    const parts = item.name
      .replace(/&/g, " ")
      .replace(/[^a-zA-Z0-9 ]/g, " ")
      .split(/\s+/)
      .filter(Boolean);
    const str = parts.slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");
    return str || item.logoAlt?.[0]?.toUpperCase() || "?";
  }, [item.logoAlt, item.name]);

  const [imageFailed, setImageFailed] = useState(false);

  return (
    <button
      type="button"
      className="group inline-flex w-[clamp(5.5rem,10vw,7.5rem)] cursor-default items-center justify-center rounded-2xl border border-inverse-surface/10 bg-surface-bright px-2.5 py-3 shadow-[0_16px_48px_-28px_rgba(17,24,39,0.45)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_28px_64px_-32px_rgba(17,24,39,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label={item.name}
    >
      <span className="flex flex-col items-center gap-2">
        <span className="relative flex h-11 w-full items-center justify-center overflow-hidden rounded-lg bg-surface-container-lowest">
          {!imageFailed ? (
            // Using an <img> so we can directly point at official SVG logo URLs.
            // If a particular logo URL 404s, we fall back to initials.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.logoSrc}
              alt={item.logoAlt ?? item.name}
              className="h-7 w-auto"
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-on-surface-variant">
              {initials}
            </span>
          )}
        </span>
        <span className="line-clamp-2 text-center font-headline text-[9px] font-bold uppercase leading-tight tracking-wide text-on-background md:text-[10px]">
          {item.name}
        </span>
      </span>
    </button>
  );
}
