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
import JsonLd from "@/components/seo/JsonLd";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildMarketingAgencySchema } from "@/lib/seo/schema";

export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.home);

export const viewport: Viewport = {
  themeColor: "#1A1714",
};

const homeSchema = buildMarketingAgencySchema();

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema} />
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
