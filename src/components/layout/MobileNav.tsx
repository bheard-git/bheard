"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CATEGORIES, EXTERNAL_URLS, HEADER_NAV } from "@/lib/constants";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex items-center justify-center text-text-secondary"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <div
        className={cn(
          "fixed inset-0 top-16 z-30 bg-bg-primary transition-transform duration-300 overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-6 space-y-1">
          <p className="text-caption text-text-dimmed uppercase tracking-wider mb-2">
            Choose your exam
          </p>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.slug}`}
              onClick={() => setIsOpen(false)}
              className="block py-2.5 text-body font-medium text-text-primary hover:text-orange-400 transition-colors"
            >
              {cat.name}
            </Link>
          ))}

          <div className="border-t border-border-default my-4" />

          {HEADER_NAV.map((item) => {
            if ("children" in item && item.children) {
              return (
                <div key={item.label} className="py-2">
                  <span className="text-caption text-text-dimmed uppercase tracking-wider">
                    {item.label}
                  </span>
                  <div className="mt-1 ml-3 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-body text-text-secondary hover:text-orange-400 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
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
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 text-body font-medium text-text-primary hover:text-orange-400 transition-colors"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2.5 text-body font-medium text-text-primary hover:text-orange-400 transition-colors"
              >
                {item.label}
              </Link>
            );
          })}

          <div className="border-t border-border-default my-4" />

          <a
            href={EXTERNAL_URLS.rodhaBuddy}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center py-3"
            onClick={() => setIsOpen(false)}
          >
            Rodha Buddy
          </a>
          <a
            href={EXTERNAL_URLS.graphy}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 text-center text-body font-medium text-text-secondary hover:text-orange-400"
            onClick={() => setIsOpen(false)}
          >
            Login / Sign Up
          </a>
        </nav>
      </div>
    </div>
  );
}
