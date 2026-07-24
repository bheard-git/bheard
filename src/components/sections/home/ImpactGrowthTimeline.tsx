"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { ImpactGrowthBadge } from "@/components/sections/home/ImpactGrowthBadge";
import { ImpactTimelineAxisItem } from "@/components/sections/home/ImpactTimelineAxisItem";
import { IMPACT_MILESTONES, IMPACT_TIMELINE_PATH } from "@/data/home-impact";

const VIEWBOX_WIDTH = 500;
const VIEWBOX_HEIGHT = 200;

interface ImpactGrowthTimelineProps {
  className?: string;
}

function getMilestonePoint(
  path: SVGPathElement | null,
  pathLength: number,
  position: number
) {
  if (!path || pathLength === 0) return null;
  const point = path.getPointAtLength(position * pathLength);
  return {
    x: point.x,
    y: point.y,
    leftPct: (point.x / VIEWBOX_WIDTH) * 100,
    topPct: (point.y / VIEWBOX_HEIGHT) * 100,
  };
}

export function ImpactGrowthTimeline({ className }: ImpactGrowthTimelineProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visibleMilestones, setVisibleMilestones] = useState(0);
  const [countersDone, setCountersDone] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  const { ref: containerRef, isInView } = useInView<HTMLDivElement>({
    once: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    if (!isInView) return;

    if (reducedMotion) {
      setProgress(1);
      setVisibleMilestones(IMPACT_MILESTONES.length);
      setCountersDone(true);
      return;
    }

    const duration = 2000;
    const start = performance.now();

    const animatePath = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);

      const milestoneCount = IMPACT_MILESTONES.filter((m) => m.position <= eased).length;
      setVisibleMilestones(milestoneCount);

      if (t < 1) {
        requestAnimationFrame(animatePath);
      } else {
        setVisibleMilestones(IMPACT_MILESTONES.length);
        setCountersDone(true);
      }
    };

    requestAnimationFrame(animatePath);
  }, [isInView, reducedMotion]);

  const dotPoint =
    pathRef.current && pathLength > 0
      ? pathRef.current.getPointAtLength(progress * pathLength)
      : null;

  return (
    <div ref={containerRef} className={cn("relative w-full ml-auto", className)}>
      {/* Growth path + student count badges */}
      <div className="relative w-full aspect-[5/2.1] min-h-[200px] sm:min-h-[220px]">
        <svg
          viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
          className="absolute inset-0 w-full h-full"
          aria-hidden
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="impact-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(249,115,22,0.3)" />
              <stop offset="50%" stopColor="rgba(251,146,60,0.9)" />
              <stop offset="100%" stopColor="rgba(249,115,22,1)" />
            </linearGradient>
            <filter id="impact-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d={IMPACT_TIMELINE_PATH}
            fill="none"
            stroke="rgba(249,115,22,0.12)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />

          <path
            ref={pathRef}
            d={IMPACT_TIMELINE_PATH}
            fill="none"
            stroke="url(#impact-line-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#impact-glow)"
            strokeDasharray={pathLength || 1000}
            strokeDashoffset={pathLength ? pathLength * (1 - progress) : 1000}
          />

          {dotPoint && progress > 0 && (
            <circle
              cx={dotPoint.x}
              cy={dotPoint.y}
              r="6"
              fill="#F97316"
              filter="url(#impact-glow)"
              className={cn(countersDone && "impact-milestone-pulse")}
            />
          )}

          {IMPACT_MILESTONES.map((milestone, index) => {
            const point = getMilestonePoint(pathRef.current, pathLength, milestone.position);
            if (!point) return null;
            const isVisible = index < visibleMilestones;
            const isLast = index === IMPACT_MILESTONES.length - 1;

            return (
              <g
                key={milestone.id}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: "opacity 0.5s ease",
                }}
              >
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="10"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="2"
                  className={cn(isLast && countersDone && "impact-milestone-pulse")}
                />
                <circle cx={point.x} cy={point.y} r="4" fill="white" />
              </g>
            );
          })}
        </svg>

        {/* Student growth badges — alternate above/below each node */}
        {IMPACT_MILESTONES.map((milestone, index) => {
          const point = getMilestonePoint(pathRef.current, pathLength, milestone.position);
          if (!point) return null;
          const isVisible = index < visibleMilestones;
          const placeAbove = index % 2 === 0;
          const offset = placeAbove ? "calc(-100% - 18px)" : "18px";

          return (
            <ImpactGrowthBadge
              key={`growth-${milestone.id}`}
              growthValue={milestone.growthValue}
              growthLabel={milestone.growthLabel}
              className="absolute z-10 hidden sm:block"
              style={{
                left: `${point.leftPct}%`,
                top: `${point.topPct}%`,
                opacity: isVisible ? 1 : 0,
                transform: `translate(-50%, ${offset})`,
                transition: `opacity 0.5s ease ${index * 0.12}s, transform 0.5s ease ${index * 0.12}s`,
              }}
            />
          );
        })}

        {/* Mobile: compact growth chips near nodes */}
        {IMPACT_MILESTONES.map((milestone, index) => {
          const point = getMilestonePoint(pathRef.current, pathLength, milestone.position);
          if (!point) return null;
          const isVisible = index < visibleMilestones;

          return (
            <div
              key={`growth-mobile-${milestone.id}`}
              className="absolute z-10 sm:hidden"
              style={{
                left: `${point.leftPct}%`,
                top: `${point.topPct}%`,
                opacity: isVisible ? 1 : 0,
                transform: "translate(-50%, -140%)",
                transition: `opacity 0.5s ease ${index * 0.12}s`,
              }}
            >
              <span className="inline-block px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/25 text-[9px] font-bold text-orange-600 whitespace-nowrap">
                {milestone.growthValue}
              </span>
            </div>
          );
        })}
      </div>

      {/* Timeline axis — year, title, description below the path */}
      <div className="relative w-full min-h-[88px] sm:min-h-[96px] mt-2 sm:mt-3">
        {IMPACT_MILESTONES.map((milestone, index) => {
          const point = getMilestonePoint(pathRef.current, pathLength, milestone.position);
          if (!point) return null;
          const isVisible = index < visibleMilestones;

          return (
            <ImpactTimelineAxisItem
              key={`axis-${milestone.id}`}
              year={milestone.year}
              title={milestone.title}
              achievement={milestone.achievement}
              className="absolute top-0"
              style={{
                left: `${point.leftPct}%`,
                transform: "translateX(-50%)",
                opacity: isVisible ? 1 : 0,
                transition: `opacity 0.5s ease ${index * 0.12 + 0.15}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
