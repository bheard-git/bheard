"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function FloatingCounsellingCta() {
  const pathname = usePathname();
  const [hasVisibleCounsellingCta, setHasVisibleCounsellingCta] = useState(false);
  const [ready, setReady] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setReady(false);
    setHasVisibleCounsellingCta(false);

    const boot = window.setTimeout(() => {
      if (typeof IntersectionObserver === "undefined") {
        setReady(true);
        return;
      }

      const visible = new Set<Element>();

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              visible.add(entry.target);
            } else {
              visible.delete(entry.target);
            }
          }
          setHasVisibleCounsellingCta(visible.size > 0);
          setReady(true);
        },
        { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
      );

      observerRef.current = observer;

      const targets = document.querySelectorAll("[data-counselling-cta]");
      if (targets.length === 0) {
        setHasVisibleCounsellingCta(false);
        setReady(true);
        return;
      }

      targets.forEach((el) => observer.observe(el));
    }, 0);

    return () => {
      window.clearTimeout(boot);
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [pathname]);

  const isVisible = ready && !hasVisibleCounsellingCta;

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-30 md:bottom-6 md:right-6",
        "transition-[opacity,transform] duration-600",
        isVisible
          ? "floating-cta-pulse opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      )}
    >
      <Link
        href="/contact"
        aria-label="Book free counselling"
        className="btn-primary btn-primary-premium premium-border-glow glow-accent-orange inline-flex min-h-11 items-center justify-center rounded-[6px] px-4 py-3 text-body-sm shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
      >
        Book Free Counselling
      </Link>
    </div>
  );
}
