"use client";

import "@/lib/motion/config";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import logo from "@/app/logo.png";
import { prefersReducedMotion } from "@/lib/motion/animations";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/letsbheard",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/letsbheard/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M4.98 3.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM3.75 9h2.46v11.25H3.75V9Zm5.04 0h2.36v1.54h.03c.33-.62 1.14-1.28 2.35-1.28 2.51 0 2.97 1.65 2.97 3.8v6.19h-2.46v-5.49c0-1.31-.02-3-1.83-3-1.84 0-2.12 1.44-2.12 2.92v5.57H8.79V9Z" />
      </svg>
    ),
  },
] as const;

const solutionsLinks = [
  { label: "Brand Solutions", href: "/brand-solutions" },
  { label: "Tech Solutions", href: "/tech-solutions" },
  { label: "Guest AI", href: "/services/tech-solutions/ai-chatbots-agents" },
] as const;

const companyLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
] as const;

const offices = [
  {
    title: "Head Office – Mumbai",
    lines: [
      "B1-604, Marathon Innova Corporate Centre,",
      "Marathon NextGen Compound, Lower Parel,",
      "Mumbai, Maharashtra – 400013",
    ],
    phone: "+91 9326602832",
    email: "hello@bheard.in",
  },
  {
    title: "Branch Office – Delhi",
    lines: [
      "WH-75, Mayapuri Industrial Area, Phase-1,",
      "South West Delhi, Delhi – 110064",
    ],
  },
] as const;

function footerAlreadyVisible(footer: HTMLElement) {
  const rect = footer.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92;
}

function FooterLinkList({ links }: { links: ReadonlyArray<{ label: string; href: string }> }) {
  return (
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            className="font-body text-sm text-neutral-600 transition-colors duration-300 hover:text-neutral-900"
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const pathname = usePathname() ?? "";
  const footerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const footer = footerRef.current;
      if (!footer) {
        return;
      }

      const blocks = footer.querySelectorAll<HTMLElement>("[data-footer-reveal]");
      if (!blocks.length) {
        return;
      }

      if (prefersReducedMotion()) {
        gsap.set(blocks, { opacity: 1, y: 0 });
        return;
      }

      const reveal = () => {
        gsap.fromTo(
          blocks,
          { y: 32, willChange: "transform" },
          {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            duration: 0.5,
            ease: "power3.out",
            clearProps: "willChange",
          }
        );
      };

      if (footerAlreadyVisible(footer)) {
        reveal();
        return;
      }

      gsap.set(blocks, { opacity: 1, y: 32 });
      const tween = gsap.to(blocks, {
        y: 0,
        stagger: 0.06,
        duration: 0.5,
        ease: "power3.out",
        clearProps: "willChange",
        scrollTrigger: {
          trigger: footer,
          start: "top 91%",
          once: true,
        },
      });

      ScrollTrigger.refresh();

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: footerRef, dependencies: [pathname] }
  );

  return (
    <footer
      ref={footerRef}
      data-motion-exclude
      className="mx-auto flex w-full max-w-screen-2xl flex-col justify-end border-t border-neutral-200 bg-white px-8 pt-8 md:pt-10"
    >
      <div className="grid grid-cols-1 items-start gap-6 pb-6 md:grid-cols-12 md:gap-8 md:pb-8">
        <div data-footer-reveal className="opacity-100 md:col-span-4">
          <div className="mb-3">
            <Image src={logo} alt="BHEARD" height={56} width={56} className="h-11 w-auto md:h-12" />
          </div>
          <p className="max-w-sm font-body text-sm leading-relaxed text-neutral-600 md:text-base">
            BHEARD is an integrated branding and tech agency in Mumbai. We build brand identities, run campaigns, and
            engineer digital products - for businesses that refuse to be background noise.
          </p>
          <div className="mt-4 flex items-center gap-2.5">
            {socialLinks.map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-outline-variant/30 text-neutral-600 transition-colors duration-300 hover:border-orange-500/40 hover:text-orange-500"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
        <div data-footer-reveal className="opacity-100 md:col-span-2">
          <h6 className="mb-3 text-sm font-bold uppercase text-orange-500">Solutions</h6>
          <FooterLinkList links={solutionsLinks} />
        </div>
        <div data-footer-reveal className="opacity-100 md:col-span-2">
          <h6 className="mb-3 text-sm font-bold uppercase text-orange-500">Company</h6>
          <FooterLinkList links={companyLinks} />
        </div>
        <div data-footer-reveal className="opacity-100 md:col-span-4">
          <h6 className="mb-3 text-sm font-bold uppercase text-orange-500">Contact</h6>
          <div className="space-y-3">
            {offices.map((office) => (
              <address key={office.title} className="not-italic">
                <p className="mb-1 font-headline text-xs font-bold uppercase tracking-wide text-neutral-900">
                  {office.title}
                </p>
                <p className="font-body text-sm leading-relaxed text-neutral-600">
                  {office.lines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < office.lines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                {"phone" in office && (
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="mt-1.5 block font-body text-sm font-semibold text-neutral-600 transition-colors duration-300 hover:text-orange-500"
                  >
                    {office.phone}
                  </a>
                )}
                {"email" in office && (
                  <a
                    href={`mailto:${office.email}`}
                    className="mt-0.5 block font-headline text-base lowercase text-neutral-900 transition-colors duration-300 hover:text-orange-500"
                  >
                    {office.email}
                  </a>
                )}
              </address>
            ))}
          </div>
        </div>
      </div>
      <div className="relative overflow-visible border-t border-neutral-200 py-4 md:py-5">
        <div className="relative z-10 flex flex-col items-start justify-between gap-3 md:flex-row md:items-center md:gap-4">
          <div className="text-sm font-bold uppercase tracking-widest text-neutral-600">
            &copy; {new Date().getFullYear()} BHEARD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap gap-6 md:gap-8">
            <Link
              className="text-sm font-bold uppercase tracking-widest text-neutral-600 transition-colors duration-400 ease-out hover:text-neutral-900"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm font-bold uppercase tracking-widest text-neutral-600 transition-colors duration-400 ease-out hover:text-neutral-900"
              href="/terms-and-conditions"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              className="text-sm font-bold uppercase tracking-widest text-neutral-600 transition-colors duration-400 ease-out hover:text-neutral-900"
              href="/sitemap.xml"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
