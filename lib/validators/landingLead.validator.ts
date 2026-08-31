import { z } from "zod";

export const HOTEL_MARKETING_INTEREST_OPTIONS = [
  "Marketing & Social",
  "Performance Marketing",
  "Technology / Digital",
  "AI & Automation",
  "Not sure yet",
] as const;

export type HotelMarketingInterest =
  (typeof HOTEL_MARKETING_INTEREST_OPTIONS)[number];

export const HOTEL_PROPERTY_TYPE_OPTIONS = [
  "Hotel",
  "Resort",
  "F&B",
  "Other",
] as const;

export type HotelPropertyType =
  (typeof HOTEL_PROPERTY_TYPE_OPTIONS)[number];

export const hotelMarketingLeadClientSchema =
  z.object({
    propertyName: z
      .string()
      .trim()
      .min(2, "Please enter your property or brand name."),

    propertyType: z
      .string()
      .refine(
        (value): value is HotelPropertyType =>
          HOTEL_PROPERTY_TYPE_OPTIONS.includes(
            value as HotelPropertyType
          ),
        {
          message: "Please select your property type.",
        }
      ),

    fullName: z
      .string()
      .trim()
      .min(2, "Please enter your name."),

    email: z
      .string()
      .trim()
      .email("Please enter a valid work email."),

    phone: z
      .string()
      .trim()
      .min(7, "Please enter a valid phone number."),

    interestedIn: z
      .string()
      .refine(
        (value): value is HotelMarketingInterest =>
          HOTEL_MARKETING_INTEREST_OPTIONS.includes(
            value as HotelMarketingInterest
          ),
        {
          message:
            "Please select what you need help with.",
        }
      ),

    message: z
      .string()
      .trim()
      .max(
        1000,
        "Message must be less than 1000 characters."
      )
      .optional()
      .or(z.literal("")),
  });

export type HotelMarketingLeadClientFields =
  z.infer<typeof hotelMarketingLeadClientSchema>;