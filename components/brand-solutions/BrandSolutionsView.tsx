"use client";



import BrandPhilosophySection from "@/components/solutions/BrandPhilosophySection";

import BrandServicesStickyFeed from "@/components/brand-solutions/BrandServicesStickyFeed";

import HorizontalProcessRail, { type ProcessRailStep } from "@/components/solutions/HorizontalProcessRail";

import KineticSolutionsHero from "@/components/solutions/KineticSolutionsHero";

import MockSocialScroller from "@/components/solutions/MockSocialScroller";

import { type ServicePinItem } from "@/components/solutions/ServicePinStack";

import SolutionsClosingCta from "@/components/solutions/SolutionsClosingCta";

import {

  BRAND_HERO_MEDIA,

  BRAND_SERVICE_IMAGES,

  PROCESS_THUMB_BRAND,

} from "@/lib/solutions/visualAssets";



const BRAND_SERVICES: ServicePinItem[] = [

  {

    id: "toolkit",

    title: "The Brand Toolkit",

    body: "The right mix of strategy, content, design, and execution to help your brand stay ahead of the conversation.",

    ...BRAND_SERVICE_IMAGES.toolkit,

  },

  {

    id: "social",

    title: "Social Media Management",

    body: "We create strategy-led social media ecosystems that go beyond engagement. Through content planning, community building, and platform expertise, we help brands build visibility, strengthen trust, and drive meaningful business growth.",

    ...BRAND_SERVICE_IMAGES.social,

  },

  {

    id: "copy",

    title: "Content & Copywriting",

    body: "Every brand has a story worth telling. Through compelling content, strategic messaging, and audience-focused copywriting, we help brands communicate clearly, build connections, and inspire action across digital touchpoints.",

    ...BRAND_SERVICE_IMAGES.copy,

  },

  {

    id: "design",

    title: "Graphic Design & Illustrations",

    body: "Great design does more than attract attention—it creates recognition. From social media creatives to brand campaigns, we craft visual experiences that communicate clearly, strengthen identity, and leave a lasting impression.",

    ...BRAND_SERVICE_IMAGES.design,

  },

  {

    id: "video",

    title: "Video Editing & Animations",

    body: "In a content-first world, motion drives engagement. From reels and brand films to motion graphics and animations, we create video content that captures attention, communicates effectively, and encourages audience interaction.",

    ...BRAND_SERVICE_IMAGES.video,

  },

  {

    id: "influencer",

    title: "Influencer Marketing",

    body: "We connect brands with the right creators to build authentic relationships with audiences. Through strategic influencer partnerships, we increase visibility, strengthen credibility, and drive meaningful engagement across digital platforms.",

    ...BRAND_SERVICE_IMAGES.influencer,

  },

  {

    id: "campaign",

    title: "Campaign Planning",

    body: "Successful campaigns begin with insight and end with impact. We develop integrated campaign strategies that connect with audiences, spark conversations, and deliver measurable results across multiple channels and touchpoints.",

    ...BRAND_SERVICE_IMAGES.campaign,

  },

];



const BRAND_PROCESS: ProcessRailStep[] = [

  {

    subtitle: "Discover",

    title: "Brand DNA",

    body: "Every project begins with understanding your brand, audience, market, and business goals. We uncover opportunities, identify challenges, and establish a clear foundation for success.",

    ...PROCESS_THUMB_BRAND.Discover,

  },

  {

    subtitle: "Strategize",

    title: "Strategy & positioning",

    body: "We transform insights into actionable strategies. From content frameworks and communication pillars to campaign concepts and channel plans, every recommendation is designed with purpose.",

    ...PROCESS_THUMB_BRAND.Strategize,

  },

  {

    subtitle: "Create",

    title: "Content & visual systems",

    body: "Our team brings ideas to life through compelling content, thoughtful design, engaging videos, and creative campaigns that reflect your brand's unique identity.",

    ...PROCESS_THUMB_BRAND.Create,

  },

  {

    subtitle: "Amplify",

    title: "Reach & distribution",

    body: "Great ideas deserve greater reach. We distribute, optimize, and activate content across relevant platforms to maximize visibility, engagement, and business impact.",

    ...PROCESS_THUMB_BRAND.Amplify,

  },

  {

    subtitle: "Measure & Evolve",

    title: "Data-driven iteration",

    body: "We track performance, gather insights, and continuously refine our approach. By learning what resonates, we optimize strategies to drive stronger results over time.",

    ...PROCESS_THUMB_BRAND["Measure & Evolve"],

  },

];



export default function BrandSolutionsView() {

  return (

    <>

      <KineticSolutionsHero

        eyebrow="Make them remember you"

        line1="Visibility gets you seen."

        line2="Branding gets you chosen."

        subtext="We help brands build recognition, relevance, and lasting connections through strategy, content, and creative storytelling."

        primaryCta={{ href: "#brand-journey", label: "Build Your Brand" }}
        primaryLeadForm={{
          sourcePage: "/brand-solutions",
          title: "Let's talk",
          subtitle:
            "Tell us about your brand goals - we'll respond within one business day.",
        }}
        secondaryCta={{ href: "/work", label: "View Case Studies" }}

        morphWords={["Story", "Recall", "Trust"]}

        variant="brand"

        media={BRAND_HERO_MEDIA}

      />



      <BrandPhilosophySection />



      <BrandServicesStickyFeed

        eyebrow="Services"

        heading="What we build"

        intro="Strategy, content, design, and campaigns built to strengthen recognition and drive measurable brand growth."

        items={BRAND_SERVICES}

        asideVisual={<MockSocialScroller />}

      />



      <HorizontalProcessRail

        eyebrow="Process"

        heading="Our Growth Framework"

        subheading="Every project follows a structured approach designed to transform ideas into measurable brand growth."

        steps={BRAND_PROCESS}

        pinHeightClassName="min-h-[calc(100dvh-6.5rem)]"

        cardClassName="h-[min(68dvh,600px)] md:h-[min(72dvh,660px)]"

        immersiveCardStyle

      />



      {/* <CaseMomentsStrip /> */}



      <SolutionsClosingCta

        id="brand-journey"

        headline="If they don’t remember you, they won’t choose you."

        cta={{
          label: "Start Your Brand Journey",
          leadForm: {
            sourcePage: "/brand-solutions",
            title: "Let's talk",
            subtitle:
              "Tell us about your brand goals - we'll respond within one business day.",
          },
        }}

      />

    </>

  );

}


