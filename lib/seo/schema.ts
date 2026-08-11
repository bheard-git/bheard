import { LOCATIONS, ORGANIZATION } from "@/lib/seo/constants";
import { getSiteUrl } from "@/lib/seo/site";
import type { BreadcrumbItem } from "@/lib/seo/breadcrumbs";

type JsonLd = Record<string, unknown>;

function absoluteUrl(path: string): string {
  const siteUrl = getSiteUrl();
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? `${siteUrl}/` : `${siteUrl}${normalized}`;
}

export function toJsonLdGraph(...nodes: JsonLd[]): string {
  if (nodes.length === 1) return JSON.stringify(nodes[0]);
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes.map((node) => {
      const { ["@context"]: _ctx, ...rest } = node;
      return rest;
    }),
  });
}

export function buildOrganizationSchema(): JsonLd {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": `${siteUrl}/#organization`,
    name: ORGANIZATION.name,
    legalName: ORGANIZATION.legalName,
    alternateName: [...ORGANIZATION.alternateName],
    url: siteUrl,
    logo: absoluteUrl(ORGANIZATION.logoPath),
    description: ORGANIZATION.description,
    foundingDate: ORGANIZATION.foundingDate,
    email: ORGANIZATION.email,
    telephone: ORGANIZATION.phone,
    founder: {
      "@type": "Person",
      name: ORGANIZATION.founderName,
      jobTitle: "Founder & CEO",
      url: `${siteUrl}/about`,
      sameAs: [ORGANIZATION.founderLinkedIn],
    },
    sameAs: [...ORGANIZATION.sameAs],
    areaServed: ORGANIZATION.areaServed.map((name) => ({ "@type": "Place", name })),
    location: LOCATIONS.map((loc) => ({
      "@type": "Place",
      name: loc.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.streetAddress,
        addressLocality: loc.addressLocality,
        addressRegion: loc.addressRegion,
        postalCode: loc.postalCode,
        addressCountry: loc.addressCountry,
      },
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: ORGANIZATION.phone,
      email: ORGANIZATION.email,
      contactType: "customer service",
      areaServed: ["IN", "US", "SG"],
      availableLanguage: ["English"],
    },
  };
}

export function buildMarketingAgencySchema(): JsonLd {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["MarketingAgency", "ProfessionalService"],
    "@id": `${siteUrl}/#marketing-agency`,
    name: "BHEARD",
    alternateName: [...ORGANIZATION.alternateName],
    url: siteUrl,
    logo: absoluteUrl(ORGANIZATION.logoPath),
    description: ORGANIZATION.description,
    foundingDate: ORGANIZATION.foundingDate,
    founder: {
      "@type": "Person",
      name: ORGANIZATION.founderName,
      jobTitle: "Founder & CEO",
      url: `${siteUrl}/about`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Place", name: "Southeast Asia" },
    ],
    knowsAbout: [
      "Brand Strategy",
      "Social Media Marketing",
      "Campaign Planning",
      "Content Marketing",
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "E-Commerce Development",
      "Chatbot Development",
      "AI Automation",
      "Hospitality Marketing",
    ],
    sameAs: [...ORGANIZATION.sameAs],
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function buildServiceSchema(options: {
  name: string;
  description: string;
  pathname: string;
  serviceType: string;
}): JsonLd {
  const siteUrl = getSiteUrl();
  const url = absoluteUrl(options.pathname);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    url,
    serviceType: options.serviceType,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: ORGANIZATION.areaServed.map((name) => ({ "@type": "Place", name })),
  };
}

export function buildArticleSchema(options: {
  headline: string;
  description: string;
  pathname: string;
  image?: string;
  about?: string;
  datePublished?: string;
}): JsonLd {
  const siteUrl = getSiteUrl();
  const url = absoluteUrl(options.pathname);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.headline,
    description: options.description,
    url,
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    ...(options.image ? { image: options.image.startsWith("http") ? options.image : absoluteUrl(options.image) } : {}),
    ...(options.about ? { about: options.about } : {}),
    ...(options.datePublished ? { datePublished: options.datePublished } : {}),
    inLanguage: "en-IN",
  };
}

