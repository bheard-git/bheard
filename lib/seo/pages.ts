/** Locked title + description per SEO Strategy & Content V4 appendix (canonical paths = live routes). */
export type PageSeoEntry = {
  pathname: string;
  title: string;
  description: string;
};

export const PAGE_SEO = {
  home: {
    pathname: "/",
    title: "Integrated Branding & Tech Agency in Mumbai | BHeard",
    description:
      "BHeard is Mumbai's integrated branding and technology agency for hospitality, lifestyle and consumer brands — brand strategy, technology and AI under one roof.",
  },
  brandSolutions: {
    pathname: "/brand-solutions",
    title: "Branding & Digital Marketing for Lifestyle & Hospitality Brands | BHeard",
    description:
      "Social media, content, design, influencer and campaign strategy for consumer, lifestyle, wellness and hospitality brands. Trusted by Accor, HUL, ITC, Radisson.",
  },
  techSolutions: {
    pathname: "/tech-solutions",
    title: "Custom Software, AI & Mobile App Development | BHeard",
    description:
      "Custom software, mobile apps, AI solutions, UI/UX and e-commerce platforms for growing businesses — built by BHeard's tech team in Mumbai.",
  },
  aiGuestAgents: {
    pathname: "/services/tech-solutions/ai-chatbots-agents",
    title: "AI Guest Agents for Hotels & Resorts | BHeard",
    description:
      "AI Guest Agents that answer enquiries, recommend rooms, qualify leads and upsell 24/7 across website, WhatsApp, Instagram and more. Trusted by Radisson.",
  },
  industries: {
    pathname: "/industries",
    title: "Industries We Serve — Hospitality, Consumer, Wellness | BHeard",
    description:
      "Brand, marketing and technology solutions for hospitality, consumer & FMCG, wellness, travel and education brands across India, the US, and Southeast Asia.",
  },
  work: {
    pathname: "/work",
    title: "Our Work — Case Studies | BHeard",
    description:
      "Explore how BHeard combines branding, marketing and technology to drive growth — case studies across hospitality, tourism, wellness, e-commerce and education.",
  },
  about: {
    pathname: "/about",
    title: "About BHeard — Brand & Technology Studio, Mumbai (Since 2014)",
    description:
      "Founded in 2014, BHeard is a Mumbai brand and technology studio led by Neha Gupta, partnering with Accor, Radisson Blu, HUL, ITC, BNP Paribas and Goa Tourism.",
  },
  careers: {
    pathname: "/careers",
    title: "Careers at BHeard — Marketing, Design & Tech Jobs in Mumbai",
    description:
      "Join BHeard's team of strategists, designers, and developers in Mumbai. Careers in brand strategy, content, technology, and growth marketing.",
  },
  contact: {
    pathname: "/contact",
    title: "Contact BHeard — Branding & Tech Agency in Lower Parel, Mumbai",
    description:
      "Book a call with BHeard. Head office in Lower Parel, Mumbai, with a branch office in Delhi. Write to hello@bheard.in or call +91 9326602832.",
  },
  privacyPolicy: {
    pathname: "/privacy-policy",
    title: "Privacy Policy | BHeard",
    description: "How BHeard collects, uses and protects your personal information on bheard.in.",
  },
  blog: {
    pathname: "/blog",
    title: "Blog — Brand, Marketing & Technology Insights | BHeard",
    description:
      "Perspectives on brand strategy, hospitality marketing, product engineering, AI, and digital growth from BHeard's team in Mumbai.",
  },
  sitemap: {
    pathname: "/sitemap",
    title: "Sitemap | BHeard",
    description: "Browse all pages on bheard.in — services, industries, case studies, careers, and more.",
  },
} as const satisfies Record<string, PageSeoEntry>;

export const CASE_STUDY_SEO: Record<string, { title: string; description: string }> = {
  "radisson-blu-goa": {
    title: "Radisson Blu Goa Case Study — Hospitality Marketing | BHeard",
    description:
      "How BHeard built a digital growth engine for Radisson Blu Goa: 204% engagement growth, 2X lead growth and AI-led guest engagement through Guest AI.",
  },
  "zumba-wear": {
    title: "Zumba Wear Case Study — Lifestyle E-Commerce | BHeard",
    description:
      "How BHeard grew Zumba Wear India from 1,500 to 23.3K Instagram followers and drove 274+ purchases through Meta performance marketing.",
  },
  "curly-tales-app": {
    title: "Curly Tales App Case Study — App Development | BHeard",
    description:
      "How BHeard helped Curly Tales move beyond content with a mobile-first discovery app for food, travel and lifestyle experiences.",
  },
  "goa-tourism": {
    title: "Goa Tourism Case Study — Destination Marketing | BHeard",
    description:
      "How BHeard helped reframe Goa as a year-round destination: 1.2M+ reach, 183K+ campaign views and a 12.5% average engagement rate.",
  },
  "dr-mickey-mehta": {
    title: "Dr. Mickey Mehta Case Study — Wellness Marketing | BHeard",
    description:
      "How BHeard built one of India's earliest wellness personal brands online — including the “Fittest at 55” campaign with 4M+ impressions.",
  },
  "rodha-edtech": {
    title: "Rodha Case Study — EdTech Platform Development | BHeard",
    description:
      "How BHeard built a scalable academic support platform for Rodha, supporting 10,000+ concurrent users and 500+ simultaneous database connections.",
  },
};
