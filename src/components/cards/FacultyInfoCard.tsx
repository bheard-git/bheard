import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

interface FacultyInfoCardProps {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "quote";
  className?: string;
}

export function FacultyInfoCard({
  title,
  children,
  variant = "default",
  className,
}: FacultyInfoCardProps) {
  return (
    <div
      className={cn(
        "card-base card-premium-hover premium-border-glow hover-shine flex flex-col rounded-xl bg-bg-secondary p-5 md:p-6 h-full min-h-0",
        className
      )}
    >
      <h3 className="text-h4 font-semibold text-text-primary">{title}</h3>
      <div className="mt-3 flex-1 min-h-0">
        {variant === "quote" ? (
          <div className="relative">
            <Icon
              src="/assets/icons/quote.svg"
              size={28}
              className="text-orange-500 mb-2"
            />
            <p className="text-body text-text-secondary italic leading-relaxed">
              {children}
            </p>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
