import type { Metadata } from "next";
import { Suspense } from "react";
import DbLoadingSkeleton from "@/components/system/DbLoadingSkeleton";
import CareersListingContent from "./CareersListingContent";

export const metadata: Metadata = {
  title: "Careers at BHeard - Marketing, Design & Tech Jobs in Mumbai | BHeard",
  description:
    "Join BHeard's team of strategists, designers, and developers in Mumbai. Careers in brand strategy, content, technology, and growth marketing.",
};

export const dynamic = "force-dynamic";

export default function CareersListingPage() {
  return (
    <Suspense fallback={<DbLoadingSkeleton variant="careers" />}>
      <CareersListingContent />
    </Suspense>
  );
}
