"use client";

import Image from "next/image";
import { useMemo } from "react";
import LogoLoop, { type LogoItem } from "@/components/LogoLoop";
import SectionTitle from "@/components/system/SectionTitle";
import { sectionBandY, sectionPageX, sectionTitleMarginCompact } from "@/components/system/sectionTheme";
import { publicAsset } from "@/lib/utils/publicAsset";

const clientLogo = (file: string) => publicAsset("assets", "client-logos", file);

/** Slower base marquee + gentler hover crawl (px/s in LogoLoop RAF loop) */
const STRIP_SPEED = 68;
const HOVER_SPEED = 22;

type ClientLogo = {
  src: string;
  alt: string;
};

const rowOneLogos: ClientLogo[] = [
  { src: "/assets/client-logos/accor.png", alt: "Accor" },
  { src: "/assets/client-logos/bnp-paribas.webp", alt: "BNP Paribas" },
  { src: "/assets/client-logos/broward-college.webp", alt: "Broward College" },
  { src: "/assets/client-logos/caper-travel.png", alt: "Caper Travel" },
  { src: "/assets/client-logos/curly-tales.png", alt: "Curly Tales" },
  { src: clientLogo("Dr-Tvacha.jpg"), alt: "Dr. Tvacha" },
  { src: clientLogo("german osteo care.jpg"), alt: "German Osteo Care" },
  { src: "/assets/client-logos/goa-portuguesa.webp", alt: "Goa Portuguesa" },
  { src: "/assets/client-logos/goa-tourism.webp", alt: "Goa Tourism" },
  { src: "/assets/client-logos/hindustan-unilever.webp", alt: "Hindustan Unilever" },
  { src: "/assets/client-logos/itc.png", alt: "ITC" },
  { src: "/assets/client-logos/kadkani.webp", alt: "Kadkani" },
];

const rowTwoLogos: ClientLogo[] = [
  { src: "/assets/client-logos/mickey-mehta.webp", alt: "Mickey Mehta" },
  { src: "/assets/client-logos/novotel.webp", alt: "Novotel" },
  { src: "/assets/client-logos/radisson-blu.webp", alt: "Radisson Blu" },
  { src: clientLogo("jaslok hospital.jpg"), alt: "Jaslok Hospital" },
  { src: clientLogo("Manderem.jpeg"), alt: "Manderem" },
  { src: clientLogo("my goa.png"), alt: "My Goa" },
  { src: clientLogo("Rodha.png"), alt: "Rodha" },
  { src: "/assets/client-logos/shammis-yogalaya.webp", alt: "Shammis Yogalaya" },
  { src: "/assets/client-logos/treat-resort.webp", alt: "Treat Resort" },
  { src: "/assets/client-logos/dr-sameera.webp", alt: "Dr. Sameera" },
  { src: clientLogo("Zumba wear.jpeg"), alt: "Zumba Wear" },
];

function toLogoLoopItems(logos: ClientLogo[]): LogoItem[] {
  return logos.map((logo) => ({
    node: (
      <span className="flex h-[92px] w-[178px] shrink-0 items-center justify-center px-2 md:px-4">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={178}
          height={92}
          sizes="178px"
          className="h-auto max-h-[88px] w-full object-contain opacity-65 grayscale transition-[filter,opacity,transform] duration-[500ms] ease-out group-hover/item:scale-[1.02] group-hover/item:opacity-100 group-hover/item:grayscale-0"
        />
      </span>
    ),
    ariaLabel: logo.alt,
    title: logo.alt,
  }));
}

type ClientLogosProps = {
  title?: string;
  variant?: "default" | "bare";
  className?: string;
};

export default function ClientLogos({ title, variant = "default", className }: ClientLogosProps) {
  const logosRowOne = useMemo(() => toLogoLoopItems(rowOneLogos), []);
  const logosRowTwo = useMemo(() => toLogoLoopItems(rowTwoLogos), []);

  const fadeTint = "#ffffff";

  const sectionPadding =
    variant === "bare"
      ? "pt-10 pb-0 md:pt-12"
      : title
        ? "border-t border-neutral-200/80 pt-12 pb-16 md:pt-14 md:pb-20"
        : sectionBandY;

  return (
    <section
      aria-label={title ?? "Clients we work with"}
      className={`relative overflow-hidden bg-surface-container-lowest ${sectionPageX} ${sectionPadding} ${className ?? ""}`}
    >
      {title && variant !== "bare" ? (
        <SectionTitle variant="compact" className={`text-center ${sectionTitleMarginCompact}`}>
          {title}
        </SectionTitle>
      ) : null}

      <div className="relative space-y-5 md:space-y-6">
        <LogoLoop
          logos={logosRowOne}
          ariaLabel="Client logos, first row"
          speed={STRIP_SPEED}
          direction="left"
          logoHeight={92}
          gap={44}
          hoverSpeed={HOVER_SPEED}
          fadeOut
          fadeOutColor={fadeTint}
          className="py-2"
        />
        <LogoLoop
          logos={logosRowTwo}
          ariaLabel="Client logos, second row"
          speed={STRIP_SPEED}
          direction="right"
          logoHeight={92}
          gap={44}
          hoverSpeed={HOVER_SPEED}
          fadeOut
          fadeOutColor={fadeTint}
          className="py-2"
        />
      </div>
    </section>
  );
}
