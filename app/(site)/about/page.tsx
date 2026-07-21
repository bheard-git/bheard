import type { Metadata } from "next";
import AboutPageView from "@/components/about/AboutPageView";

const title = "About BHeard - Brand & Technology Studio, Mumbai";
const description =
  "Founded in 2014, BHeard is a Mumbai brand and technology studio led by Neha Gupta, partnering with Accor, Radisson Blu, HUL, ITC, BNP Paribas and Goa Tourism.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "brand and technology studio Mumbai",
    "BHeard about",
    "Neha Gupta",
    "digital agency Mumbai",
    "hospitality marketing",
  ],
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bheard.in/about/#webpage",
      url: "https://bheard.in/about",
      name: title,
      description,
      isPartOf: { "@type": "WebSite", name: "BHeard", url: "https://bheard.in/" },
      about: {
        "@type": "Organization",
        name: "BHeard",
        description:
          "Brand and technology studio in Mumbai specializing in branding, marketing, and digital products.",
        foundingDate: "2014",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressCountry: "IN",
        },
        founder: {
          "@type": "Person",
          name: "Neha Gupta",
          jobTitle: "Founder",
          sameAs: ["https://www.linkedin.com/in/nehagupta"],
          alumniOf: { "@type": "Organization", name: "Accenture" },
        },
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutPageView />
    </>
  );
}
