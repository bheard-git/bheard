import type { NavItem, CategoryId } from "@/lib/types";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Courses",
    href: "#",
    children: [
      { label: "CAT Preparation", href: "/cat" },
      { label: "IPMAT Preparation", href: "/ipmat" },
      { label: "GDPI Preparation", href: "/gdpi" },
      { label: "CLAT Preparation", href: "/clat" },
    ],
  },
  { label: "Faculty", href: "/faculty" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const categoryNavigation: Record<CategoryId, NavItem[]> = {
  cat: [
    { label: "Overview", href: "/cat" },
    { label: "Courses", href: "/cat#courses" },
    { label: "Faculty", href: "/cat#faculty" },
    { label: "Results", href: "/cat#results" },
    { label: "FAQ", href: "/cat#faq" },
  ],
  ipmat: [
    { label: "Overview", href: "/ipmat" },
    { label: "Courses", href: "/ipmat#courses" },
    { label: "Faculty", href: "/ipmat#faculty" },
    { label: "Results", href: "/ipmat#results" },
    { label: "FAQ", href: "/ipmat#faq" },
  ],
  gdpi: [
    { label: "Overview", href: "/gdpi" },
    { label: "Courses", href: "/gdpi#courses" },
    { label: "Faculty", href: "/gdpi#faculty" },
    { label: "FAQ", href: "/gdpi#faq" },
  ],
  clat: [
    { label: "Overview", href: "/clat" },
    { label: "Courses", href: "/clat#courses" },
    { label: "Faculty", href: "/clat#faculty" },
    { label: "Results", href: "/clat#results" },
    { label: "FAQ", href: "/clat#faq" },
  ],
};

export const footerNavigation = {
  courses: [
    { label: "CAT Preparation", href: "/cat" },
    { label: "IPMAT Preparation", href: "/ipmat" },
    { label: "GDPI Preparation", href: "/gdpi" },
    { label: "CLAT Preparation", href: "/clat" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Faculty", href: "/faculty" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};
