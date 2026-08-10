import { z } from "zod";

export const INTERESTED_IN_OPTIONS = [
  "Brand Solutions",
  "Tech Solutions",
  "AI Agents",
  "Not sure",
] as const;

export type InterestedInOption = (typeof INTERESTED_IN_OPTIONS)[number];

export const contactLeadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name")
    .max(120, "Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address")
    .max(200, "Email is too long"),
  phone: z.string().trim().max(40, "Phone number is too long").optional().or(z.literal("")),
  company: z.string().trim().max(160, "Company name is too long").optional().or(z.literal("")),
  interestedIn: z
    .string()
    .trim()
    .min(1, "Please select what you're interested in.")
    .refine((value) => (INTERESTED_IN_OPTIONS as readonly string[]).includes(value), {
      message: "Please select what you're interested in.",
    }),
  message: z
    .string()
    .trim()
    .min(20, "Please share a bit more detail (at least 20 characters)")
    .max(5000, "Message is too long (max 5000 characters)"),
  sourcePage: z.string().trim().max(240).optional().or(z.literal("")),
  recaptchaToken: z.string().trim().min(1).max(4000).optional(),
});

/** Client form fields only (validated before submit). */
export const contactLeadClientSchema = contactLeadSchema.pick({
  fullName: true,
  email: true,
  phone: true,
  company: true,
  interestedIn: true,
  message: true,
});

export type ContactLeadInput = z.infer<typeof contactLeadSchema>;
export type ContactLeadClientFields = z.infer<typeof contactLeadClientSchema>;
