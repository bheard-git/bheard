import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { TestSeriesItem } from "@/lib/types";

interface TestSeriesCardProps {
  item: TestSeriesItem;
  className?: string;
}

export function TestSeriesCard({ item, className }: TestSeriesCardProps) {
  const isExternal = item.href.startsWith("http");

  const ctaClassName =
    "inline-flex items-center gap-1.5 mt-auto pt-5 text-body-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors";

  return (
    <div
      className={cn(
        "card-base card-premium-hover premium-border-glow glow-accent-silver shine-sweep flex flex-col p-5 md:p-6 h-full",
        className
      )}
    >
      <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0">
        <Image
          src={item.icon}
          alt=""
          fill
          className="object-contain"
          sizes="56px"
        />
      </div>

      <h3 className="mt-5 text-h4 font-semibold text-text-primary">{item.title}</h3>
      <p className="mt-2 text-body-sm text-text-muted leading-relaxed">
        {item.description}
      </p>

      <ul className="mt-4 space-y-2">
        {item.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-body-sm text-text-secondary"
          >
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {isExternal ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaClassName}
        >
          Explore Now
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      ) : (
        <Link href={item.href} className={ctaClassName}>
          Explore Now
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}
