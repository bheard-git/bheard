import {
  Eye,
  Percent,
  ShoppingBag,
  Star,
  TrendingDown,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { CaseStudyStat } from "@/lib/case-studies/types";

function getStatIcon(label: string): LucideIcon | "bullet" {
  const normalized = label.toLowerCase();

  if (normalized.includes("rating") || normalized.includes("star")) {
    return Star;
  }
  if (normalized.includes("engagement") || normalized.includes("rate")) {
    return Percent;
  }
  if (normalized.includes("reach") || normalized.includes("views") || normalized.includes("impression")) {
    return Eye;
  }
  if (
    normalized.includes("follower") ||
    normalized.includes("reader") ||
    normalized.includes("user") ||
    normalized.includes("member")
  ) {
    return Users;
  }
  if (normalized.includes("purchase") || normalized.includes("sale") || normalized.includes("demo")) {
    return ShoppingBag;
  }
  if (normalized.includes("cac") || normalized.includes("lower")) {
    return TrendingDown;
  }
  if (normalized.includes("growth") || normalized.includes("concurrent")) {
    return TrendingUp;
  }

  return "bullet";
}

export function StatValue({ value }: { value: string }) {
  if (value.includes("★")) {
    const numeric = value.replace("★", "").trim();

    return (
      <span className="inline-flex items-baseline gap-0.5">
        <span>{numeric}</span>
        <Star className="h-3.5 w-3.5 fill-primary text-primary md:h-4 md:w-4" aria-hidden />
      </span>
    );
  }

  return <span>{value}</span>;
}

function StatMarker({ label }: { label: string }) {
  const icon = getStatIcon(label);

  if (icon === "bullet") {
    return (
      <span aria-hidden className="text-sm font-bold leading-none text-primary">
        ·
      </span>
    );
  }

  const Icon = icon;

  return <Icon className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2} aria-hidden />;
}

export default function CaseStudyCardStats({ stats }: { stats: CaseStudyStat[] }) {
  if (!stats.length) return null;

  const columnClass =
    stats.length === 1 ? "grid-cols-1" : stats.length === 2 ? "grid-cols-2" : "grid-cols-3";

  return (
    <div className="mt-4 border-t border-outline-variant/50 pt-3">
      <ul className={`grid gap-2 sm:gap-3 ${columnClass}`}>
        {stats.map((stat) => (
          <li key={`${stat.value}-${stat.label}`} className="min-w-0 text-left">
            <p className="flex items-center gap-1 font-headline text-base font-bold leading-none tracking-tight text-on-background md:text-lg">
              <StatValue value={stat.value} />
              <StatMarker label={stat.label} />
            </p>
            <p className="mt-1.5 font-body text-[11px] leading-snug text-on-surface-variant md:text-xs">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
