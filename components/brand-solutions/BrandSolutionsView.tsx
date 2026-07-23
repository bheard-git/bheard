"use client";

import Link from "next/link";
import BrandResultsBento from "@/components/brand-solutions/BrandResultsBento";
import BrandSolutionsHero from "@/components/brand-solutions/BrandSolutionsHero";
import ClientLogos from "@/components/ClientLogos";
import IndustriesClosingCta from "@/components/industries/IndustriesClosingCta";
import HorizontalProcessRail, { type ProcessRailStep } from "@/components/solutions/HorizontalProcessRail";
import SolutionsCaseStudyCard from "@/components/solutions/SolutionsCaseStudyCard";
import { type ServicePinItem } from "@/components/solutions/ServicePinStack";
import TwoColumnFaq from "@/components/site/TwoColumnFaq";
import type { FaqItem } from "@/components/site/FaqSection";
import { BRAND_SOLUTIONS_CASE_STUDY_CARDS } from "@/lib/solutions/solutionsCaseStudies";
import {
  solutionsBandPad,
  solutionsHomeBand,
  solutionsStackBottom,
  solutionsStackTop,
} from "@/lib/solutions/solutionsSectionTheme";
import { sectionPageX } from "@/components/system/sectionTheme";
import { BRAND_SERVICE_IMAGES } from "@/lib/solutions/visualAssets";

const band = solutionsHomeBand;

const BRAND_SERVICES: ServicePinItem[] = [
  {
    id: "social",
    title: "Social Media Management",
    body: "As a leading social media management agency for consumer, lifestyle and hospitality brands, we create content ecosystems that build audience engagement, strengthen brand visibility, and support business objectives.",
    ...BRAND_SERVICE_IMAGES.social,
  },
  {
    id: "copy",
    title: "Content & Copywriting",
    body: "As a content marketing agency for lifestyle brands and consumer businesses, we develop strategic content, campaign messaging, and brand storytelling that improves audience engagement and strengthens brand recall.",
    ...BRAND_SERVICE_IMAGES.copy,
  },
  {
    id: "design",
    title: "Graphic Design & Illustrations",
    body: "We provide brand identity design for consumer, lifestyle, and hospitality brands, creating visual systems, campaign assets, and digital creatives that strengthen recognition and maintain consistency across every customer touchpoint.",
    ...BRAND_SERVICE_IMAGES.design,
  },
  {
    id: "video",
    title: "Video Editing & Animations",
    body: "As a video production partner, we create reels, brand films, motion graphics, and short-form content designed to increase engagement, improve watch time, and support campaign performance.",
    ...BRAND_SERVICE_IMAGES.video,
  },
  {
    id: "influencer",
    title: "Influencer Marketing",
    body: "As an influencer marketing agency for D2C and consumer brands in India, we identify creator partnerships that align with audience interests, increase brand credibility, and generate authentic engagement at scale.",
    ...BRAND_SERVICE_IMAGES.influencer,
  },
  {
    id: "campaign",
    title: "Campaign Strategy & Performance Marketing",
    body: "We combine campaign strategy, creative execution, media planning, and performance marketing to create integrated campaigns that move seamlessly from insight to execution, with business goals leading every decision.",
    ...BRAND_SERVICE_IMAGES.campaign,
  },
  {
    id: "ai-content",
    title: "AI Content Creation & Meta Optimisation",
    body: "We combine human creativity with AI-powered workflows to accelerate content production, generate high-performing creative variations, and optimize Meta campaigns through continuous testing and audience insights.",
    ...BRAND_SERVICE_IMAGES.aiContent,
  },
];

const BRAND_SERVICE_STEPS: ProcessRailStep[] = BRAND_SERVICES.map((service) => ({
  subtitle: "Service",
  title: service.title,
  body: service.body,
  imageSrc: service.imageSrc,
  imageAlt: service.imageAlt,
}));

type BrandSolutionsViewProps = {
  faqItems: FaqItem[];
};

export default function BrandSolutionsView({ faqItems }: BrandSolutionsViewProps) {
  return (
    <>
      <BrandSolutionsHero />

      <div className="bg-surface-container-lowest">
        <ClientLogos variant="bare" className={solutionsStackBottom} />
      </div>

      <section className={`bg-surface-container-lowest ${sectionPageX} ${solutionsStackTop}`}>
        <div className={band}>
          <BrandResultsBento />
        </div>
      </section>

      <HorizontalProcessRail
        eyebrow="Services"
        heading="The Brand Toolkit"
        subheading="The right mix of strategy, content, design, and execution to help your brand stay ahead of the conversation."
        steps={BRAND_SERVICE_STEPS}
        pinHeightClassName="min-h-[calc(100dvh-6.5rem)]"
        cardClassName="h-[min(68dvh,600px)] md:h-[min(72dvh,660px)]"
        immersiveCardStyle
        borderTop={false}
        sectionClassName={solutionsBandPad}
      />

      {BRAND_SOLUTIONS_CASE_STUDY_CARDS.length > 0 ? (
        <section className={`bg-[#fbf8f6] ${sectionPageX} ${solutionsBandPad}`}>
          <div className={band}>
            <div className="mb-6 flex flex-col items-start justify-between gap-4 md:mb-8 md:flex-row md:items-end">
              <h2 className="font-headline text-2xl font-black uppercase tracking-tight text-on-surface md:text-3xl">
                Featured Case Studies
              </h2>
              <Link
                href="/work"
                className="font-headline text-sm font-bold uppercase tracking-widest text-primary transition-opacity hover:opacity-80"
              >
                View all work →
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
              {BRAND_SOLUTIONS_CASE_STUDY_CARDS.map((card) => (
                <SolutionsCaseStudyCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <TwoColumnFaq
        heading="Brand Solutions — Frequently Asked Questions"
        items={faqItems}
        className={`bg-surface-container-lowest ${sectionPageX} ${solutionsBandPad}`}
      />

      <div id="brand-journey">
        <IndustriesClosingCta
          headline="Let's Build a Brand That Gets You Chosen."
          body="If your brand operates in a category where experience, trust, and digital innovation drive growth, we'd love to talk."
        />
      </div>
    </>
  );
}
