import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

interface ValuePropCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function ValuePropCard({ icon, title, description, className }: ValuePropCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center px-3 py-5 md:px-4 md:py-6 h-full rounded-[6px] bg-bg-tertiary border border-border-hover shadow-sm card-hover",
        className
      )}
    >
      <div className="text-orange-500">
        <Icon src={icon} size={30} />
      </div>
      <h3 className="mt-3 text-body font-semibold text-text-primary leading-snug">
        {title}
      </h3>
      <p className="mt-1.5 text-body-sm text-text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
