import { z } from "zod";

export const contactLeadSchema = z.object({
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
  phone: z.string().trim().max(40, "Phone number is too long").optional().or(z.literal("")),
  company: z.string().trim().max(160, "Company name is too long").optional().or(z.literal("")),
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
  message: true,
});

export type ContactLeadInput = z.infer<typeof contactLeadSchema>;
export type ContactLeadClientFields = z.infer<typeof contactLeadClientSchema>;
