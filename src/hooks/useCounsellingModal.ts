"use client";

import { useContext } from "react";
import { CounsellingModalContext } from "@/components/layout/CounsellingModalProvider";

export function useCounsellingModal() {
  const context = useContext(CounsellingModalContext);
  if (!context) {
    throw new Error("useCounsellingModal must be used within CounsellingModalProvider");
  }
  return context;
}
