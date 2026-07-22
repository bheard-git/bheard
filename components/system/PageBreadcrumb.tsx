import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type PageBreadcrumbItem = {
  label: string;
  href?: string;
};

type PageBreadcrumbProps = {
  items: PageBreadcrumbItem[];
  className?: string;
};

export default function PageBreadcrumb({ items, className }: PageBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
            {index > 0 ? (
              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-neutral-400" aria-hidden strokeWidth={2} />
            ) : null}
            {item.href ? (
              <Link href={item.href} className="font-semibold text-primary underline-offset-4 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-on-background">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
