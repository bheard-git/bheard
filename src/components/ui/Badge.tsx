import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-orange-500/15 text-orange-400 border-orange-500/20",
  success: "bg-accent-green/15 text-accent-green border-accent-green/20",
  danger: "bg-accent-red/15 text-accent-red border-accent-red/20",
  info: "bg-accent-blue/15 text-accent-blue border-accent-blue/20",
  default: "bg-bg-surface text-text-muted border-border-default",
} as const;

const sizes = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-2.5 py-1 text-caption",
} as const;

interface BadgeProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
}

export function Badge({ children, variant = "default", size = "md", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "badge-base border",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
