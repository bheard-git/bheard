import type { Metadata } from "next";
import LegalPageContent from "@/components/system/LegalPageContent";
import JsonLd from "@/components/seo/JsonLd";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";

const TERMS_TITLE = "Terms & Conditions | BHeard";
const TERMS_DESCRIPTION = "Terms and conditions governing the use of BHeard's website and services.";

/** Legacy page — content spec says do not index; 301 to /privacy-policy recommended at infra level. */
export const metadata: Metadata = buildPageMetadata({
  title: TERMS_TITLE,
  description: TERMS_DESCRIPTION,
  pathname: "/terms-and-conditions",
  noindex: true,
});

export default function TermsAndConditionsPage() {
  const schema = [
    buildWebPageSchema({
      title: TERMS_TITLE,
      description: TERMS_DESCRIPTION,
      pathname: "/terms-and-conditions",
    }),
    buildBreadcrumbSchema(BREADCRUMBS.termsAndConditions),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <LegalPageContent
        slug="terms-and-conditions"
        watermark="Terms"
        defaultTitle="Terms & Conditions"
        subtext="Rules governing the use of our website and services."
      />
    </>
  );
}
