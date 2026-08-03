"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function DynamicBackground() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("[data-home-zone]")
    );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (!visible.length) return;

        const zone = visible[0].target.getAttribute(
          "data-home-zone"
        );

        switch (zone) {
          case "hero":
            setTheme("light");
            break;
          case "categories":
            setTheme("light");
            break;
          case "faculty":
            setTheme("dark");
            break;
          case "results":
          case "blogs":
          case "faq":
            setTheme("light");
            break;

          case "testimonials":
          case "footer":
            setTheme("dark");
            break;

          default:
            break;
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 -z-50 transition-colors duration-700 ease-in-out",

        theme === "dark"
          ? "bg-[#0A0A0A]"
          : "bg-[#F8F7F4]"
      )}
    />
  );
}