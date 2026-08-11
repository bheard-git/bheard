"use client";

import "@/lib/motion/config";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { prefersReducedMotion } from "@/lib/motion/animations";
import {
  sectionBandY,
  sectionContentBand,
  sectionPageX,
} from "@/components/system/sectionTheme";

import {
  TECHNOLOGY_GROUPS,
  TECH_SHOWCASE_FEATURES,
  type TechFeature,
} from "@/lib/solutions/techShowcaseReplicaData";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function FeatureIcon({ icon }: { icon: TechFeature["icon"] }) {
  return icon;
}

type TechnologyItem = {
  name: string;
  icon: string;
};

type TechnologyGroup = {
  title: string;
  color: string;
  items: TechnologyItem[];
};

/**
 * Desktop layout follows the Brand Solutions bento structure:
 *
 * Row 1:
 * Intro | Frontend | Mobile | Backend
 *
 * Row 2:
 * Database | E-Commerce | Integrations & Services | Cloud & DevOps
 *
 * Mobile:
 * Everything becomes a single responsive column.
 */
const BENTO_GROUP_CLASSES: Record<string, string> = {
  // Tablet: 1 of 4 equal columns
  // Desktop: restore the Brand Solutions style proportions
  Frontend: "md:col-span-1 lg:col-span-4",
  Mobile: "md:col-span-1 lg:col-span-2",
  Backend: "md:col-span-1 lg:col-span-3",

  Database: "md:col-span-1 lg:col-span-3",
  "E-Commerce": "md:col-span-1 lg:col-span-2",
  "Integrations & Services": "md:col-span-1 lg:col-span-3",
  "Cloud & DevOps": "md:col-span-1 lg:col-span-4",
};

const BENTO_ITEM_GRID_CLASSES: Record<string, string> = {
  Frontend: "grid-cols-2 sm:grid-cols-4",
  Mobile: "grid-cols-2",
  Backend: "grid-cols-2 sm:grid-cols-3",
  Database: "grid-cols-2",
  "E-Commerce": "grid-cols-1",
  "Integrations & Services": "grid-cols-3",
  "Cloud & DevOps": "grid-cols-2 sm:grid-cols-4",
};

function getGroupClass(title: string) {
  return BENTO_GROUP_CLASSES[title] ?? "md:col-span-4";
}

function getItemGridClass(title: string) {
  return BENTO_ITEM_GRID_CLASSES[title] ?? "grid-cols-2";
}

