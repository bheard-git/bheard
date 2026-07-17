"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCountdown } from "@/hooks/useCountdown";
import { OFFER_END_DATE } from "@/lib/constants";

interface PromotionalBannerProps {
  className?: string;
}

export function PromotionalBanner({ className }: PromotionalBannerProps) {
  const [dismissed, setDismissed] = useState(false);
  const { days, hours, minutes, seconds, isExpired } = useCountdown(OFFER_END_DATE);

  if (dismissed || isExpired) return null;

  const units = [
    { value: days, label: "d" },
    { value: hours, label: "h" },
    { value: minutes, label: "m" },
    { value: seconds, label: "s" },
  ];

  return (
    <div
      className={cn(
        "relative z-50 bg-bg-primary border-b border-border-subtle text-text-primary py-2 px-4",
        className
      )}
    >
      <div className="container-rodha flex items-center justify-center gap-3 sm:gap-6 relative">
        <p className="text-caption sm:text-body-sm text-center text-text-secondary flex-1 min-w-0">
          <span aria-hidden="true">🔥 </span>
          <span className="hidden sm:inline">Early Bird Offer! Get up to </span>
          <span className="sm:hidden">Early Bird: </span>
          <span className="font-bold text-orange-500">25% OFF</span>
          <span className="hidden sm:inline"> on all CAT 2026 Batches. </span>
          <span className="sm:hidden"> on CAT Batches. </span>
          <Link
            href="/mba"
            className="font-semibold text-orange-500 hover:text-orange-400 underline underline-offset-2 transition-colors"
          >
            Enroll Now
          </Link>
        </p>

        <div className="hidden sm:flex items-center gap-1 shrink-0">
          {units.map((unit, i) => (
            <div key={unit.label} className="flex items-center gap-1">
              <span className="inline-flex items-center justify-center min-w-[36px] h-7 px-1.5 rounded bg-bg-tertiary border border-border-default text-caption font-bold tabular-nums text-text-primary">
                {String(unit.value).padStart(2, "0")}
                <span className="text-text-dimmed font-medium ml-0.5">{unit.label}</span>
              </span>
              {i < units.length - 1 && (
                <span className="text-text-dimmed text-caption font-bold">:</span>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="absolute right-0 sm:static text-text-dimmed hover:text-text-primary transition-colors shrink-0 ml-1"
          aria-label="Dismiss banner"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
