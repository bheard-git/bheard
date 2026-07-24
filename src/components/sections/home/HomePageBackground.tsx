import { cn } from "@/lib/utils";

interface HomePageBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function HomePageBackground({ children, className }: HomePageBackgroundProps) {
  return (
    <div className={cn("home-page-canvas relative", className)}>
      <div className="home-page-canvas-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
