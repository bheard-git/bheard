import Link from "next/link";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  viewAllHref,
  viewAllLabel = "View All",
  align = "left",
  className,
}: SectionHeaderProps) {
  const isExternal = Boolean(viewAllHref?.startsWith("http"));

  return (
    <div
      className={cn(
        "mb-4 md:mb-5",
        align === "center" && "text-center",
        viewAllHref && align === "left" && "flex items-end justify-between gap-4",
        className
      )}
    >
      <div>
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
      {viewAllHref &&
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
