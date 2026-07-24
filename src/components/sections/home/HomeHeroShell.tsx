import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HomeHeroShellProps {
  children: ReactNode;
  className?: string;
}

export function HomeHeroShell({ children, className }: HomeHeroShellProps) {
  return (
    <section
      id="site-hero"
      className={cn(
        "relative home-hero-shell home-section-spacing pt-5 md:pt-6 lg:pt-6",
        className
      )}
    >
      {children}
    </section>
  );
}
