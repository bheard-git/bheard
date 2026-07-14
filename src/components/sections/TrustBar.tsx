import { cn } from "@/lib/utils";

interface TrustBarProps {
  stats: readonly { label: string; value: string; suffix?: string }[];
  className?: string;
}

export function TrustBar({ stats, className }: TrustBarProps) {
  return (
    <section className={cn("py-8 border-y border-border-default bg-bg-secondary", className)}>
      <div className="container-rodha">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-h2 md:text-h1 font-bold text-orange-400">
                {stat.value}
                {stat.suffix && <span className="text-h3">{stat.suffix}</span>}
              </div>
              <div className="mt-1 text-body-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
