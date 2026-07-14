import type { Testimonial } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Arjun Patel",
    exam: "CAT",
    score: "99.5 %ile",
    college: "IIM Ahmedabad",
    quote: "Rodha's structured approach and personal mentorship transformed my preparation. The mock analysis sessions were invaluable.",
    year: 2024,
    category: "cat",
  },
  {
    id: "t2",
    name: "Sneha Rao",
    exam: "IPMAT",
    score: "AIR 12",
    college: "IIM Indore (IPM)",
    quote: "The IPMAT crash course was exactly what I needed. Focused content, great faculty, and the right strategy.",
    year: 2024,
    category: "ipmat",
  },
  {
    id: "t3",
    name: "Vikram Singh",
    exam: "CAT + GDPI",
    score: "99.2 %ile",
    college: "IIM Bangalore",
    quote: "From CAT prep to GDPI conversion, Rodha was with me at every step. Their GDPI mock sessions gave me the edge.",
    year: 2024,
    category: "gdpi",
  },
  {
    id: "t4",
    name: "Meera Krishnan",
    exam: "CLAT",
    score: "AIR 28",
    college: "NLSIU Bangalore",
    quote: "The legal reasoning workshops and daily current affairs updates made all the difference in my CLAT preparation.",
    year: 2024,
    category: "clat",
  },
];

export function getTestimonialsByCategory(categoryId: string): Testimonial[] {
  return testimonials.filter((t) => t.category === categoryId);
}
