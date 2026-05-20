"use client";

import Image from "next/image";
import SectionCharReveal from "@/components/motion/SectionCharReveal";
import { sectionPageX, sectionStackTop } from "@/components/system/sectionTheme";

export default function AboutSection() {
  return (
    <section
      id="about"
      className={`bg-surface-container-lowest ${sectionPageX} ${sectionStackTop} pb-32 md:pb-52`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-24 md:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)]">
          <div className="relative">
            <div className="sticky top-40 self-start">
              <div className="mb-12">
                <SectionCharReveal
                  as="div"
                  layout="flow"
                  scrubEnd="+=30%"
                  titleVariant="display"
                  title={"About\nBheard."}
                />
              </div>
              <div className="mb-8 h-1 w-24 bg-primary" />
              <div className="mt-6 max-w-[min(100%,22rem)] overflow-hidden rounded-lg">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    alt="BHEARD team collaborating on brand strategy - BHEARD Mumbai"
                    className="object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                    fill
                    sizes="(max-width: 768px) 100vw, 28vw"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:gap-12 md:pt-32">
            <p className="font-body text-2xl font-light leading-tight text-neutral-700 md:text-4xl">
              <span className="font-bold italic text-neutral-900">BHeard</span>{" "}
              is a brand and technology studio helping businesses build{" "}
              <span className="text-primary-fixed">stronger digital presence</span>{" "}
              and customer experiences.
            </p>
            <p className="font-body text-lg leading-relaxed text-on-surface-variant md:text-xl">
              We work across branding, content, campaigns, websites, and mobile
              applications - bringing strategy, creative, and technology
              together under one team.
            </p>
            <p className="font-body text-lg leading-relaxed text-on-surface-variant md:text-xl">
              Our work is grounded in years of experience with hospitality,
              luxury, consumer, and lifestyle brands - categories where trust,
              emotion, and experience are often as important as the product
              itself.
            </p>
            <p className="font-body text-lg leading-relaxed text-on-surface-variant md:text-xl">
              We think about brands as experiences, not just identities. That&apos;s
              why our focus goes beyond visibility - creating communication and
              digital experiences people remember and return to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
