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
    "India's trusted platform for CAT, IPMAT, GDPI & CLAT preparation. Expert mentorship, proven strategies, and real results to help you crack competitive exams.",
  keywords: [
    "CAT preparation",
    "IPMAT coaching",
    "GDPI training",
    "CLAT preparation",
    "MBA entrance exams",
    "competitive exam coaching",
  ],
  openGraph: {
    title: "Rodha — Expert Mentorship. Proven Strategies. Real Results.",
    description:
      "India's trusted platform for CAT, IPMAT, GDPI & CLAT preparation.",
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
