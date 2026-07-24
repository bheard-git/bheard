export interface ImpactMilestone {
  id: string;
  year: string;
  title: string;
  achievement: string;
  growthValue: string;
  growthLabel: string;
  /** 0–1 position along the timeline path */
  position: number;
}

export interface ImpactStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  image: string;
}

export const IMPACT_MILESTONES: ImpactMilestone[] = [
  {
    id: "m1",
    year: "2014",
    title: "The Beginning",
    achievement: "Founded with a vision to transform exam prep",
    growthValue: "5,000+",
    growthLabel: "Students",
    position: 0.08,
  },
  {
    id: "m2",
    year: "2016",
    title: "Growing Stronger",
    achievement: "Expanded faculty & programs nationwide",
    growthValue: "25,000+",
    growthLabel: "Students",
    position: 0.35,
  },
  {
    id: "m3",
    year: "2019",
    title: "Expanding Horizons",
    achievement: "Launched multi-exam platform",
    growthValue: "1,00,000+",
    growthLabel: "Students",
    position: 0.62,
  },
  {
    id: "m4",
    year: "2026",
    title: "Leading the Future",
    achievement: "2.5L+ students mentored",
    growthValue: "2,50,000+",
    growthLabel: "Students",
    position: 0.92,
  },
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: "students",
    value: 250000,
    suffix: "+",
    label: "Students Mentored",
    image: "/assets/images/icons/selection.png",
  },
  {
    id: "hours",
    value: 500000,
    suffix: "+",
    label: "Hours of Teaching",
    image: "/assets/images/icons/ts-sectional.png",
  },
  {
    id: "selections",
    value: 10000,
    suffix: "+",
    label: "Selections in Top Institutes",
    image: "/assets/images/icons/rank.png",
  },
];

/** SVG viewBox path — upward Bézier growth curve */
export const IMPACT_TIMELINE_PATH =
  "M 20 180 C 80 175, 120 150, 160 130 S 260 80, 340 55 S 420 25, 480 15";
