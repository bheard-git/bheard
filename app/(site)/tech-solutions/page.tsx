import type { Metadata } from "next";
import TechSolutionsView from "@/components/tech-solutions/TechSolutionsView";
import JsonLd from "@/components/seo/JsonLd";
import type { FaqAccordionItem } from "@/components/solutions/TwoColumnFaqSection";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.techSolutions);

const TECH_FAQS: FaqAccordionItem[] = [
  {
    question: "Why choose BHeard for software development and digital solutions?",
    answer:
      "BHeard combines technology, user experience design, and business strategy under one team. From custom software and mobile app development to AI solutions and digital transformation initiatives, we build technology products designed to solve real business challenges and create measurable business impact.",
  },
  {
    question: "What technology services does BHeard provide?",
    answer:
      "BHeard provides custom software development, mobile app development, web application development, UI/UX design, e-commerce development, AI-powered solutions, business automation, customer portals, and digital transformation services. We help businesses build scalable technology products that improve efficiency, customer experience, and long-term growth.",
  },
  {
    question: "Do you develop custom software for businesses?",
    answer:
      "Yes. We design and develop custom software solutions tailored to specific business requirements, workflows, and operational goals. Our software development services help businesses streamline processes, improve productivity, and create technology platforms built for future growth.",
  },
  {
    question: "Do you provide AI development and business automation solutions?",
    answer:
      "Yes. We help businesses implement AI-powered solutions, intelligent automation, chatbots, AI agents, and workflow automation systems. These solutions help reduce manual effort, improve decision-making, enhance customer experiences, and increase operational efficiency.",
  },
  {
    question: "Can BHeard build mobile apps for iOS and Android?",
    answer:
      "Yes. We develop custom mobile applications for iOS, Android, and cross-platform environments. From customer-facing apps and booking platforms to enterprise mobility solutions, we create mobile experiences designed for performance, usability, and scalability.",
  },
];

export default function TechSolutionsPage() {
  const schema = [
    buildServiceSchema({
      name: "Tech Solutions",
      description: PAGE_SEO.techSolutions.description,
      pathname: PAGE_SEO.techSolutions.pathname,
      serviceType: "Custom Software & Mobile App Development",
    }),
    buildFaqSchema(TECH_FAQS),
    buildBreadcrumbSchema(BREADCRUMBS.techSolutions),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <TechSolutionsView faqItems={TECH_FAQS} />
    </>
  );
}
