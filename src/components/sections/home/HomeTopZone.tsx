"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { HeroNeuralCanvas } from "@/components/sections/home/HeroNeuralCanvas";
import type { HeroMouseState } from "@/components/sections/home/HeroNeuralCanvas";

interface HomeTopZoneProps {
  children: ReactNode;
  className?: string;
}

export function HomeTopZone({ children, className }: HomeTopZoneProps) {
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
    <div
      className={cn("home-top-zone relative", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 overflow-clip pointer-events-none">
        <HeroNeuralCanvas mouseRef={mouseRef} className="home-top-zone-canvas" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
