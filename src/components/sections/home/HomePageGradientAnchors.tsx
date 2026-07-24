"use client";

import { useEffect } from "react";

const CSS_VARS = [
  "--home-warm-blend-start",
  "--home-orange-peak",
  "--home-warm-fade-start",
  "--home-light-start",
  "--home-light-end",
  "--home-bottom-warm-start",
  "--home-bottom-orange-peak",
  "--home-dark-plateau-start",
  "--home-page-end",
] as const;

const ZONE_SELECTORS: Record<string, string> = {
  hero: "#site-hero",
  categories: '[data-home-zone="categories"]',
  impact: '[data-home-zone="impact"]',
  results: '[data-home-zone="results"]',
  appPromo: '[data-home-zone="app-promo"]',
  cta: "#site-footer-cta",
  footer: '[data-home-zone="footer"]',
};

/** Dark-to-warm fade begins in the lower third of the hero (not at hero bottom). */
const HERO_WARM_BLEND_START_RATIO = 0.3;
/** Warmest orange sits in the upper-mid categories zone (behind exam cards). */
const CATEGORIES_ORANGE_PEAK_RATIO = 0.38;
/** Orange-to-cream fade begins in the lower half of categories. */
const CATEGORIES_FADE_START_RATIO = 0.58;
/** Full light plateau starts partway into Impact so the fade has vertical room. */
const IMPACT_LIGHT_START_RATIO = 0.32;
/** Full light plateau ends at Results; warm fade begins at App Promo top. */
const APP_PROMO_ORANGE_PEAK_RATIO = 0.82;
/** Dark plateau settles near the bottom of the CTA band. */
const CTA_DARK_PLATEAU_RATIO = 0.88;

function getPageHeight(): number {
  return document.body.scrollHeight;
}

function toPercent(y: number, pageHeight: number): number {
  if (pageHeight <= 0) return 0;
  return Math.min(100, Math.max(0, (y / pageHeight) * 100));
}

function getTopY(el: HTMLElement): number {
  return el.getBoundingClientRect().top + window.scrollY;
}

function getBottomY(el: HTMLElement): number {
  return el.getBoundingClientRect().bottom + window.scrollY;
}

function getHeight(el: HTMLElement): number {
  return el.getBoundingClientRect().height;
}

function setPercentVar(root: HTMLElement, name: string, value: number) {
  root.style.setProperty(name, `${value.toFixed(2)}%`);
}

function updateAnchors() {
  const pageHeight = getPageHeight();
  if (pageHeight <= 0) return;

  const hero = document.querySelector<HTMLElement>(ZONE_SELECTORS.hero);
  const categories = document.querySelector<HTMLElement>(ZONE_SELECTORS.categories);
  const impact = document.querySelector<HTMLElement>(ZONE_SELECTORS.impact);
  const results = document.querySelector<HTMLElement>(ZONE_SELECTORS.results);
  const appPromo = document.querySelector<HTMLElement>(ZONE_SELECTORS.appPromo);
  const cta = document.querySelector<HTMLElement>(ZONE_SELECTORS.cta);
  const footer = document.querySelector<HTMLElement>(ZONE_SELECTORS.footer);

  const root = document.documentElement;

  if (hero) {
    const heroTop = getTopY(hero);
    const heroHeight = getHeight(hero);
    setPercentVar(
      root,
      "--home-warm-blend-start",
      toPercent(heroTop + heroHeight * HERO_WARM_BLEND_START_RATIO, pageHeight)
    );
  }

  if (categories) {
    const catTop = getTopY(categories);
    const catHeight = getHeight(categories);
    setPercentVar(
      root,
      "--home-orange-peak",
      toPercent(catTop + catHeight * CATEGORIES_ORANGE_PEAK_RATIO, pageHeight)
    );
    setPercentVar(
      root,
      "--home-warm-fade-start",
      toPercent(catTop + catHeight * CATEGORIES_FADE_START_RATIO, pageHeight)
    );
  }

  if (impact) {
    const impactTop = getTopY(impact);
    const impactHeight = getHeight(impact);
    setPercentVar(
      root,
      "--home-light-start",
      toPercent(impactTop + impactHeight * IMPACT_LIGHT_START_RATIO, pageHeight)
    );
  }

  if (results) {
    setPercentVar(root, "--home-light-end", toPercent(getBottomY(results), pageHeight));
  }

  if (appPromo) {
    const appTop = getTopY(appPromo);
    const appHeight = getHeight(appPromo);
    setPercentVar(root, "--home-bottom-warm-start", toPercent(appTop, pageHeight));
    setPercentVar(
      root,
      "--home-bottom-orange-peak",
      toPercent(appTop + appHeight * APP_PROMO_ORANGE_PEAK_RATIO, pageHeight)
    );
  }
  if (cta) {
    const ctaTop = getTopY(cta);
    const ctaHeight = getHeight(cta);
    setPercentVar(
      root,
      "--home-dark-plateau-start",
      toPercent(ctaTop + ctaHeight * CTA_DARK_PLATEAU_RATIO, pageHeight)
    );
  }

  if (footer) {
    setPercentVar(root, "--home-page-end", toPercent(getBottomY(footer), pageHeight));
  } else {
    setPercentVar(root, "--home-page-end", 100);
  }
}

export function HomePageGradientAnchors() {
  useEffect(() => {
    const canvas = document.querySelector(".home-page-canvas");
    if (!canvas) return;

    let frame = 0;

    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateAnchors);
    };

    scheduleUpdate();

    const observer = new ResizeObserver(scheduleUpdate);

    observer.observe(document.body);
    observer.observe(canvas);
    document.querySelectorAll(Object.values(ZONE_SELECTORS).join(",")).forEach((el) => {
      observer.observe(el);
    });

    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", scheduleUpdate);
      CSS_VARS.forEach((v) => document.documentElement.style.removeProperty(v));
    };
  }, []);

  return null;
}
