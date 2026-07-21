import type { Metadata } from "next";
import IndustriesHubView from "@/components/industries/IndustriesHubView";

const title = "Industries We Serve - Hospitality, Consumer, Wellness | BHeard";
const description =
  "Brand, marketing and technology solutions for hospitality, consumer & FMCG, wellness, travel and education brands across India, the US, and Southeast Asia.";

export const metadata: Metadata = {
  title,
  description,
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

export default function IndustriesPage() {
  return <IndustriesHubView />;
}
