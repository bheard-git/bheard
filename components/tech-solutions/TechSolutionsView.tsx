"use client";

import TechSolutionsHero from "@/components/tech-solutions/TechSolutionsHero";
import HorizontalProcessRail, { type ProcessRailStep } from "@/components/solutions/HorizontalProcessRail";
import SolutionsClosingCta from "@/components/solutions/SolutionsClosingCta";
import TwoColumnFaqSection, { type FaqAccordionItem } from "@/components/solutions/TwoColumnFaqSection";
import TechShowcaseReplicaSection from "@/components/tech-solutions/TechShowcaseReplicaSection";
import RelatedCaseStudiesSection from "@/components/work/RelatedCaseStudiesSection";
import { TECH_SOLUTIONS_CASE_STUDY_CARDS } from "@/lib/solutions/solutionsCaseStudies";
import { solutionsBandPad } from "@/lib/solutions/solutionsSectionTheme";
import { TECH_SERVICE_IMAGES } from "@/lib/solutions/visualAssets";

const TECH_SERVICE_STEPS: ProcessRailStep[] = [
  {
    subtitle: "01",
    title: "Custom Software Development",
    body: "We design and develop custom software tailored to your business processes, helping improve operational efficiency, automate workflows, integrate systems, and create scalable technology built around your long-term business goals.",
    ...TECH_SERVICE_IMAGES.custom,
  },
  {
    subtitle: "02",
    title: "Mobile App Development",
    body: "We build custom iOS and Android applications that deliver seamless user experiences, strengthen customer engagement, simplify business operations, and create digital products designed for long-term growth and scalability.",
    ...TECH_SERVICE_IMAGES.mobile,
  },
  {
    subtitle: "03",
    title: "AI Solutions & Business Automation",
    body: "We develop AI-powered solutions, intelligent chatbots, virtual assistants, and automation systems that reduce manual effort, improve productivity, enhance customer interactions, and help businesses make faster, smarter decisions.",
    ...TECH_SERVICE_IMAGES.ai,
  },
  {
    subtitle: "04",
    title: "UI/UX Design",
    body: "Our UI/UX process combines user research, experience strategy, usability testing, and interface design to create intuitive digital products that improve engagement, increase conversions, and deliver exceptional customer experiences.",
    ...TECH_SERVICE_IMAGES.ux,
  },
  {
    subtitle: "05",
    title: "E-Commerce Development",
    body: "We design and develop scalable e-commerce platforms that simplify online selling, improve customer journeys, streamline operations, increase conversions, and create seamless digital shopping experiences across every touchpoint.",
    ...TECH_SERVICE_IMAGES.commerce,
  },
  {
    subtitle: "06",
    title: "Custom Web Development",
    body: "We build high-performance websites, customer portals, booking platforms, and web applications that combine speed, security, scalability, and intuitive user experiences to support business growth and digital transformation.",
    ...TECH_SERVICE_IMAGES.web,
  },
];

type TechSolutionsViewProps = {
  faqItems: FaqAccordionItem[];
};

export default function TechSolutionsView({ faqItems }: TechSolutionsViewProps) {
  return (
    <>
      <TechSolutionsHero />

      <TechShowcaseReplicaSection sectionClassName={solutionsBandPad} />

      <HorizontalProcessRail
        eyebrow="Services"
        heading="Solutions We Deliver"
        subheading="Custom software, AI, and digital solutions designed to solve complex business challenges, streamline operations, improve customer experiences, and help businesses scale with greater efficiency, flexibility, and long-term confidence."
        steps={TECH_SERVICE_STEPS}
        pinHeightClassName="min-h-[calc(100dvh-6.5rem)]"
        cardClassName="h-[min(68dvh,600px)] md:h-[min(72dvh,660px)]"
        immersiveCardStyle
        sectionClassName={solutionsBandPad}
      />

      <RelatedCaseStudiesSection
        cards={TECH_SOLUTIONS_CASE_STUDY_CARDS}
        heading="Case Studies"
        className={solutionsBandPad}
      />

      <TwoColumnFaqSection
        headingLine1="Frequently Asked"
        headingLine2="Questions"
        items={faqItems}
        splitAt={3}
        className={`bg-[#fbf8f6] ${solutionsBandPad}`}
      />

      <SolutionsClosingCta
        id="tech-build"
        headline="Let's Build Technology That Moves Your Business Forward."
        sectionClassName={solutionsBandPad}
        cta={{
          label: "Start Building",
          leadForm: {
            sourcePage: "/tech-solutions",
            title: "Let's talk",
            subtitle: "Tell us about your project - we'll respond within one business day.",
          },
        }}
      />
    </>
  );
}
