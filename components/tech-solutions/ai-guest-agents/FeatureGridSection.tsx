import {
  Bed,
  Clock,
  Headphones,
  HelpCircle,
  TrendingUp,
  UserCheck,
  Utensils,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { aiGuestAgentsContent } from "@/lib/content/ai-guest-agents";
import { aiGuestBandY, aiGuestContainer, sectionBgWhite } from "./sectionTheme";

const featureIcons: Record<string, LucideIcon> = {
  zap: Zap,
  bed: Bed,
  utensils: Utensils,
  "user-check": UserCheck,
  "trending-up": TrendingUp,
  "help-circle": HelpCircle,
  headphones: Headphones,
  clock: Clock,
};

function FeatureCell({
  icon,
  title,
  description,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}) {
  const Icon = icon;
  return (
    <div className={`flex gap-3 px-4 py-4 md:gap-4 md:px-5 md:py-5 ${className}`}>
      <Icon className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
      <div className="min-w-0">
        <h3 className="font-headline text-sm font-bold uppercase tracking-tight text-on-background md:text-base">
          {title}
        </h3>
        <p className="mt-1 font-body text-sm leading-relaxed text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}

function cellBorderClass(index: number, total: number, cols: number): string {
  const col = index % cols;
  const row = Math.floor(index / cols);
  const lastRow = Math.floor((total - 1) / cols);
  const classes: string[] = ["border-outline-variant/60"];

  if (col < cols - 1) classes.push("md:border-r");
  if (row < lastRow) classes.push("border-b");

  return classes.join(" ");
}

export default function FeatureGridSection() {
  const { features } = aiGuestAgentsContent;
  const HighlightIcon = featureIcons[features.highlight.icon] ?? Clock;

  return (
    <section className={`${sectionBgWhite} ${aiGuestBandY}`}>
      <div className={aiGuestContainer}>
        <h2 className="text-center font-headline text-[clamp(1.75rem,3.5vw,2.75rem)] font-black uppercase leading-tight tracking-tight text-on-background">
          {features.headingLine1}
          <br />
          <span className="text-primary">{features.headingLine2}</span>
        </h2>

        <div className="mt-8 overflow-hidden rounded-xl border border-outline-variant/60 md:mt-10">
          <div className="grid md:grid-cols-3">
            {features.items.map((item, i) => {
              const Icon = featureIcons[item.icon] ?? Zap;
              return (
                <FeatureCell
                  key={item.title}
                  icon={Icon}
                  title={item.title}
                  description={item.description}
                  className={cellBorderClass(i, features.items.length, 3)}
                />
              );
            })}

            <div className="flex gap-3 border-t border-outline-variant/60 bg-primary/5 px-4 py-4 md:col-span-2 md:gap-4 md:border-t-0 md:px-5 md:py-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white md:h-11 md:w-11">
                <HighlightIcon className="h-5 w-5 text-primary md:h-6 md:w-6" strokeWidth={1.5} aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="font-headline text-xl font-black text-primary md:text-2xl">24/7</p>
                <h3 className="mt-0.5 font-headline text-sm font-bold uppercase tracking-tight text-on-background md:text-base">
                  {features.highlight.title}
                </h3>
                <p className="mt-1 font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
                  {features.highlight.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
