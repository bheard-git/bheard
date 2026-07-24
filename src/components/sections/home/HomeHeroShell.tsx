"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { HeroNeuralCanvas } from "@/components/sections/home/HeroNeuralCanvas";
import type { HeroMouseState } from "@/components/sections/home/HeroNeuralCanvas";

interface HomeHeroShellProps {
  children: ReactNode;
  className?: string;
}

export function HomeHeroShell({ children, className }: HomeHeroShellProps) {
  const mouseRef = useRef<HeroMouseState>({ x: -9999, y: -9999, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };

  return (
    <section
      id="site-hero"
      className={cn(
        "relative overflow-visible home-hero-shell pt-5 pb-6 md:pt-6 md:pb-7 lg:pt-6 lg:pb-7",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HeroNeuralCanvas mouseRef={mouseRef} />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}
