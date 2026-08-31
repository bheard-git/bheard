import type { Metadata } from "next";

import HotelMarketingView from "@/components/landings/hotelMarketing";

import JsonLd from "@/components/seo/JsonLd";

import {
  BREADCRUMBS,
} from "@/lib/seo/breadcrumbs";

import {
  metadataFromPageSeo,
} from "@/lib/seo/metadata";

import {
  PAGE_SEO,
} from "@/lib/seo/pages";

import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  buildWebPageSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = metadataFromPageSeo(
  PAGE_SEO.hotelMarketing,
  {
    ogImage:
      "/assets/landings/hotel-marketing/hotel-marketing-og.jpg",

    ogImageAlt:
      "BHeard hotel marketing, technology and AI solutions for hotels and resorts",
  },
);

export default function HotelMarketingPage() {
  const schema = [
    buildWebPageSchema({
      title: PAGE_SEO.hotelMarketing.title,
      description: PAGE_SEO.hotelMarketing.description,
      pathname: PAGE_SEO.hotelMarketing.pathname,
    }),

    buildBreadcrumbSchema(
      BREADCRUMBS.hotelMarketing,
    ),
  ];

  return (
    <>
      <JsonLd data={schema} />

      <HotelMarketingView />
    </>
  );
}