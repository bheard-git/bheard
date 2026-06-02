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
      { id: "nextjs", name: "Next.js", logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/nextdotjs.svg" },
      { id: "react", name: "React", logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/react.svg" },
      {
        id: "typescript",
        name: "TypeScript",
        logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/typescript.svg",
      },
      { id: "nodejs", name: "Node.js", logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/nodedotjs.svg" },
      {
        id: "postgresql",
        name: "PostgreSQL",
        logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/postgresql.svg",
      },
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
      { id: "flutter", name: "Flutter", logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/flutter.svg" },
      {
        id: "react-native",
        name: "React Native",
        logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/react.svg",
        logoAlt: "React Native",
      },
      { id: "swift", name: "Swift", logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/swift.svg" },
      { id: "kotlin", name: "Kotlin", logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/kotlin.svg" },
      {
        id: "firebase",
        name: "Firebase",
        logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/firebase.svg",
      },
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
      { id: "figma", name: "Figma", logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/figma.svg" },
      {
        id: "adobexd",
        name: "Adobe XD",
        logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/adobexd.svg",
      },
      {
        id: "adobeillustrator",
        name: "Illustrator",
        logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/adobeillustrator.svg",
      },
      { id: "miro", name: "Miro", logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/miro.svg" },
      {
        id: "hotjar",
        name: "Hotjar",
        logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/hotjar.svg",
      },
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
      { id: "shopify", name: "Shopify", logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/shopify.svg" },
      { id: "stripe", name: "Stripe", logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/stripe.svg" },
      {
        id: "woocommerce",
        name: "WooCommerce",
        logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/woocommerce.svg",
      },
      {
        id: "googleanalytics",
        name: "Google Analytics",
        logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/googleanalytics.svg",
      },
      {
        id: "klaviyo",
        name: "Klaviyo",
        logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/klaviyo.svg",
      },
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
      { id: "openai", name: "OpenAI", logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/openai.svg" },
      {
        id: "langchain",
        name: "LangChain",
        logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/langchain.svg",
      },
      { id: "python", name: "Python", logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/python.svg" },
      { id: "pytorch", name: "PyTorch", logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/pytorch.svg" },
      { id: "docker", name: "Docker", logoSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/docker.svg" },
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
      <p className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">{panel.label}</p>

      <div className="mt-4">
        <p className="font-label text-[10px] uppercase tracking-[0.18em] text-on-surface-variant">{panel.stackLabel}</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-3">
          {panel.tools.map((tool) => (
            <div key={tool.id} className="inline-flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tool.logoSrc} alt={tool.logoAlt ?? tool.name} className="h-6 w-6 object-contain" loading="lazy" />
              <span className="font-body text-sm text-on-background">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 space-y-2.5">
        <h3 className="font-headline text-lg font-black uppercase tracking-tight text-on-background md:text-xl">{panel.headline}</h3>
        <p className="font-body text-sm leading-relaxed text-on-surface-variant">{panel.detail}</p>
        <p className="font-body text-xs leading-relaxed text-on-surface-variant">{panel.stackDetail}</p>
      </div>
    </div>
  );
}
