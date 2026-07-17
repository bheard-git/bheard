"use client";

import { useEffect, useState } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
  disabled?: boolean;
}

export function useInView<T extends Element>({
  once = true,
  disabled = false,
  root = null,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.15,
}: UseInViewOptions = {}) {
  const [node, setNode] = useState<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (disabled || !node || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && once) {
          observer.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [disabled, node, once, root, rootMargin, threshold]);

  return { ref: setNode, isInView };
}
