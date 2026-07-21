"use client";

import Script from "next/script";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() ?? "";

type RecaptchaContextValue = {
  enabled: boolean;
  ready: boolean;
  executeRecaptcha: (action: string) => Promise<string | null>;
};

const RecaptchaContext = createContext<RecaptchaContextValue | null>(null);

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (key: string, options: { action: string }) => Promise<string>;
    };
  }
}

export function RecaptchaProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const enabled = Boolean(siteKey);

  const executeRecaptcha = useCallback(
    async (action: string) => {
      if (!enabled || !ready || !window.grecaptcha?.execute) {
        return null;
      }
      try {
        return await window.grecaptcha.execute(siteKey, { action });
      } catch {
        return null;
      }
    },
    [enabled, ready]
  );

  const value = useMemo(
    () => ({ enabled, ready, executeRecaptcha }),
    [enabled, ready, executeRecaptcha]
  );

  return (
    <RecaptchaContext.Provider value={value}>
      {enabled ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
          strategy="afterInteractive"
          onLoad={() => {
            window.grecaptcha?.ready(() => setReady(true));
          }}
        />
      ) : null}
      {children}
    </RecaptchaContext.Provider>
  );
}

export function useRecaptcha() {
  const ctx = useContext(RecaptchaContext);
  if (!ctx) {
    throw new Error("useRecaptcha must be used within RecaptchaProvider");
  }
  return ctx;
}

export function RecaptchaNotice({ className = "" }: { className?: string }) {
  if (!siteKey) return null;
  return (
    <p className={`text-xs leading-relaxed text-on-surface-variant/80 ${className}`.trim()}>
      This site is protected by reCAPTCHA and the Google{" "}
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 hover:text-on-surface"
      >
        Privacy Policy
      </a>{" "}
      and{" "}
      <a
        href="https://policies.google.com/terms"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 hover:text-on-surface"
      >
        Terms of Service
      </a>{" "}
      apply.
    </p>
  );
}
