import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Tag({ children, active, onClick, className }: TagProps) {
  const Component = onClick ? "button" : "span";

  return (
    <Component
      onClick={onClick}
      className={cn(
        "inline-flex items-center px-3 py-1 text-body-sm rounded-full transition-all",
        active
          ? "bg-orange-500/15 text-orange-400 border border-orange-500/30"
          : "bg-bg-surface text-text-muted border border-border-default hover:border-border-hover hover:text-text-secondary",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </Component>
  );
}
