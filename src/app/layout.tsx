import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PromotionalBanner } from "@/components/layout/PromotionalBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rodha — Expert Mentorship. Proven Strategies. Real Results.",
  description:
    "India's trusted platform for MBA (CAT + GDPI), Integrated Programs, Law, Banking & Government Exams, and SkillHouse. Expert mentorship, proven strategies, and real results.",
  keywords: [
    "MBA preparation",
    "CAT preparation",
    "GDPI training",
    "IPMAT coaching",
    "CLAT preparation",
    "Banking exam coaching",
    "SSC preparation",
    "SkillHouse",
    "competitive exam coaching",
  ],
  openGraph: {
    title: "Rodha — Expert Mentorship. Proven Strategies. Real Results.",
    description:
      "India's trusted platform for MBA, Integrated Programs, Law, Banking & Government, and SkillHouse.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-bg-primary text-text-primary font-sans antialiased">
        <PromotionalBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
