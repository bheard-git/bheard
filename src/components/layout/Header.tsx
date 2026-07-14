"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CATEGORIES, EXTERNAL_URLS, HEADER_NAV } from "@/lib/constants";
import { MobileNav } from "./MobileNav";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [examOpen, setExamOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const examRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (examRef.current && !examRef.current.contains(e.target as Node)) {
        setExamOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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
              className="flex items-center gap-1.5 h-9 px-3 text-body-sm font-medium text-text-primary border border-white/30 rounded-[6px] bg-bg-tertiary hover:border-orange-500/60 hover:text-orange-400 transition-colors whitespace-nowrap"
            >
              Choose your exam
              <svg
                className={cn("h-3.5 w-3.5 text-text-secondary transition-transform", examOpen && "rotate-180")}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {examOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 rounded-[6px] bg-bg-surface border border-border-hover shadow-md py-2 z-50">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/${cat.slug}`}
                    onClick={() => setExamOpen(false)}
                    className="block px-4 py-2.5 text-body-sm text-text-secondary hover:bg-bg-hover hover:text-orange-400 transition-colors"
                  >
                    <span className="font-semibold">{cat.name}</span>
                    <span className="block text-caption text-text-dimmed mt-0.5">
                      {cat.fullName}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center min-w-0">
          {HEADER_NAV.map((item) => {
            if ("children" in item && item.children) {
              return (
                <div key={item.label} ref={resourcesRef} className="relative">
                  <button
                    onClick={() => setResourcesOpen(!resourcesOpen)}
                    className="flex items-center gap-1 px-2 xl:px-2.5 py-1.5 text-body-sm text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap"
                  >
                    {item.label}
                    <svg
                      className={cn("h-3 w-3 transition-transform", resourcesOpen && "rotate-180")}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {resourcesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-44 rounded-[6px] bg-bg-surface border border-border-default shadow-md py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setResourcesOpen(false)}
                          className="block px-4 py-2 text-body-sm text-text-secondary hover:bg-bg-hover hover:text-orange-400 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if ("external" in item && item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 xl:px-2.5 py-1.5 text-body-sm text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="px-2 xl:px-2.5 py-1.5 text-body-sm text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap"
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

        <MobileNav />
      </div>
    </header>
  );
}
