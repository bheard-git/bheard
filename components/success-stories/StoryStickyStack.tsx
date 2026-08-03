"use client";

import Image from "next/image";
import Link from "next/link";
import type { CaseStudyContent } from "@/lib/case-studies";
import { sectionContentBand, sectionPageX } from "@/components/system/sectionTheme";

function StoryCard({
  study,
  index,
}: {
  study: CaseStudyContent;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <article className={`${
      index % 2 === 0
        ? "bg-surface-container-low"
        : "bg-surface"
    } py-20 md:py-24 px-8`}
    >
      <div className={`grid items-center gap-10 lg:gap-16 ${sectionContentBand}  ${
        reversed ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_0.9fr]"
      }`}>
        {/* IMAGE */}

        <Link
          href={`/work/${study.slug}`}
          className={`group relative block ${
            reversed ? "lg:order-2" : ""
          }`}
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-outline/20 bg-surface shadow-[0_25px_80px_-30px_rgba(0,0,0,.22)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_35px_100px_-30px_rgba(0,0,0,.28)]">

            <Image
              src={study.listImage}
              alt={study.listImageAlt}
              fill
              priority={index === 0}
              sizes="(max-width:768px)100vw,50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
        </Link>

        {/* CONTENT */}

        <div
          className={`flex flex-col ${
            reversed ? "lg:order-1" : ""
          }`}
        >
          <p className="mb-4 font-label text-label-sm uppercase tracking-[0.22em] text-primary">
            {study.listMeta}
          </p>

          <h2 className="font-headline text-[clamp(2rem,5vw,3.6rem)] font-black leading-[0.95] tracking-tight text-on-surface">
            {study.listTitle}
          </h2>

          <p className="mt-6 max-w-xl font-body text-body-lg leading-relaxed text-on-surface-variant">
            {study.listDescription}
          </p>

          {study.listStats?.length ? (
            <div className={`mt-8 grid gap-4 ${
              study.listStats.length > 2
                ? "grid-cols-2 lg:grid-cols-3"
                : "grid-cols-2"
            }`} >
              {study.listStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-outline/20 bg-surface-container px-6 py-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="font-headline text-3xl font-black text-primary">
                    {stat.value}
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          ) : null}

          <Link
            href={`/work/${study.slug}`}
            className="group mt-10 inline-flex w-fit items-center gap-3 font-label text-sm font-bold uppercase tracking-[0.18em] text-primary"
          >
            <span>Open Story</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function StoryStickyStack({
  cases,
}: {
  cases: CaseStudyContent[];
}) {
  return (
    <section
      id="stories"
      className={`relative overflow-hidden bg-surface-container-lowest py-20 md:py-28`}
    >
      <div className={`${sectionContentBand} px-8`}>
        <div className="max-w-3xl">
          <p className="mb-3 font-label text-label-sm uppercase tracking-[0.2em] text-primary">
            Case Studies
          </p>

          <h2 className="font-headline text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.02] tracking-tight text-on-surface">
            The Stories Behind the Success
          </h2>

          <p className="mt-5 font-body text-body-lg leading-relaxed text-on-surface-variant md:text-xl">
            Every decision, insight, and execution contributes to the bigger
            picture. Here's how we helped brands achieve promising outcomes.
          </p>
        </div>
      </div>
        <div className="">
          {cases.map((study, index) => (
            <StoryCard
              key={study.slug}
              study={study}
              index={index}
            />
          ))}
        </div>
    </section>
  );
}