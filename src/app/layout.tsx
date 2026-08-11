import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { PromotionalBanner } from "@/components/layout/PromotionalBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCounsellingCta } from "@/components/layout/FloatingCounsellingCta";
import { CounsellingModalProvider } from "@/components/layout/CounsellingModalProvider";
import { organizationJsonLd } from "@/lib/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rodha — Expert Mentorship. Proven Strategies. Real Results.",
  description:
    "India's trusted platform for MBA (CAT + GDPI), Integrated Programs, Law, Banking & Government Exams, and Skill House. Expert mentorship, proven strategies, and real results.",
  keywords: [
    "MBA preparation",
    "CAT preparation",
    "GDPI training",
    "IPMAT coaching",
    "CLAT preparation",
    "Banking exam coaching",
    "SSC preparation",
    "Skill House",
    "competitive exam coaching",
  ],
  openGraph: {
    title: "Rodha — Expert Mentorship. Proven Strategies. Real Results.",
    description:
      "India's trusted platform for MBA, Integrated Programs, Law, Banking & Government, and Skill House.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodha — Expert Mentorship. Proven Strategies. Real Results.",
    description:
      "India's trusted platform for MBA, Integrated Programs, Law, Banking & Government, and Skill House.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} dark`}>
      <body className="min-h-screen bg-bg-primary text-text-primary font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <PromotionalBanner />
        <Header />
        <CounsellingModalProvider>
          <main>{children}</main>
          <FloatingCounsellingCta />
        </CounsellingModalProvider>
        <Footer />
      </body>
    </html>
  );
}
