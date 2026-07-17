import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import type { ResourceItem } from "@/lib/types";

interface ResourceCardProps {
  item: ResourceItem;
  className?: string;
}

export function ResourceCard({ item, className }: ResourceCardProps) {
  const isExternal = item.href.startsWith("http");
  const highlighted = Boolean(item.highlighted);

  const content = (
    <>
      <div
        className={cn(
          "w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 border",
          highlighted
            ? "bg-white/15 border-white/20 text-white"
            : "bg-orange-500/15 border-orange-500/20 text-orange-400"
        )}
      >
        <Icon src={item.icon} size={24} />
      </div>

      <h3
        className={cn(
          "mt-5 text-h4 font-semibold leading-snug",
          highlighted ? "text-white" : "text-text-primary"
        )}
      >
        {item.title}
      </h3>

      <p
        className={cn(
          "mt-2 text-body-sm leading-relaxed flex-1",
          highlighted ? "text-white/85" : "text-text-muted"
        )}
      >
        {item.description}
      </p>

      <span
        className={cn(
          "inline-flex items-center gap-1.5 mt-5 text-body-sm font-semibold transition-colors",
          highlighted
            ? "text-white hover:text-white/90"
            : "text-orange-400 hover:text-orange-300"
        )}
      >
        {item.ctaLabel}
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </>
  );

  const sharedClassName = cn(
    "flex flex-col p-5 md:p-6 h-full rounded-[14px] transition-all duration-300",
    highlighted
      ? "bg-orange-500 border border-orange-400/40 shadow-orange hover:bg-orange-600 hover:-translate-y-[3px]"
      : "card-base card-premium-hover",
    className
  );

  if (isExternal) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className={sharedClassName}>
      {content}
    </Link>
  );
}
