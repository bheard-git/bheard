import { Suspense } from "react";
import DbLoadingSkeleton from "@/components/system/DbLoadingSkeleton";
import WorkListingContent from "./WorkListingContent";

export const metadata = {
  title: "Our Work — Case Studies | BHeard",
  description:
    "Explore how branding, marketing, and technology come together to solve challenges, create opportunities, and drive meaningful business growth.",
};

export const dynamic = "force-dynamic";

export default function WorkIndexPage() {
  return (
    <Suspense fallback={<DbLoadingSkeleton variant="stories" />}>
      <WorkListingContent />
    </Suspense>
  );
}
