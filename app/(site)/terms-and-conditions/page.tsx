import type { Metadata } from "next";
import { Suspense } from "react";
import DbLoadingSkeleton from "@/components/system/DbLoadingSkeleton";
import LegalPageContent from "@/components/system/LegalPageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Terms & Conditions | BHEARD",
  description: "Terms and conditions governing the use of BHEARD's website and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <Suspense fallback={<DbLoadingSkeleton variant="legal" />}>
      <LegalPageContent
        slug="terms-and-conditions"
        watermark="Terms"
        defaultTitle="Terms & Conditions"
        subtext="Rules governing the use of our website and services."
      />
    </Suspense>
  );
}
