/** Curated imagery for the Industries hub page (reference-aligned). */

export type IndustryVisual = {
  iconSrc: string;
  imageSrc: string;
  imageAlt: string;
};

export const INDUSTRY_VISUALS: Record<string, IndustryVisual> = {
  "consumer-fmcg": {
    iconSrc: "/assets/industries/icons/shopping-bag.svg",
    imageSrc:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Shopping cart filled with colorful consumer products in a supermarket aisle",
  },
  "hospitality-luxury": {
    iconSrc: "/assets/industries/icons/cloche.svg",
    imageSrc:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Luxury tropical resort pool at dusk with palm trees and warm lighting",
  },
  "health-wellness": {
    iconSrc: "/assets/industries/icons/lotus.svg",
    imageSrc:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Zen stones, essential oil bottles, and greenery on a wooden surface",
  },
  "travel-tourism": {
    iconSrc: "/assets/industries/icons/paper-plane.svg",
    imageSrc:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Aerial view of a tropical coastline with turquoise water and white sand",
  },
  "education-edtech": {
    iconSrc: "/assets/industries/icons/graduation-cap.svg",
    imageSrc:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Students in a classroom engaged with digital learning on a large screen",
  },
} as const;
