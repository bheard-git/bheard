import { publicAsset } from "@/lib/utils/publicAsset";

export const AI_GUEST_AGENTS_PAGE_PATH = "/services/tech-solutions/ai-chatbots-agents";

export const aiGuestAgentsContent = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Tech Solutions", href: "/tech-solutions" },
    { label: "AI Guest Agents" },
  ],
  hero: {
    eyebrow: "AI Guest Agents for Hotels & Resorts",
    headingLine1: "AI Guest Agents",
    headingLine2: "That Never",
    headingLine3: "Miss a Guest",
    trustedBy: {
      label: "Trusted by:",
      logoSrc: "/assets/client-logos/radisson-blu.webp",
      logoAlt: "Radisson Blu",
      href: "/work/radisson-blu-goa",
    },
    ctaLabel: "Book a Demo",
    imageSrc: publicAsset("assets", "guest ai", "hero.png"),
    imageAlt: "AI Guest Agent at a luxury hotel reception desk with digital concierge interfaces",
  },
  intro: {
    subhead:
      "Every enquiry deserves an immediate response. Every conversation is a chance to increase revenue.",
    body: [
      "Hotels that respond first are more likely to secure the booking. Those that don't often lose the guest before the conversation has even started.",
      "BHeard has built AI Guest Agents that answer questions, qualify leads, recommend rooms, upsell experiences, and support hotel teams—24 hours a day.",
    ],
    chatInterfaceSrc: publicAsset("assets", "guest ai", "Ai agent chat interface.png"),
    chatInterfaceAlt:
      "Guest AI mobile chat interface showing room booking, dining recommendations, and spa appointments",
  },
  channels: {
    label: "Works across:",
    items: [
      { id: "website", label: "Website Chat", icon: "message-square" },
      { id: "whatsapp", label: "WhatsApp", icon: "whatsapp" },
      { id: "instagram", label: "Instagram", icon: "instagram" },
      { id: "facebook", label: "Facebook Messenger", icon: "facebook" },
      { id: "voice", label: "Voice Assistants", icon: "mic" },
      { id: "future", label: "Future Integrations", icon: "sparkles" },
    ],
  },
  experience: {
    left: {
      eyebrow: "Great Guest Experiences",
      heading: "Start Before Check-in",
      paragraphs: [
        "The guest journey begins with the very first conversation.",
        "Whether a guest reaches out through your website, WhatsApp, Instagram, Facebook, or Google, they expect immediate, accurate, and personalized responses. Delayed replies create friction, reduce confidence, and often send potential guests elsewhere.",
        "Our AI Guest Agents ensure every enquiry receives instant attention, every interaction feels consistent, and every opportunity is captured.",
      ],
    },
    right: {
      heading: "Built for Hospitality. Designed Around Every Guest Conversation.",
      paragraph:
        "Unlike conventional chatbots, our AI Guest Agents are designed specifically for hospitality.",
      paragraphLink: {
        text: "hospitality",
        href: "/industries#hospitality-luxury",
      },
      paragraphAfter:
        "They understand room categories, packages, dining experiences, spa services, seasonal offers, FAQs, and guest intent—helping your team deliver faster, more consistent service while reducing manual effort.",
    },
  },
  features: {
    headingLine1: "What Your",
    headingLine2: "AI Guest Agent Does",
    items: [
      {
        icon: "zap",
        title: "Responds Instantly",
        description: "Answers booking and availability enquiries the moment a guest reaches out.",
      },
      {
        icon: "bed",
        title: "Recommends Rooms",
        description: "Suggests rooms, packages, and seasonal offers tailored to guest preferences.",
      },
      {
        icon: "utensils",
        title: "Promotes Experiences",
        description: "Highlights dining, spa, and hotel experiences throughout the guest journey.",
      },
      {
        icon: "user-check",
        title: "Captures Leads",
        description: "Qualifies and captures leads automatically without manual follow-up.",
      },
      {
        icon: "trending-up",
        title: "Upsells Experiences",
        description: "Promotes upgrades and add-ons at the right moment in every conversation.",
      },
      {
        icon: "help-circle",
        title: "Handles FAQs",
        description: "Resolves common questions instantly so your team can focus on complex requests.",
      },
      {
        icon: "headphones",
        title: "Smart Handoff",
        description:
          "Escalates complex requests to your team seamlessly when human expertise is needed.",
      },
    ],
    highlight: {
      icon: "clock",
      title: "24/7 Guest Support",
      description:
        "Supports guests around the clock across every channel — reducing workload, improving response times, and creating more direct booking opportunities. Transfers complex conversations to your team when needed.",
    },
  },
  howItWorks: {
    heading: "How It Works",
    steps: [
      {
        number: "01",
        icon: "search",
        title: "Discover",
        description:
          "We understand your property, guest journey, services, operational workflows, and communication requirements.",
      },
      {
        number: "02",
        icon: "settings",
        title: "Configure",
        description:
          "Your AI Guest Agent is trained using your property's information, brand voice, room inventory, offers, and guest policies.",
      },
      {
        number: "03",
        icon: "plug",
        title: "Integrate",
        description:
          "We connect your AI Guest Agent with your website, WhatsApp, booking engine, CRM, and other business systems.",
      },
      {
        number: "04",
        icon: "rocket",
        title: "Launch",
        description:
          "Your AI Guest Agent begins responding to enquiries, supporting guests, and assisting your team across every connected channel.",
      },
      {
        number: "05",
        icon: "line-chart",
        title: "Optimise",
        description:
          "As guest behaviour evolves, your AI Guest Agent continues learning, improving responses, and delivering smarter guest experiences over time.",
      },
    ],
  },
  industries: {
    imageSrc: publicAsset("assets", "guest ai", "hospitality.png"),
    imageAlt: "AI Guest Agent holographic interface at a luxury hotel reception desk",
    heading: "Designed for Hotels. Adaptable Across Hospitality.",
    paragraph:
      "Whether you manage a boutique hotel, luxury resort, wellness retreat, serviced apartment, or multi-property hotel group in India, the US, or Southeast Asia, our AI Guest Agents adapt to your guest journey, operational workflows, and brand experience.",
    items: [
      { icon: "building", label: "Boutique Hotels" },
      { icon: "palmtree", label: "Luxury Resorts" },
      { icon: "leaf", label: "Wellness Retreats" },
      { icon: "home", label: "Serviced Apartments" },
      { icon: "layers", label: "Hotel Groups" },
    ],
  },
  faq: {
    headingLine1: "Frequently Asked",
    headingLine2: "Questions",
    items: [
      {
        question: "What are AI Guest Agents?",
        answer:
          "AI Guest Agents are intelligent virtual assistants that manage guest communication across your website, WhatsApp, social media, and other digital channels. They answer enquiries, recommend rooms, capture leads, and support hotel teams 24/7.",
      },
      {
        question: "Can AI Guest Agents integrate with our existing hotel systems?",
        answer:
          "Yes. Our AI Guest Agents integrate with booking engines, websites, CRM platforms, customer portals, and hospitality technology to create a connected guest experience.",
      },
      {
        question: "Can AI Guest Agents answer booking enquiries and recommend rooms?",
        answer:
          "Yes. They provide room availability, recommend packages, explain hotel facilities, answer frequently asked questions, and guide guests through the booking journey.",
      },
      {
        question: "Can AI Guest Agents be customized for our property?",
        answer:
          "Absolutely. Every AI Guest Agent is trained using your property's services, brand guidelines, operational processes, FAQs, and communication style.",
      },
      {
        question: "Are AI Guest Agents suitable for boutique hotels as well as hotel groups?",
        answer:
          "Yes. Whether you manage a boutique hotel, luxury resort, wellness retreat, or multi-property hospitality group, AI Guest Agents scale to your operational requirements and guest communication needs.",
      },
      {
        question: "How long does it take to launch an AI Guest Agent?",
        answer:
          "Most properties move from discovery to launch in a few weeks, depending on integrations, training data, and channel setup. We work with your team through discovery, configuration, integration, and launch to get you live as efficiently as possible.",
      },
    ],
  },
  closingCta: {
    heading: "Great Guest Experiences Begin With the First Conversation",
    paragraph:
      "Every enquiry is an opportunity to build confidence, answer questions, and secure a booking. AI Guest Agents help your team respond faster, communicate consistently, and turn more guest conversations into confirmed reservations.",
    ctaLabel: "Book a Demo",
  },
} as const;

export type AiGuestAgentsFaqItem = (typeof aiGuestAgentsContent.faq.items)[number];
