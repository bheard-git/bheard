"use client";

import { useEffect, useState } from "react";

export type TechServiceVisualId = "web" | "mobile" | "ux" | "commerce" | "ai";

type TechServiceScrollVisualProps = {
  activeId: TechServiceVisualId;
};

type StackTool = {
  id: string;
  name: string;
  logoSrc: string;
  logoAlt?: string;
};

/** Color brand icons from public/assets/tech solutions/technologies */
const TECH = "/assets/tech solutions/technologies";

const PANELS: Record<
  TechServiceVisualId,
  {
    label: string;
    headline: string;
    detail: string;
    stackLabel: string;
    stackDetail: string;
    tools: StackTool[];
  }
> = {
  web: {
    label: "Custom Web Development",
    headline: "Built for impact",
    detail:
      "Responsive, scalable web solutions that engage users and support long-term digital success.",
    stackLabel: "Core stack",
    stackDetail: "Modern frontend and backend technologies selected for speed, scale, and maintainability.",
    tools: [
      { id: "nextjs", name: "Next.js", logoSrc: `${TECH}/next-dot-js-svgrepo-com.svg` },
      { id: "react", name: "React", logoSrc: `${TECH}/react-svgrepo-com.svg` },
      { id: "typescript", name: "TypeScript", logoSrc: `${TECH}/typescript-svgrepo-com.svg` },
      { id: "nodejs", name: "Node.js", logoSrc: `${TECH}/node-js-svgrepo-com.svg` },
      { id: "postgresql", name: "PostgreSQL", logoSrc: `${TECH}/PostgresSQL.svg` },
    ],
  },
  mobile: {
    label: "Custom Mobile App Development",
    headline: "iOS & Android",
    detail:
      "High-performance mobile apps with seamless experiences that drive engagement across devices.",
    stackLabel: "Mobile ecosystem",
    stackDetail: "Cross-platform and native-first tools that deliver performant, production-ready apps.",
    tools: [
      { id: "flutter", name: "Flutter", logoSrc: `${TECH}/flutter-svgrepo-com (1).svg` },
      { id: "react-native", name: "React Native", logoSrc: `${TECH}/react-svgrepo-com.svg`, logoAlt: "React Native" },
      { id: "ios", name: "iOS", logoSrc: `${TECH}/apple-ios-svgrepo-com.svg` },
      { id: "android", name: "Android", logoSrc: `${TECH}/android-color-svgrepo-com.svg` },
      { id: "apple", name: "Apple", logoSrc: `${TECH}/apple-svgrepo-com.svg` },
    ],
  },
  ux: {
    label: "UI/UX Design",
    headline: "Intuitive experiences",
    detail:
      "Design and user flows that help businesses engage customers and achieve better outcomes.",
    stackLabel: "Design toolkit",
    stackDetail: "Collaborative design and prototyping tools used to validate experience decisions early.",
    tools: [
      { id: "html5", name: "HTML5", logoSrc: `${TECH}/html-5-svgrepo-com.svg` },
      { id: "css3", name: "CSS3", logoSrc: `${TECH}/css3-svgrepo-com.svg` },
      { id: "tailwind", name: "Tailwind", logoSrc: `${TECH}/tailwind-svgrepo-com.svg` },
      { id: "javascript", name: "JavaScript", logoSrc: `${TECH}/javascript-svgrepo-com.svg` },
      { id: "prototyping", name: "Prototyping", logoSrc: `${TECH}/features/browser-code-svgrepo-com.svg` },
    ],
  },
  commerce: {
    label: "E-Commerce Solutions",
    headline: "Future-ready commerce",
    detail:
      "Platforms optimized for customer experience and accelerated digital commerce growth.",
    stackLabel: "Commerce stack",
    stackDetail: "Composable commerce tooling that improves checkout conversion and operational scale.",
    tools: [
      { id: "shopify", name: "Shopify", logoSrc: `${TECH}/shopify-color-svgrepo-com.svg` },
      { id: "analytics", name: "Google Analytics", logoSrc: `${TECH}/google_analytics-icon.svg` },
      { id: "mysql", name: "MySQL", logoSrc: `${TECH}/MySQL.svg` },
      { id: "meta", name: "Meta Ads", logoSrc: `${TECH}/meta-icon.svg` },
      { id: "whatsapp", name: "WhatsApp Business", logoSrc: `${TECH}/whatsapp-business-icon.svg` },
    ],
  },
  ai: {
    label: "Chatbots & AI Agents",
    headline: "Intelligent automation",
    detail:
      "AI-powered chatbots and agents that improve response times, generate leads, and enhance experiences.",
    stackLabel: "AI enablement",
    stackDetail: "Production-grade AI integrations for conversational UX, automation, and data-backed workflows.",
    tools: [
      { id: "docker", name: "Docker", logoSrc: `${TECH}/Docker.svg` },
      { id: "mongodb", name: "MongoDB", logoSrc: `${TECH}/MongoDB.svg` },
      { id: "aws", name: "AWS", logoSrc: `${TECH}/AWS.svg` },
      { id: "gcp", name: "Google Cloud", logoSrc: `${TECH}/Google Cloud.svg` },
      { id: "automation", name: "Automation", logoSrc: `${TECH}/features/rocket-sharp-svgrepo-com.svg` },
    ],
  },
};

export default function TechServiceScrollVisual({ activeId }: TechServiceScrollVisualProps) {
  const [displayId, setDisplayId] = useState(activeId);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (activeId === displayId) return;
    setVisible(false);
    const t = window.setTimeout(() => {
      setDisplayId(activeId);
      setVisible(true);
    }, 180);
    return () => window.clearTimeout(t);
  }, [activeId, displayId]);

  const panel = PANELS[displayId];

  return (
    <div className={`transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}>
      <p className="font-label text-[10px] xl:text-sm uppercase tracking-[0.2em] text-primary">{panel.label}</p>

      <div className="mt-4">
        <p className="font-label text-[10px] uppercase tracking-[0.18em] text-on-surface-variant">{panel.stackLabel}</p>
        <div className="mt-3 flex flex-wrap gap-x-7 gap-y-5">
          {panel.tools.map((tool) => (
            <div key={tool.id} className="inline-flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tool.logoSrc}
                alt={tool.logoAlt ?? tool.name}
                className="h-10 w-10 object-contain"
                loading="lazy"
              />
              <span className="font-body text-sm text-on-background">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 space-y-2.5">
        <h3 className="font-headline text-lg font-black uppercase tracking-tight text-on-background md:text-xl">
          {panel.headline}
        </h3>
        <p className="font-body text-sm leading-relaxed text-on-surface-variant">{panel.detail}</p>
        <p className="font-body text-xs leading-relaxed text-on-surface-variant">{panel.stackDetail}</p>
      </div>
    </div>
  );
}
