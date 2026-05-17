import type { Metadata } from "next";
import { Suspense } from "react";
import DbLoadingSkeleton from "@/components/system/DbLoadingSkeleton";
import CareersListingContent from "./CareersListingContent";

export const metadata: Metadata = {
  title: "Careers | BHEARD",
  description: "Join BHEARD to build meaningful brand and product systems with high ownership and quality standards.",
};

export const dynamic = "force-dynamic";

export default function CareersListingPage() {
  return (
    <Suspense fallback={<DbLoadingSkeleton variant="careers" />}>
      <CareersListingContent />
    </Suspense>
  );
}
