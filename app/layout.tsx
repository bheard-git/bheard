import type { Metadata } from "next";
import { Suspense } from "react";
import { Space_Grotesk, Manrope } from "next/font/google";
import Analytics from "@/components/analytics/Analytics";
import MotionRoot from "@/components/motion/MotionRoot";
import JsonLd from "@/components/seo/JsonLd";
import { LeadFormProvider } from "@/components/site/LeadFormProvider";
import { RecaptchaProvider } from "@/components/site/RecaptchaProvider";
import TopRouteLoader from "@/components/site/TopRouteLoader";
import { OG_IMAGE_PATH } from "@/lib/seo/constants";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/seo/schema";
import { getSiteUrl, isIndexableDeployment } from "@/lib/seo/site";
import "@/app/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: PAGE_SEO.home.title,
    template: "%s",
  },
  description: PAGE_SEO.home.description,
  robots: isIndexableDeployment()
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "BHeard",
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "BHeard — Integrated branding and technology agency in Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    images: [OG_IMAGE_PATH],
  },
};

const rootSchemas = [buildOrganizationSchema(), buildWebSiteSchema()];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body className="bg-surface text-on-surface font-body">
        <JsonLd data={rootSchemas} />
        <Analytics />
        <MotionRoot>
          <RecaptchaProvider>
            <LeadFormProvider>{children}</LeadFormProvider>
          </RecaptchaProvider>
        </MotionRoot>
        <Suspense fallback={null}>
          <TopRouteLoader />
        </Suspense>
      </body>
    </html>
  );
}
