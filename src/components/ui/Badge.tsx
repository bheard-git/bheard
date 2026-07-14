import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-orange-500 text-white border border-orange-500",
  success: "bg-accent-green text-white border border-accent-green",
  danger: "bg-accent-red text-white border border-accent-red",
  info: "bg-accent-blue text-white border border-accent-blue",
  default: "bg-bg-primary/80 text-orange-400 border border-orange-500/30",
  outline: "bg-bg-primary/80 text-orange-400 border border-orange-500/30",
} as const;

const sizes = {
  sm: "",
  md: "h-6 px-2.5 text-[11px]",
} as const;

interface BadgeProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <span className={cn("badge-base", variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
}