export function buildWebSiteSchema(): JsonLd {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: ORGANIZATION.name,
    url: siteUrl,
    description: ORGANIZATION.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function buildCreativeWorkSchema(options: {
  headline: string;
  description: string;
  pathname: string;
  image?: string;
  about?: string;
  datePublished?: string;
}): JsonLd {
  const siteUrl = getSiteUrl();
  const url = absoluteUrl(options.pathname);
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: options.headline,
    headline: options.headline,
    description: options.description,
    url,
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    ...(options.image
      ? { image: options.image.startsWith("http") ? options.image : absoluteUrl(options.image) }
      : {}),
    ...(options.about ? { about: options.about } : {}),
    ...(options.datePublished ? { datePublished: options.datePublished } : {}),
    inLanguage: "en-IN",
    isPartOf: { "@id": `${siteUrl}/#website` },
  };
}

export function buildCollectionPageSchema(options: {
  title: string;
  description: string;
  pathname: string;
  items?: { name: string; path: string }[];
}): JsonLd {
  const siteUrl = getSiteUrl();
  const url = absoluteUrl(options.pathname);
  const collection: JsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name: options.title,
    description: options.description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
  };

  if (options.items && options.items.length > 0) {
    collection.mainEntity = {
      "@type": "ItemList",
      itemListElement: options.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path),
      })),
    };
  }

  return collection;
}

export function buildAboutPageSchema(options: { title: string; description: string }): JsonLd {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteUrl}/about/#webpage`,
    url: `${siteUrl}/about`,
    name: options.title,
    description: options.description,
    isPartOf: { "@type": "WebSite", name: "BHeard", url: siteUrl },
    about: {
      "@type": "Person",
      name: ORGANIZATION.founderName,
      jobTitle: "Founder",
      sameAs: [ORGANIZATION.founderLinkedIn],
      worksFor: { "@id": `${siteUrl}/#organization` },
      alumniOf: { "@type": "Organization", name: "Accenture" },
    },
    mainEntity: { "@id": `${siteUrl}/#organization` },
  };
}

export function buildContactPageSchema(): JsonLd {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact/#webpage`,
    url: `${siteUrl}/contact`,
    name: "Contact BHeard",
    description: "Contact BHeard's branding and technology agency in Mumbai.",
    isPartOf: { "@type": "WebSite", name: "BHeard", url: siteUrl },
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: ORGANIZATION.phone,
        email: ORGANIZATION.email,
        contactType: "sales",
        areaServed: ["IN", "US", "SG"],
        availableLanguage: ["English"],
      },
    },
  };
}

export function buildJobPostingSchema(options: {
  title: string;
  description: string;
  slug: string;
  department: string;
  location: string;
  type: string;
  datePosted?: string;
}): JsonLd {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/careers/${options.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: options.title,
    description: options.description,
    url,
    datePosted: options.datePosted ?? new Date().toISOString().slice(0, 10),
    employmentType: options.type,
    hiringOrganization: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: ORGANIZATION.name,
      sameAs: siteUrl,
      logo: absoluteUrl(ORGANIZATION.logoPath),
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: options.location.includes("Delhi") ? "Delhi" : "Mumbai",
        addressCountry: "IN",
      },
    },
    occupationalCategory: options.department,
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },
  };
}

export function buildBlogPostingSchema(options: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt?: string | Date | null;
  updatedAt?: string | Date | null;
  thumbnailUrl?: string | null;
  thumbnailAlt?: string | null;
  category?: string;
  authorName?: string;
}): JsonLd {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/blog/${options.slug}`;
  const datePublished = options.publishedAt ? new Date(options.publishedAt).toISOString() : undefined;
  const dateModified = options.updatedAt
    ? new Date(options.updatedAt).toISOString()
    : datePublished;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: options.title,
    description: options.excerpt,
    url,
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    author: {
      "@type": "Person",
      name: options.authorName ?? ORGANIZATION.founderName,
      url: `${siteUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "BHeard",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: absoluteUrl(ORGANIZATION.logoPath) },
    },
    ...(options.thumbnailUrl
      ? {
          image: {
            "@type": "ImageObject",
            url: options.thumbnailUrl,
            description: options.thumbnailAlt ?? options.title,
          },
        }
      : {}),
    ...(options.category ? { articleSection: options.category } : {}),
    inLanguage: "en-IN",
    isPartOf: { "@type": "Blog", name: "BHeard Blog", url: `${siteUrl}/blog` },
  };
}

export function buildWebPageSchema(options: {
  title: string;
  description: string;
  pathname: string;
}): JsonLd {
  const siteUrl = getSiteUrl();
  const url = absoluteUrl(options.pathname);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name: options.title,
    description: options.description,
    isPartOf: { "@type": "WebSite", name: "BHeard", url: siteUrl },
  };
}
