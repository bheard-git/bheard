"use client";

import { useEffect } from "react";

const CSS_VARS = [
  "--home-hero-end",
  "--home-categories-end",
  "--home-light-end",
  "--home-app-end",
] as const;

const ZONE_SELECTORS: Record<string, string> = {
  hero: "#site-hero",
  categories: '[data-home-zone="categories"]',
  results: '[data-home-zone="results"]',
  appPromo: '[data-home-zone="app-promo"]',
};

function getBottomPercent(el: HTMLElement, canvas: HTMLElement): number {
  const canvasTop = canvas.getBoundingClientRect().top + window.scrollY;
  const elBottom = el.getBoundingClientRect().bottom + window.scrollY;
  const total = canvas.offsetHeight;
  if (total <= 0) return 0;
  return Math.min(100, Math.max(0, ((elBottom - canvasTop) / total) * 100));
}

function updateAnchors() {
  const canvas = document.querySelector<HTMLElement>(".home-page-canvas");
  if (!canvas) return;

  const hero = document.querySelector<HTMLElement>(ZONE_SELECTORS.hero);
  const categories = document.querySelector<HTMLElement>(ZONE_SELECTORS.categories);
  const results = document.querySelector<HTMLElement>(ZONE_SELECTORS.results);
  const appPromo = document.querySelector<HTMLElement>(ZONE_SELECTORS.appPromo);

  const root = document.documentElement;

  if (hero) {
    root.style.setProperty("--home-hero-end", `${getBottomPercent(hero, canvas).toFixed(2)}%`);
  }
  if (categories) {
    root.style.setProperty(
      "--home-categories-end",
      `${getBottomPercent(categories, canvas).toFixed(2)}%`
    );
  }
  if (results) {
    root.style.setProperty("--home-light-end", `${getBottomPercent(results, canvas).toFixed(2)}%`);
  }
  if (appPromo) {
    root.style.setProperty("--home-app-end", `${getBottomPercent(appPromo, canvas).toFixed(2)}%`);
  }
}

export function HomePageGradientAnchors() {
  useEffect(() => {
    const canvas = document.querySelector(".home-page-canvas");
    if (!canvas) return;

    updateAnchors();

    const observer = new ResizeObserver(() => {
      updateAnchors();
    });

    observer.observe(canvas);
    document.querySelectorAll(Object.values(ZONE_SELECTORS).join(",")).forEach((el) => {
      observer.observe(el);
    });

    window.addEventListener("resize", updateAnchors);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateAnchors);
      CSS_VARS.forEach((v) => document.documentElement.style.removeProperty(v));
    };
  }, []);

  return null;
}
