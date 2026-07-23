"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/components/site/FaqSection";
import { sectionContentBand, sectionPageX } from "@/components/system/sectionTheme";

function FaqColumn({
  items,
  openIndex,
  onToggle,
}: {
  items: readonly FaqItem[];
  openIndex: number | null;
  onToggle: (index: number | null) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="rounded-xl border border-outline-variant/60 bg-white">
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 p-5 text-left md:p-6"
              onClick={() => onToggle(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-body text-sm font-semibold text-on-background md:text-base">{item.question}</span>
              <Plus
                className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="px-5 pb-5 font-body text-sm leading-relaxed text-on-surface-variant md:px-6 md:pb-6 md:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

type TwoColumnFaqProps = {
  heading?: string;
  items: FaqItem[];
  className?: string;
  bandClassName?: string;
};

export default function TwoColumnFaq({
  heading = "Frequently Asked Questions",
  items,
  className = `bg-surface-container-lowest ${sectionPageX} py-10 md:py-14`,
  bandClassName = sectionContentBand,
}: TwoColumnFaqProps) {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  const midpoint = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midpoint);
  const rightItems = items.slice(midpoint);

  return (
    <section className={className}>
      <div className={bandClassName}>
        <h2 className="font-headline text-[clamp(1.75rem,3.5vw,2.75rem)] font-black uppercase leading-tight tracking-tight text-on-background">
          {heading}
        </h2>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6">
          <FaqColumn items={leftItems} openIndex={openLeft} onToggle={setOpenLeft} />
          <FaqColumn items={rightItems} openIndex={openRight} onToggle={setOpenRight} />
        </div>
      </div>
    </section>
  );
}
