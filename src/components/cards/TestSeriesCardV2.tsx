import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { TestSeriesItem } from "@/lib/types";

interface TestSeriesCardV2Props {
  item: TestSeriesItem;
  className?: string;
}

export function TestSeriesCardV2({ item, className }: TestSeriesCardV2Props) {
  const isExternal = item.href.startsWith("http");

  const ctaClassName =
    "inline-flex items-center gap-1.5 mt-auto pt-5 text-body-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors";

    return (
      <Link
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(
          "card-base card-premium-hover premium-border-glow glow-accent-silver shine-sweep group relative flex h-full min-h-[220px] ",
          className
        )}
      >
        <div className="flex-col overflow-hidden w-full p-7 md:p-8"
          style={{
            background: "linear-gradient(145deg, rgba(249,115,22,0.55) 0%, rgba(194,65,12,0.35) 55%, rgba(17,17,17,0.95) 100%)",
            boxShadow: `inset 0 0 0 1px #F9731640`,
            ["--glow-base" as string]: `#F9731624`,
            ["--glow-peak" as string]: `#F97316B3`,
        }}
        >
          {/* subtle glow */}
        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-500/5 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
    
        <div className="relative z-10 flex h-full flex-col">
          <span className="text-[3rem] font-black leading-none tracking-tight text-orange-500 transition-transform duration-300 group-hover:translate-x-1">
            {item.value}
          </span>

          <h3 className="mt-5 text-h3 font-bold text-text-primary">
            {item.title}
          </h3>

          <p className="mt-4 max-w-[22rem] text-body text-text-muted leading-relaxed">
            {item.description}
          </p>
        </div>
        </div>
      </Link>
    );
}
