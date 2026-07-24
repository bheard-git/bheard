"use client";

import { useEffect } from "react";

const BODY_CLASS = "home-gradient-page";

export function HomePageBodyTheme() {
  useEffect(() => {
    document.body.classList.add(BODY_CLASS);
    return () => {
      document.body.classList.remove(BODY_CLASS);
    };
  }, []);

  return null;
}
