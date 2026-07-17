"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  CATEGORIES,
  CONTACT_INFO,
  SOCIAL_LINKS,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const SOCIAL_ICON_PATHS: Record<string, string> = {
  instagram: "/assets/icons/instagram.svg",
  facebook: "/assets/icons/facebook.svg",
  youtube: "/assets/icons/youtube.svg",
  linkedin: "/assets/icons/linkedin.svg",
  twitter: "/assets/icons/twitter.svg",
};

const FOOTER_COLS = {
  exams: CATEGORIES.map((c) => ({ label: c.menuLabel, href: `/${c.slug}` })),
  courses: [
    { label: "All Courses", href: "/mba" },
    { label: "Live Classes", href: "/mba" },
    { label: "Test Series", href: "/mba" },
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

/** When multiple footer links share a path, only this label is marked active. */
const PREFERRED_ACTIVE_LABEL: Record<string, string> = {
  "/mba": "MBA (CAT + GDPI)",
  "/blog": "Blog",
  "/contact": "Contact Us",
};

function normalizePath(path: string): string {
  const base = path.split("#")[0] || "/";
  return base.length > 1 && base.endsWith("/") ? base.slice(0, -1) : base;
}

function parseFooterHref(href: string): { path: string; hash: string } {
  const [pathPart, hashPart] = href.split("#");
  return {
    path: normalizePath(pathPart || "/"),
    hash: hashPart ? `#${hashPart}` : "",
  };
}

function getActiveFooterLabel(pathname: string, currentHash: string): string | null {
  const currentPath = normalizePath(pathname);
  const hash = currentHash || "";

  const matches = Object.values(FOOTER_COLS)
    .flat()
    .filter((item) => {
      const { path, hash: itemHash } = parseFooterHref(item.href);
      if (path !== currentPath) return false;
      // Hash links (e.g. /#results) only match when the hash is present
      if (itemHash) return itemHash === hash;
      // Plain path links only match when there is no hash in the URL
      return hash === "";
    });

  if (matches.length === 0) return null;

  const preferred = PREFERRED_ACTIVE_LABEL[currentPath];
  if (preferred && matches.some((m) => m.label === preferred)) {
    return preferred;
  }

  return matches[0].label;
}

function FooterColumn({
  title,
  links,
  activeLabel,
}: {
  title: string;
  links: { label: string; href: string }[];
  activeLabel: string | null;
}) {
  return (
    <div className="text-left lg:text-right">
      <h4 className="text-body font-semibold text-text-primary mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((item) => {
          const isActive = activeLabel === item.label;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  "text-body-sm transition-colors",
                  isActive
                    ? "text-orange-400 font-medium"
                    : "text-text-muted hover:text-orange-400"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const activeLabel = getActiveFooterLabel(pathname, hash);

  return (
    <footer className="bg-bg-secondary border-t border-border-default relative">
      <div className="container-rodha py-8 md:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 lg:gap-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 text-left">
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
                  className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-transparent border border-white/40 text-white hover:border-orange-500 hover:text-orange-400 transition-all"
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

          <FooterColumn title="Exams" links={FOOTER_COLS.exams} activeLabel={activeLabel} />
          <FooterColumn title="Courses" links={FOOTER_COLS.courses} activeLabel={activeLabel} />
          <FooterColumn title="Company" links={FOOTER_COLS.company} activeLabel={activeLabel} />
          <FooterColumn title="Resources" links={FOOTER_COLS.resources} activeLabel={activeLabel} />
          <FooterColumn title="Legal" links={FOOTER_COLS.legal} activeLabel={activeLabel} />
        </div>
      </div>

      <div className="border-t border-border-default">
        <div className="container-rodha py-5 flex flex-col md:flex-row items-center justify-between gap-3 relative">
          <p className="text-caption text-text-dimmed">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute right-4 md:static md:ml-2 w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-transparent border border-white/40 text-white hover:border-orange-500 hover:text-orange-400 transition-all"
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


