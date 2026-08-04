"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

interface VerticalMarqueeProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;

  /**
   * Pixels per second.
   */
  speed?: number;

  /**
   * up | down
   */
  direction?: "up" | "down";

  /**
   * Gap between items.
   */
  gap?: number;

  pauseOnHover?: boolean;
}

export function VerticalMarquee({
  children,
  className,
  itemClassName,
  speed = 40,
  direction = "up",
  gap = 20,
  pauseOnHover = true,
}: VerticalMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const sizeRef = useRef(0);
  const offsetRef = useRef(0);

  const frameRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const [paused, setPaused] = useState(false);

  const updateHeight = useCallback(() => {
    if (!trackRef.current) return;

    const firstGroup = trackRef.current.children[0] as HTMLElement;

    if (!firstGroup) return;

    sizeRef.current = firstGroup.getBoundingClientRect().height;
  }, []);

  useEffect(() => {
    updateHeight();

    const observer = new ResizeObserver(updateHeight);

    if (trackRef.current) {
      observer.observe(trackRef.current);
    }

    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [updateHeight]);

  useEffect(() => {
    const animate = (time: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      if (!paused && sizeRef.current > 0) {
        const distance = speed * delta;

        if (direction === "up") {
          offsetRef.current -= distance;

          if (-offsetRef.current >= sizeRef.current) {
            offsetRef.current += sizeRef.current;
          }
        } else {
          offsetRef.current += distance;

          if (offsetRef.current >= 0) {
            offsetRef.current -= sizeRef.current;
          }
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(0, ${offsetRef.current}px, 0)`;
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [direction, paused, speed]);

  return (
    <div
        className={cn(
            "relative h-full overflow-hidden",
            className
        )}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div
        ref={trackRef}
        className={cn(
          "flex flex-col will-change-transform",
          itemClassName
        )}
        style={{ gap }}
      >
        <div
          className="flex flex-col shrink-0"
          style={{ gap }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="shrink-0"
            >
              {child}
            </div>
          ))}
        </div>

        <div
          aria-hidden
          className="flex flex-col shrink-0"
          style={{ gap }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={`clone-${index}`}
              className="shrink-0"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}