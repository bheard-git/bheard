import type { Metadata } from "next";
import BrandSolutionsView from "@/components/brand-solutions/BrandSolutionsView";
import JsonLd from "@/components/seo/JsonLd";
import type { FaqItem } from "@/components/site/FaqSection";
import { BREADCRUMBS } from "@/lib/seo/breadcrumbs";
import { metadataFromPageSeo } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo/schema";
import HotelMarketingView from "@/components/landings/hotelMarketing";

export const metadata: Metadata = metadataFromPageSeo(PAGE_SEO.brandSolutions);

export default function BrandSolutionsPage() {
  const schema = [
    buildServiceSchema({
      name: "Brand Solutions",
      description: PAGE_SEO.brandSolutions.description,
      pathname: PAGE_SEO.brandSolutions.pathname,
      serviceType: "Branding & Digital Marketing",
    }),
    // buildFaqSchema(BRAND_FAQS),
    buildBreadcrumbSchema(BREADCRUMBS.brandSolutions),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <HotelMarketingView />
    </>
  );
}
