import type { Metadata } from "next";
import { Suspense } from "react";
import DbLoadingSkeleton from "@/components/system/DbLoadingSkeleton";
import BlogListingContent from "./BlogListingContent";

export const metadata: Metadata = {
  title: "Blog | BHEARD",
  description: "Perspectives on brand strategy, product engineering, growth systems, and practical execution.",
};

export const dynamic = "force-dynamic";

export default function BlogListingPage() {
  return (
    <Suspense fallback={<DbLoadingSkeleton variant="blog" />}>
      <BlogListingContent />
    </Suspense>
  );
}
