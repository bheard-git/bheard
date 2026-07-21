import type { Metadata, Viewport } from "next";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HomeTestimonials from "@/components/HomeTestimonials";
import Navbar from "@/components/Navbar";
import ScrollRevealEffects from "@/components/ScrollRevealEffects";
import ServicesSection from "@/components/ServicesSection";
import ServicesVariantOne from "@/components/ServicesVariantOne";
import TickerStrip from "@/components/TickerStrip";
import WorkSection from "@/components/WorkSection";

export const metadata: Metadata = {
  title: "Integrated Branding & Tech Agency in Mumbai | BHeard",
  description:
    "BHeard is Mumbai's integrated branding and technology agency for hospitality, lifestyle and consumer brands - brand strategy, technology and AI under one roof.",
  alternates: {
    canonical: "https://bheard.in/",
    languages: {
      "en-IN": "https://bheard.in/",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Integrated Branding & Tech Agency in Mumbai | BHeard",
    description:
      "BHeard is Mumbai's integrated branding and technology agency for hospitality, lifestyle and consumer brands - brand strategy, technology and AI under one roof.",
    type: "website",
    url: "https://bheard.in/",
    images: [
      {
        url: "https://bheard.in/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Hero dark background — BHEARD logotype in white + tagline CAPTURING VOICE IN THE NOISE below it.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrated Branding & Tech Agency in Mumbai | BHeard",
    description:
      "BHeard is Mumbai's integrated branding and technology agency for hospitality, lifestyle and consumer brands - brand strategy, technology and AI under one roof.",
    images: ["https://bheard.in/og-home.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1A1714",
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": ["MarketingAgency", "ProfessionalService"],
  name: "BHEARD",
  alternateName: ["B Heard", "BHeard Agency", "BHeard Consulting"],
  url: "https://bheard.in",
  logo: "https://bheard.in/logo.png",
  description:
    "Integrated branding and technology agency in Mumbai. Brand strategy, social media, campaigns, web development, and mobile app development — one team, one brief, one outcome.",
  foundingDate: "2013",
  founder: {
    "@type": "Person",
    name: "Neha Gupta",
    jobTitle: "Founder & CEO",
    url: "https://bheard.in/about",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City", name: "Mumbai" },
  ],
  knowsAbout: [
    "Brand Strategy",
    "Brand Identity Design",
    "Social Media Marketing",
    "Campaign Planning",
    "Content Marketing",
    "Video Production",
    "Graphic Design",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "E-Commerce Development",
    "Chatbot Development",
    "AI Automation",
    "Hospitality Marketing",
    "Luxury Brand Marketing",
  ],
  sameAs: [
    "https://www.instagram.com/bheard.in",
    "https://www.linkedin.com/company/bheard",
  ],
} as const;

/** Read `SPLINE_HERO_SCENE` / `NEXT_PUBLIC_SPLINE_HERO_SCENE` on each request (fresh URL in dev after restart). */
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <Navbar />
      <main>
        <TickerStrip />
        <HeroSection />
        <ServicesSection />
        <ClientLogos />
        <ServicesVariantOne />
        <WorkSection />
        <AboutSection />
        <HomeTestimonials />
        <CTASection />
        <ScrollRevealEffects />
      </main>
      <Footer />
    </>
  );
}
