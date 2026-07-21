"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import ContactPopupModal from "@/components/ContactPopupModal";

export type LeadFormOptions = {
  sourcePage?: string;
  title?: string;
  subtitle?: string;
};

type LeadFormContextValue = {
  openLeadForm: (options?: LeadFormOptions) => void;
  closeLeadForm: () => void;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

const DEFAULT_OPTIONS: Required<Pick<LeadFormOptions, "sourcePage" | "title" | "subtitle">> = {
  sourcePage: "/",
  title: "Let's talk",
  subtitle:
    "Tell us about your brand goals - we'll respond within one business day.",
};

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<LeadFormOptions>({});

  const openLeadForm = useCallback((next?: LeadFormOptions) => {
    setOptions(next ?? {});
    setOpen(true);
  }, []);

  const closeLeadForm = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({ openLeadForm, closeLeadForm }),
    [openLeadForm, closeLeadForm]
  );

  return (
    <LeadFormContext.Provider value={value}>
      {children}
      <ContactPopupModal
        open={open}
        onClose={closeLeadForm}
        sourcePage={options.sourcePage ?? DEFAULT_OPTIONS.sourcePage}
        title={options.title ?? DEFAULT_OPTIONS.title}
        subtitle={options.subtitle ?? DEFAULT_OPTIONS.subtitle}
      />
    </LeadFormContext.Provider>
  );
}

export function useLeadForm() {
  const ctx = useContext(LeadFormContext);
  if (!ctx) {
    throw new Error("useLeadForm must be used within LeadFormProvider");
  }
  return ctx;
}
