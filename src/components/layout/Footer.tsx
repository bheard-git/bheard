"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CATEGORIES,
  CONTACT_INFO,
  SOCIAL_LINKS,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants";
import { Icon } from "@/components/ui/Icon";

const SOCIAL_ICON_PATHS: Record<string, string> = {
  instagram: "/assets/icons/instagram.svg",
  facebook: "/assets/icons/facebook.svg",
  youtube: "/assets/icons/youtube.svg",
  linkedin: "/assets/icons/linkedin.svg",
  twitter: "/assets/icons/twitter.svg",
};

const FOOTER_COLS = {
  exams: CATEGORIES.map((c) => ({ label: c.name, href: `/${c.slug}` })),
  courses: [
    { label: "All Courses", href: "/cat" },
    { label: "Live Classes", href: "/cat" },
    { label: "Test Series", href: "/cat" },
    { label: "Study Material", href: "/blog" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Meet the Team", href: "/team" },
    { label: "Careers", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Free Resources", href: "/blog" },
    { label: "Webinars", href: "/blog" },
    { label: "Success Stories", href: "/#results" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-body font-semibold text-text-primary mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-body-sm text-text-muted hover:text-orange-400 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border-default relative">
      <div className="container-rodha py-8 md:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/images/rodha-logo.webp"
                alt={SITE_NAME}
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 text-body-sm text-text-muted max-w-[220px] leading-relaxed">
              {SITE_TAGLINE}
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-transparent border border-white/40 text-white hover:border-orange-500 hover:text-orange-400 transition-all"
                  aria-label={link.platform}
                >
                  <Icon
                    src={SOCIAL_ICON_PATHS[link.icon] || "/assets/icons/external-link.svg"}
                    size={14}
                    className="text-current"
                  />
                </a>
              ))}
            </div>
            <div className="mt-4 text-caption text-text-dimmed space-y-1">
              <p>{CONTACT_INFO.email}</p>
              <p>{CONTACT_INFO.phone}</p>
            </div>
          </div>

          <FooterColumn title="Exams" links={FOOTER_COLS.exams} />
          <FooterColumn title="Courses" links={FOOTER_COLS.courses} />
          <FooterColumn title="Company" links={FOOTER_COLS.company} />
          <FooterColumn title="Resources" links={FOOTER_COLS.resources} />
          <FooterColumn title="Legal" links={FOOTER_COLS.legal} />
        </div>
      </div>

      <div className="border-t border-border-default">
        <div className="container-rodha py-5 flex flex-col md:flex-row items-center justify-between gap-3 relative">
          <p className="text-caption text-text-dimmed">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-caption text-text-dimmed flex items-center gap-1">
            Made with{" "}
            <Icon src="/assets/icons/heart.svg" size={12} className="text-accent-red" />{" "}
            for aspirants
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute right-4 md:static md:ml-2 w-9 h-9 flex items-center justify-center rounded-full bg-transparent border border-white/40 text-white hover:border-orange-500 hover:text-orange-400 transition-all"
            aria-label="Scroll to top"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
