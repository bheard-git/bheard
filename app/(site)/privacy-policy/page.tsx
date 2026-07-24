import type { Metadata } from "next";
import { Suspense } from "react";
import DbLoadingSkeleton from "@/components/system/DbLoadingSkeleton";
import LegalPageContent from "@/components/system/LegalPageContent";
import JsonLd from "@/components/seo/JsonLd";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";

export const dynamic = "force-dynamic";

export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.privacyPolicy);

export default function PrivacyPolicyPage() {
  const schema = [
    buildWebPageSchema({
      title: PAGE_SEO.privacyPolicy.title,
      description: PAGE_SEO.privacyPolicy.description,
      pathname: PAGE_SEO.privacyPolicy.pathname,
    }),
    buildBreadcrumbSchema(BREADCRUMBS.privacyPolicy),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <Suspense fallback={<DbLoadingSkeleton variant="legal" />}>
        <LegalPageContent
          slug="privacy-policy"
          watermark="Privacy"
          defaultTitle="Privacy Policy"
          subtext="How we collect, use, and protect your information."
        />
      </Suspense>
    </>
  );
}