function TechnologyTile({
  item,
  index,
}: {
  item: TechnologyItem;
  index: number;
}) {
  return (
    <div
      data-reveal="tile"
      className="
        group/tile
        relative
        flex
        min-h-[92px]
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-[12px]
        border
        border-[#e7e3df]
        bg-white
        px-2
        py-3
        text-center
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[#f38358]
        hover:shadow-[0_14px_30px_-22px_rgba(4,8,25,0.7)]

        md:min-h-[88px]
        lg:min-h-[112px]
        lg:px-3
        lg:py-5
        lg:rounded-[14px]
      "
      style={{
        transitionDelay: `${index * 20}ms`,
      }}
    >
      <span
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_0%,rgba(243,131,88,0.12),transparent_65%)]
          opacity-0
          transition-opacity
          duration-300
          group-hover/tile:opacity-100
        "
      />

      <div
        className="
          relative
          z-10
          flex
          h-9
          w-9
          items-center
          justify-center

          lg:h-11
          lg:w-11
        "
      >
        <Image
          src={item.icon}
          alt={`${item.name} technology`}
          width={44}
          height={44}
          className="
            h-8
            w-8
            object-contain
            transition-transform
            duration-300
            group-hover/tile:scale-110

            lg:h-10
            lg:w-10
          "
        />
      </div>

      <p
        className="
          relative
          z-10
          mt-2
          font-body
          text-[10px]
          leading-tight
          text-[#5c5c5c]
          transition-colors
          duration-300
          group-hover/tile:text-[#0a1330]

          lg:mt-3
          lg:text-[11px]
        "
      >
        {item.name}
      </p>
    </div>
  );
}

function TechnologyBentoCard({
  group,
}: {
  group: TechnologyGroup;
}) {
  return (
    <article
      data-reveal="group"
      className={`
        ${getGroupClass(group.title)}
        min-w-0
        overflow-hidden bg-[#f4f4f4] 
        border
        border-[#dedede]
        transition-all
        duration-300
      `}
    >
      {/* Category header */}
      <div
        className="
          flex
          min-h-[58px]
          items-center bg-white
          justify-between
          gap-3
          border-b
          border-[#e8e5e2]
          px-4
          py-3
          sm:px-5
        "
      >
        <p
          className="
            font-label
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
          "
          style={{ color: group.color }}
        >
          {group.title}
        </p>

        <span
          className="
            h-1.5
            w-1.5
            shrink-0
            rounded-full
          "
          style={{ backgroundColor: group.color }}
          aria-hidden
        />
      </div>

      {/* Technology tiles */}
      <div className={`grid ${getItemGridClass(group.title)} gap-1.5 p-1.5 items-center align-middle h-[calc(100%_-_58px)]`}>
        {group.items.map((item, index) => (
          <TechnologyTile
            key={item.name}
            item={{
              name: item.name,
              icon: item.icon as string,
            }}
            index={index}
          />
        ))}
      </div>
    </article>
  );
}

function IntroCopy() {
  return (
    <div
      data-reveal="intro"
      className="
        min-w-0
        md:col-span-4
        lg:col-span-3
        lg:row-span-1
        flex
        flex-col
        justify-center
        pr-0
        md:pr-3
        lg:pr-6
      "
    >
      <div className="flex min-w-0 flex-col justify-between">
      <div>
        <p className="font-label text-label-sm uppercase tracking-[0.2em] text-primary">Technology stack</p>
        <h2 className="mt-3 font-headline text-[clamp(1.25rem,2.5vw,1.85rem)] font-black uppercase leading-tight tracking-tight text-on-background">
        Built on modern tech. Engineered for impact
        </h2>
        <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
        We leverage best-in-class technologies and frameworks to build scalable, secure, and high-performance
        digital products.
        </p>
      </div>
      <Link
        href="/work"
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm border border-on-background px-4 py-2.5 font-headline text-xs font-bold uppercase tracking-widest text-on-background transition-colors hover:bg-on-background hover:text-surface md:mt-8"
      >
        View Case Studies <span aria-hidden>→</span>
      </Link>
    </div>
    </div>
  );
}

export default function TechShowcaseReplicaSection({
  sectionClassName = "",
}: {
  sectionClassName?: string;
}) {
  const rootRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const firstRowGroups = TECHNOLOGY_GROUPS.slice(0, 3);
  const secondRowGroups = TECHNOLOGY_GROUPS.slice(3, 7);

  return (
    <section
      ref={rootRef}
      className={`
        relative
        overflow-hidden
        ${sectionPageX}
        ${sectionClassName}
      `}
    >
      <div className={sectionContentBand}>

        {/* =========================================================
            BRAND-STYLE BENTO GRID
        ========================================================== */}
        <div
          ref={gridRef}
          className="
            relative
            z-10
            mx-auto
          "
        >
          {/* FIRST ROW
              Intro | Frontend | Mobile | Backend
          */}
          <div
            className="
              grid
              min-w-0
              grid-cols-1
              gap-2
              md:grid-cols-3
              lg:grid-cols-12
              md:gap-2
            "
          >
            <IntroCopy />

            {firstRowGroups.map((group) => (
              <TechnologyBentoCard
                key={group.title}
                group={group as TechnologyGroup}
              />
            ))}
          </div>

          {/* SECOND ROW
              Database | E-Commerce | Integrations | Cloud
          */}
          <div
            className="
              mt-2
              grid
              min-w-0
              grid-cols-1
              gap-2
              md:grid-cols-4
              lg:grid-cols-12
              md:gap-2
            "
          >
            {secondRowGroups.map((group) => (
              <TechnologyBentoCard
                key={group.title}
                group={group as TechnologyGroup}
              />
            ))}
          </div>

          {/* =====================================================
              FEATURE STRIP
          ====================================================== */}
          <div
            className="
              mt-2
              grid
              grid-cols-1
              divide-y
              divide-[#ffd6ba]
              overflow-hidden
              border
              border-[#dedede]
              bg-white
              sm:grid-cols-2
              sm:divide-x
              sm:divide-y-0
              lg:grid-cols-4
            "
          >
            {TECH_SHOWCASE_FEATURES.map((feature) => (
              <article
                key={feature.id}
                data-reveal="feature"
                className="
                  group
                  flex
                  min-h-[115px]
                  items-center
                  gap-4
                  px-5
                  py-5
                  transition-colors
                  duration-300
                  hover:bg-[#fffaf7]
                  lg:px-6
                "
              >
                <div
                  className="
                    flex
                    size-11
                    shrink-0
                    items-center
                    justify-center
                    text-primary
                  "
                >
                  <FeatureIcon icon={feature.icon} />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      font-label
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#F38358]
                    "
                  >
                    {feature.title}
                  </p>

                  <p
                    className="
                      mt-1
                      max-w-[170px]
                      font-body
                      text-xs
                      leading-snug
                      text-[#5c5c5c]
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}