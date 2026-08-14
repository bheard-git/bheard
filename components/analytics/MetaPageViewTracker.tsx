"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function MetaPageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialRender = useRef(true);
  const query = searchParams?.toString() ?? "";

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    window.fbq?.("track", "PageView");
  }, [pathname, query]);

  return null;
}
