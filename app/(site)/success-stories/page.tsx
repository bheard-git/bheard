import { Suspense } from "react";
import DbLoadingSkeleton from "@/components/system/DbLoadingSkeleton";
import StoriesListingContent from "./StoriesListingContent";

export const metadata = {
  title: "Success Stories | BHEARD",
  description:
    "Campaign-grade case studies — immersive storytelling, proof, and execution detail from hospitality, wellness, and brand-led growth work.",
};


export default function SuccessStoriesIndexPage() {
  return (
      <StoriesListingContent />
  );
}
