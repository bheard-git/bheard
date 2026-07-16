import Link from "next/link";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  label?: string;
  description?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  label,
  description,
  viewAllHref,
  viewAllLabel = "View All",
  align = "left",
  className,
}: SectionHeaderProps) {
  const isExternal = Boolean(viewAllHref?.startsWith("http"));
  const hasSplitIntro = Boolean(description);

  return (
    <div
      className={cn(
        "section-header",
        align === "center" && "text-center",
        viewAllHref && align === "left" && !hasSplitIntro && "flex items-end justify-between gap-4",
        hasSplitIntro && "grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end",
        className
      )}
    >
      <div className={cn(hasSplitIntro && "lg:col-span-7")}>
        {label && (
          <p className="text-body-sm uppercase tracking-wider text-orange-400 font-semibold mb-2">
            {label}
          </p>
        )}
        <h2 className="text-h2 md:text-h1 font-bold text-text-primary">{title}</h2>
        {subtitle && (
          <p
            className={cn(
              "mt-1 text-body text-text-muted",
              align === "center" && "max-w-2xl mx-auto"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>

      {description && (
        <p className="lg:col-span-5 text-body text-text-muted leading-relaxed lg:text-right">
          {description}
        </p>
      )}

      {viewAllHref &&
        !hasSplitIntro &&
        (isExternal ? (
          <a
            href={viewAllHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-view-all hidden md:inline-flex"
          >
            {viewAllLabel}
          </a>
        ) : (
          <Link href={viewAllHref} className="btn-view-all hidden md:inline-flex">
            {viewAllLabel}
          </Link>
        ))}
    </div>
  );
}
