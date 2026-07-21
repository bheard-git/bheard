import { z } from "zod";

function checkOptionalUrl(
  data: { portfolioUrl?: string; linkedInUrl?: string },
  ctx: z.RefinementCtx,
  field: "portfolioUrl" | "linkedInUrl",
  label: string
) {
  const raw = (data[field] ?? "").trim();
  if (!raw) return;
  try {
    const u = new URL(raw);
    if (u.protocol !== "http:" && u.protocol !== "https:") {
      ctx.addIssue({ code: "custom", path: [field], message: `${label} must start with http:// or https://` });
    }
  } catch {
    ctx.addIssue({ code: "custom", path: [field], message: `Enter a valid ${label} URL` });
  }
}

export const careerApplicationFieldsSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Enter your full name (at least 2 characters)")
      .max(120, "Name is too long"),
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .email("Enter a valid email address")
      .max(200, "Email is too long"),
    phone: z
      .string()
      .trim()
      .min(8, "Enter a valid phone number (at least 8 characters)")
      .max(40, "Phone number is too long"),
    city: z
      .string()
      .trim()
      .min(2, "Enter your current city")
      .max(120, "City name is too long"),
    yearsExperience: z.string().trim().min(1, "Select your years of experience"),
    roleTitleApplied: z
      .string()
      .trim()
      .min(2, "Enter the role or area you are interested in")
      .max(200, "Role title is too long"),
    currentCompany: z.string().trim().max(200).optional().or(z.literal("")),
    portfolioUrl: z.string().trim().max(800).optional().or(z.literal("")),
    linkedInUrl: z.string().trim().max(800).optional().or(z.literal("")),
    expectedSalary: z.string().trim().max(120).optional().or(z.literal("")),
    noticePeriod: z.string().trim().max(120).optional().or(z.literal("")),
    coverLetter: z.string().trim().max(20000).optional().or(z.literal("")),
    referralSource: z.string().trim().max(160).optional().or(z.literal("")),
    workAuthorization: z.string().trim().max(160).optional().or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    checkOptionalUrl(data, ctx, "portfolioUrl", "Portfolio");
    checkOptionalUrl(data, ctx, "linkedInUrl", "LinkedIn");
  });

export type CareerApplicationFields = z.infer<typeof careerApplicationFieldsSchema>;

const allowedResumeMime = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const allowedExt = new Set([".pdf", ".doc", ".docx"]);

export const MAX_RESUME_BYTES = 5 * 1024 * 1024;

export function isAllowedResumeMime(mime: string, originalName: string) {
  const lower = originalName.toLowerCase();
  const ext = lower.slice(lower.lastIndexOf("."));
  if (!allowedExt.has(ext)) return false;
  return allowedResumeMime.has(mime) || mime === "application/octet-stream";
}

/** Normalize optional string fields for persistence */
export function normalizeApplicationFields(input: CareerApplicationFields) {
  const trimOrUndef = (s: string | undefined) => {
    const t = (s ?? "").trim();
    return t.length ? t : undefined;
  };
  return {
    ...input,
    noticePeriod: (input.noticePeriod ?? "").trim(),
    coverLetter: (input.coverLetter ?? "").trim(),
    currentCompany: trimOrUndef(input.currentCompany),
    portfolioUrl: trimOrUndef(input.portfolioUrl),
    linkedInUrl: trimOrUndef(input.linkedInUrl),
    expectedSalary: trimOrUndef(input.expectedSalary),
    referralSource: trimOrUndef(input.referralSource),
    workAuthorization: trimOrUndef(input.workAuthorization),
  };
}
