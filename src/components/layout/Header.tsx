"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CATEGORIES, EXTERNAL_URLS, HEADER_NAV } from "@/lib/constants";
import type { CategoryId } from "@/lib/types";
import { MobileNav } from "./MobileNav";

interface HeaderProps {
  className?: string;
}

function getActiveCategoryId(pathname: string): CategoryId | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (!segment) return null;
  const match = CATEGORIES.find((cat) => cat.slug === segment);
  return match?.id ?? null;
}

export function Header({ className }: HeaderProps) {
  const pathname = usePathname();
  const activeCategoryId = getActiveCategoryId(pathname);
  const activeCategory = CATEGORIES.find((cat) => cat.id === activeCategoryId);

  const [examOpen, setExamOpen] = useState(false);
  const examRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setExamOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (examRef.current && !examRef.current.contains(e.target as Node)) {
        setExamOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const examTriggerLabel = activeCategory?.name ?? "Choose your exam";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-bg-primary/95 backdrop-blur-lg border-b border-border-default",
        className
      )}
    >
      <div className="container-rodha flex items-center justify-between h-14 md:h-16 gap-3 xl:gap-4">
        <div className="flex items-center gap-2.5 shrink-0">
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/assets/images/rodha-logo.webp"
              alt="Rodha"
              width={120}
              height={32}
              className="h-7 md:h-8 w-auto"
              priority
            />
          </Link>

          <div ref={examRef} className="relative hidden lg:block">
            <button
              onClick={() => setExamOpen(!examOpen)}
              aria-expanded={examOpen}
              aria-haspopup="listbox"
              className={cn(
                "flex items-center gap-1.5 h-9 px-3 text-body-sm font-medium border rounded-[6px] bg-bg-tertiary transition-colors whitespace-nowrap",
                activeCategory
                  ? "text-orange-400 border-orange-500/60"
                  : "text-text-primary border-white/30 hover:border-orange-500/60 hover:text-orange-400"
              )}
            >
              {examTriggerLabel}
              <svg
                className={cn(
                  "h-3.5 w-3.5 text-text-secondary transition-transform",
                  examOpen && "rotate-180"
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {examOpen && (
              <div
                role="listbox"
                className="absolute top-full left-0 mt-2 w-72 rounded-[6px] bg-bg-surface border border-border-hover shadow-md py-2 z-50"
              >
                {CATEGORIES.map((cat) => {
                  const isActive = cat.id === activeCategoryId;
                  return (
                    <Link
                      key={cat.id}
                      href={`/${cat.slug}`}
                      role="option"
                      aria-selected={isActive}
                      onClick={() => setExamOpen(false)}
                      className={cn(
                        "block px-4 py-2.5 text-body-sm transition-colors",
                        isActive
                          ? "bg-orange-500/10 text-orange-400"
                          : "text-text-secondary hover:bg-bg-hover hover:text-orange-400"
                      )}
                    >
                      <span className="font-semibold">{cat.menuLabel}</span>
                      <span className="block text-caption text-text-dimmed mt-0.5">
                        {cat.description}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center min-w-0">
          {HEADER_NAV.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative px-2 xl:px-2.5 py-1.5 text-body-sm transition-colors whitespace-nowrap",
                  isActive
                    ? "text-orange-400 after:absolute after:left-2 after:right-2 after:bottom-0 after:h-0.5 after:rounded-full after:bg-orange-500"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <a
            href={EXTERNAL_URLS.rodhaBuddy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 px-4 text-body-sm font-semibold text-orange-500 border border-orange-500 rounded-[6px] hover:bg-orange-500/10 transition-colors whitespace-nowrap"
          >
            Rodha Buddy
          </a>
          <a
            href={EXTERNAL_URLS.graphy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 px-4 text-body-sm font-medium text-text-primary border border-white/30 rounded-[6px] hover:border-white/60 hover:bg-bg-hover transition-colors whitespace-nowrap"
          >
            Login / Sign Up
          </a>
        </div>

        <MobileNav activeCategoryId={activeCategoryId} />
      </div>
    </header>
  );
}
