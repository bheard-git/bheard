type MetaPixelFunction = (
  action: "track",
  eventName: "Lead" | "PageView",
  parameters?: Record<string, string>
) => void;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: MetaPixelFunction;
  }
}

type LeadSubmissionEvent = {
  formName: "contact_form" | "lead_form";
  sourcePage: string;
};

export function trackLeadSubmission({
  formName,
  sourcePage,
}: LeadSubmissionEvent) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event: "generate_lead",
    form_name: formName,
    source_page: sourcePage,
  });

  window.fbq?.("track", "Lead", {
    content_name: formName,
    source_page: sourcePage,
  });
}

export {};
