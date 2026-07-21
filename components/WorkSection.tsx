"use client";

import "@/lib/motion/config";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SectionCharReveal from "@/components/motion/SectionCharReveal";
import {
  sectionPageX,
  sectionTitleMarginDisplay,
  sectionStackBottom,
} from "@/components/system/sectionTheme";

gsap.registerPlugin(useGSAP);

/** Encode filename segments so spaces and + work from /public */
function publicAsset(...parts: string[]) {
  const file = parts[parts.length - 1] ?? "";
  const dirs = parts.slice(0, -1);
  return `/${dirs.join("/")}/${encodeURIComponent(file)}`;
}

const projects: Array<{
  id: string;
  category: string;
  title: string;
  image: string;
  href: string;
  gridClass: string;
  unoptimized?: boolean;
}> = [
  {
    id: "01",
    category: "PREMIUM HOSPITALITY + LIFESTYLE",
    title: "LUXURY EXPERIENCE MARKETING & REVENUE GROWTH ",
    image: publicAsset("assets", "home", "work", "hospitality-lifestyle.jpg"),
    unoptimized: true,
    href: "/work/radisson-blu-goa",
    gridClass:
      "md:col-span-8 md:row-span-2 md:min-h-[min(52vw,420px)] lg:min-h-[440px]",
  },
  {
    id: "02",
    category: "TOURISM + COMMUNITY",
    title: "DESTINATION MARKETING & TOURISM STORYTELLING",
    image: publicAsset("assets", "home", "work", "T+C Option 1-compressed.jpg"),
    href: "/work/goa-tourism",
    gridClass: "md:col-span-4 md:min-h-[200px] lg:min-h-[212px]",
  },
  {
    id: "03",
    category: "HEALTH +  WELLNESS",
    title: "BRAND BUILDING & GROWTH STRATEGY",
    image: publicAsset("assets", "home", "work", "image-7-compressed.jpg"),
    href: "/work/dr-mickey-mehta",
    gridClass: "md:col-span-4 md:min-h-[200px] lg:min-h-[212px]",
  },
  {
    id: "04",
    category: "EDUCATION - TECH",
    title: "EDTECH PLATFORM DEVELOPMENT & CONTENT SYSTEMS ",
    image: publicAsset("assets", "home", "work", "image-5-compressed.jpg"),
    href: "/work/rodha-edtech",
    gridClass: "md:col-span-4 md:min-h-[220px]",
  },
  {
    id: "05",
    category: "E-Commerce + LIFESTYLE",
    title: "APP DEVELOPMENT FOR TRAVEL & LIFESTYLE DISCOVERY ",
    image: publicAsset("assets", "home", "work", "image-4-compressed.jpg"),
    href: "/work/curly-tales-app",
    gridClass: "md:col-span-4 md:min-h-[220px]",
  },
  {
    id: "06",
    category: "AI FOR HOSPITALITY",
    title: "AI REVENUE AGENTS & GUEST EXPERIENCE AUTOMATION",
    image: publicAsset("assets", "home", "work", "image-3-compressed.jpg"),
    href: "/services/tech-solutions/ai-chatbots-agents",
    gridClass: "md:col-span-4 md:min-h-[220px]",
  },
];

function WorkBentoCard({
  id,
  title,
  category,
  image,
  href,
  unoptimized = false,
  gridClass,
}: (typeof projects)[number]) {
  const rootRef = useRef<HTMLElement | null>(null);
  const imgWrapRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const wrap = imgWrapRef.current;
      if (!root || !wrap) {
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
    { scope: rootRef }
  );

  return (
    <article
      ref={rootRef}
      data-motion-exclude
      className={`group min-h-0 ${gridClass}`}
    >
      <Link
        href={href}
        className="relative block h-full min-h-[220px] w-full overflow-hidden md:min-h-0"
        aria-label={`${category}: ${title.trim()}`}
      >
        <div
          ref={imgWrapRef}
          className="absolute inset-[-8%] will-change-transform"
        >
          <Image
            alt={title}
            className="h-full w-full object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
            src={image}
            fill
            unoptimized={unoptimized}
            quality={unoptimized ? undefined : 90}
            sizes={
              unoptimized
                ? undefined
                : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15 opacity-65 transition-opacity duration-300 ease-out group-hover:opacity-95" />
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            {id} / {category}
          </p>
          <h4 className="mt-2 font-headline text-xl font-black uppercase leading-tight text-surface md:text-2xl">
            {title}
          </h4>
        </div>
      </Link>
    </article>
  );
}

export default function WorkSection() {
  return (
    <section
      id="work"
      className={`bg-surface-container-lowest ${sectionPageX} pt-20 md:pt-24 ${sectionStackBottom}`}
    >
      <SectionCharReveal
        as="div"
        layout="flow"
        scrubEnd="+=32%"
        titleVariant="display"
        className={`mx-auto flex max-w-7xl flex-col items-end justify-between gap-8 md:flex-row ${sectionTitleMarginDisplay}`}
        title={"Selected\nworks"}
        trailing=""
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:gap-4 md:grid-cols-12 md:gap-4">
        {projects.map((project) => (
          <WorkBentoCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
