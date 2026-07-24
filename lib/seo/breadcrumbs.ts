export type BreadcrumbItem = {
  name: string;
  path?: string;
};

export const BREADCRUMBS = {
  brandSolutions: [
    { name: "Home", path: "/" },
    { name: "Brand Solutions" },
  ],
  techSolutions: [
    { name: "Home", path: "/" },
    { name: "Tech Solutions" },
  ],
  aiGuestAgents: [
    { name: "Home", path: "/" },
    { name: "Tech Solutions", path: "/tech-solutions" },
    { name: "AI Guest Agents" },
  ],
  industries: [
    { name: "Home", path: "/" },
    { name: "Industries" },
  ],
  work: [
    { name: "Home", path: "/" },
    { name: "Work" },
  ],
  about: [
    { name: "Home", path: "/" },
    { name: "About" },
  ],
  careers: [
    { name: "Home", path: "/" },
    { name: "Careers" },
  ],
  contact: [
    { name: "Home", path: "/" },
    { name: "Contact" },
  ],
  blog: [
    { name: "Home", path: "/" },
    { name: "Blog" },
  ],
  privacyPolicy: [
    { name: "Home", path: "/" },
    { name: "Privacy Policy" },
  ],
  sitemap: [
    { name: "Home", path: "/" },
    { name: "Sitemap" },
  ],
  termsAndConditions: [
    { name: "Home", path: "/" },
    { name: "Terms & Conditions" },
  ],
} as const satisfies Record<string, BreadcrumbItem[]>;

export function workDetailBreadcrumbs(listTitle: string): BreadcrumbItem[] {
  return [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: listTitle },
  ];
}

export function careerDetailBreadcrumbs(roleTitle: string): BreadcrumbItem[] {
  return [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
    { name: roleTitle },
  ];
}

export function blogDetailBreadcrumbs(postTitle: string): BreadcrumbItem[] {
  return [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: postTitle },
  ];
}
