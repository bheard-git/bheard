"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  heading?: string;
  items: FaqItem[];
};

export default function FaqSection({ heading = "Frequently Asked Questions", items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20 md:px-8 md:py-28">
      <h2 className="mb-10 text-center font-headline text-2xl font-bold uppercase tracking-tight text-neutral-900 md:text-3xl">
        {heading}
      </h2>
      <dl className="divide-y divide-neutral-200">
        {items.map((item, i) => (
          <div key={i} className="py-5">
            <dt>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-body text-base font-semibold text-neutral-800 md:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-orange-500 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </dt>
            <dd
              className={`overflow-hidden transition-all duration-300 ${open === i ? "mt-3 max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="font-body text-sm leading-relaxed text-neutral-600 md:text-base">
                {item.answer}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
