import type { Metadata } from "next";
import { Suspense } from "react";
import DbLoadingSkeleton from "@/components/system/DbLoadingSkeleton";
import LegalPageContent from "@/components/system/LegalPageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Privacy Policy | BHEARD",
  description: "How BHEARD collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <Suspense fallback={<DbLoadingSkeleton variant="legal" />}>
      <LegalPageContent
        slug="privacy-policy"
        watermark="Privacy"
        defaultTitle="Privacy Policy"
        subtext="How we collect, use, and protect your information."
      />
    </Suspense>
  );
}
