"use client";



import HorizontalProcessRail, { type ProcessRailStep } from "@/components/solutions/HorizontalProcessRail";

import KineticSolutionsHero from "@/components/solutions/KineticSolutionsHero";

import { type ServicePinItem } from "@/components/solutions/ServicePinStack";

import SolutionsClosingCta from "@/components/solutions/SolutionsClosingCta";

import TechServicesStickyFeed from "@/components/tech-solutions/TechServicesStickyFeed";

import TechShowcaseReplicaSection from "@/components/tech-solutions/TechShowcaseReplicaSection";

import {

  PROCESS_THUMB_TECH,

  TECH_HERO_MEDIA,

  TECH_SERVICE_IMAGES,

} from "@/lib/solutions/visualAssets";



const TECH_SERVICES: ServicePinItem[] = [

  {

    id: "web",

    title: "Custom Web Development",

    body: "Responsive, scalable, and built for impact—our web solutions help businesses engage users and drive long-term digital success.",

    ...TECH_SERVICE_IMAGES.web,

  },

  {

    id: "mobile",

    title: "Custom Mobile App Development",

    body: "We build high-performance mobile apps that deliver seamless user experiences and drive engagement across iOS and Android devices.",

    ...TECH_SERVICE_IMAGES.mobile,

  },

  {

    id: "ux",

    title: "UI/UX Design",

    body: "Intuitive design and seamless user experiences that help businesses engage customers and achieve better outcomes.",

    ...TECH_SERVICE_IMAGES.ux,

  },

  {

    id: "commerce",

    title: "E-Commerce Solutions",

    body: "Future-ready e-commerce platforms designed to optimize customer experiences and accelerate digital commerce growth.",

    ...TECH_SERVICE_IMAGES.commerce,

  },

  {

    id: "ai",

    title: "Chatbots & AI Agents",

    body: "We develop AI-powered chatbots and intelligent virtual agents that automate customer interactions, improve response times, generate leads, and enhance user experiences.",

    ...TECH_SERVICE_IMAGES.ai,

  },

];



const TECH_PROCESS: ProcessRailStep[] = [

  {

    subtitle: "Discover",

    title: "Goals & requirements",

    body: "We begin by understanding your business goals, target audience, operational challenges, and digital requirements to establish a strong foundation for the right technology solution.",

    ...PROCESS_THUMB_TECH.Discover,

  },

  {

    subtitle: "Strategize",

    title: "Architecture & roadmap",

    body: "Our team defines the product architecture, user journey, feature ecosystem, and technology stack to create a scalable roadmap for long-term success.",

    ...PROCESS_THUMB_TECH.Strategize,

  },

  {

    subtitle: "Design",

    title: "UI/UX & prototypes",

    body: "Through intuitive UI/UX design, wireframes, and interactive prototypes, we create seamless digital experiences that prioritize usability, engagement, and customer satisfaction.",

    ...PROCESS_THUMB_TECH.Design,

  },

  {

    subtitle: "Develop",

    title: "Build & integrate",

    body: "We build high-performance websites, mobile applications, e-commerce platforms, and AI-powered solutions using modern technologies designed for scalability and performance.",

    ...PROCESS_THUMB_TECH.Develop,

  },

  {

    subtitle: "Optimize & Scale",

    title: "Test, deploy & evolve",

    body: "Through testing, deployment, performance monitoring, and continuous improvements, we ensure your digital solutions evolve alongside your business goals.",

    ...PROCESS_THUMB_TECH["Optimize & Scale"],

  },

];



export default function TechSolutionsView() {

  return (

    <>

      <KineticSolutionsHero

        eyebrow="Build what scales"

        line1="Systems keep businesses running."

        line2="Technology helps them scale. "

        subtext="AI-powered tools, automation systems, and custom digital experiences designed to help modern businesses scale efficiently."

        primaryCta={{ href: "#tech-build", label: "Start a Project" }}
        primaryLeadForm={{
          sourcePage: "/tech-solutions",
          title: "Let's talk",
          subtitle:
            "Tell us about your project - we'll respond within one business day.",
        }}
        secondaryCta={{ href: "/", label: "See Our Work" }}

        morphWords={["Build", "Ship", "Scale"]}

        variant="tech"

        media={TECH_HERO_MEDIA}

      />



      <TechShowcaseReplicaSection />



      <TechServicesStickyFeed

        eyebrow="Services"

        heading="Solutions We Deliver"

        intro="Custom-built technology solutions tailored to your business needs, user expectations, and long-term growth objectives."

        items={TECH_SERVICES}

      />



      <HorizontalProcessRail

        eyebrow="Process"

        heading="From Concept to Scalable Solutions"

        subheading="A strategic development process designed to create seamless digital experiences, scalable technology, and measurable business impact."

        steps={TECH_PROCESS}

        pinHeightClassName="min-h-[calc(100dvh-6.5rem)]"

        cardClassName="h-[min(68dvh,600px)] md:h-[min(72dvh,660px)]"

        immersiveCardStyle

      />



      <SolutionsClosingCta

        id="tech-build"

        headline="Your idea deserves execution."

        cta={{
          label: "Start Building",
          leadForm: {
            sourcePage: "/tech-solutions",
            title: "Let's talk",
            subtitle:
              "Tell us about your project - we'll respond within one business day.",
          },
        }}

      />

    </>

  );

}


