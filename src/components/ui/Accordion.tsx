"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  /** Chevron for default FAQs; plus shows orange + / − like the CAT mockup */
  iconVariant?: "chevron" | "plus";
}

export function Accordion({
  items,
  className,
  iconVariant = "chevron",
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="card-base overflow-hidden">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between p-4 md:p-5 text-left font-medium text-text-primary hover:text-orange-400 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="pr-4 text-body">{item.question}</span>
              {iconVariant === "plus" ? (
                <span
                  className={cn(
                    "relative h-5 w-5 shrink-0 text-orange-400",
                    "before:absolute before:left-1/2 before:top-1/2 before:h-0.5 before:w-3.5 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-current before:rounded-full",
                    "after:absolute after:left-1/2 after:top-1/2 after:h-3.5 after:w-0.5 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-current after:rounded-full after:transition-transform after:duration-200",
                    isOpen && "after:scale-y-0"
                  )}
                  aria-hidden
                />
              ) : (
                <svg
                  className={cn(
                    "h-5 w-5 shrink-0 text-text-dimmed transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
            <div
              className={cn(
                "grid transition-all duration-200 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-4 md:px-5 pb-4 md:pb-5 text-body text-text-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
