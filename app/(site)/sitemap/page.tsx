import type { Metadata } from "next";
import { Suspense } from "react";
import DbLoadingSkeleton from "@/components/system/DbLoadingSkeleton";
import SitemapPageContent from "@/components/system/SitemapPageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sitemap | BHEARD",
  description: "Browse all pages on the BHEARD website — company, solutions, work, and legal.",
};

export default function SitemapPage() {
  return (
    <Suspense fallback={<DbLoadingSkeleton variant="legal" />}>
      <SitemapPageContent />
    </Suspense>
  );
}
