"use client";

import { gsap } from "gsap";
import { useCallback, useEffect, useRef } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes(".")) {
      const decimals = str.split(".")[1];
      if (parseInt(decimals, 10) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;
      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0,
      };
      const formattedNumber = Intl.NumberFormat("en-US", options).format(latest);
      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  const startValue = direction === "down" ? to : from;
  const endValue = direction === "down" ? from : to;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.textContent = formatValue(startValue);

    if (!startWhen) {
      el.textContent = formatValue(endValue);
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      el.textContent = formatValue(endValue);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        onStart?.();

        const counter = { value: startValue };
        gsap.to(counter, {
          value: endValue,
          duration,
          delay,
          ease: "power2.out",
          onUpdate: () => {
            if (ref.current) {
              ref.current.textContent = formatValue(counter.value);
            }
          },
          onComplete: () => {
            onEnd?.();
          },
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startValue, endValue, duration, delay, formatValue, onStart, onEnd, startWhen]);

  return <span className={className} ref={ref} />;
}
