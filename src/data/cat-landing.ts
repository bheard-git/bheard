import type { ResultStat } from "@/lib/types";
import { EXTERNAL_URLS } from "@/lib/constants";

export interface CatHeroFeature {
  id: string;
  label: string;
  icon: string;
}

export interface CatStat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface TestSeriesItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  icon: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  icon: string;
  highlighted?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const CAT_HERO_FEATURES: CatHeroFeature[] = [
  {
    id: "live-classes",
    label: "150+ Hours Live Classes",
    icon: "/assets/icons/video.svg",
  },
  {
    id: "practice",
    label: "5000+ Practice Questions",
    icon: "/assets/icons/book.svg",
  },
  {
    id: "mocks",
    label: "50+ Full Length Mock Tests",
    icon: "/assets/icons/practice.svg",
  },
  {
    id: "mentorship",
    label: "Personalised Mentorship",
    icon: "/assets/icons/mentorship.svg",
  },
];

export const CAT_QUICK_STATS: CatStat[] = [
  {
    id: "selections",
    value: "10,000+",
    label: "Selections",
    icon: "/assets/icons/result-oriented.svg",
  },
  {
    id: "iim-calls",
    value: "250+",
    label: "IIM Calls in 2024",
    icon: "/assets/icons/check.svg",
  },
  {
    id: "satisfaction",
    value: "98.7%",
    label: "Student Satisfaction",
    icon: "/assets/icons/heart.svg",
  },
  {
    id: "excellence",
    value: "15+",
    label: "Years Of Excellence",
    icon: "/assets/icons/star.svg",
  },
  {
    id: "rating",
    value: "4.8/5",
    label: "Google Rating",
    icon: "/assets/icons/star.svg",
  },
];

export const CAT_RESULT_STATS: ResultStat[] = [
  {
    label: "Selections",
    value: "10,000",
    suffix: "+",
    description: "across all CAT batches",
  },
  {
    label: "Top 100 Ranks",
    value: "250",
    suffix: "+",
    description: "in the last 3 years",
  },
  {
    label: "IIM Calls in 2024",
    value: "1,200",
    suffix: "+",
    description: "from Rodha aspirants",
  },
];

export const CAT_TEST_SERIES: TestSeriesItem[] = [
  {
    id: "cat-mocks",
    title: "CAT Mocks",
    description: "Full-length mocks designed to mirror the real CAT exam experience.",
    features: ["20+ Full Length Mocks", "Detailed Analytics", "All-India Percentile"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/icons/test-series.svg",
  },
  {
    id: "sectional-tests",
    title: "Sectional Tests",
    description: "Sharpen QA, VARC & DILR with focused sectional practice.",
    features: ["60+ Sectional Tests", "Timed Practice", "Topic Weightage Maps"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/icons/practice.svg",
  },
  {
    id: "topic-tests",
    title: "Topic Tests",
    description: "Build depth with micro-tests after every concept class.",
    features: ["200+ Topic Tests", "Instant Solutions", "Weak Area Tracking"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/icons/book.svg",
  },
  {
    id: "mini-mocks",
    title: "Mini Mocks",
    description: "Quick 30–45 min simulations for daily exam stamina.",
    features: ["40+ Mini Mocks", "Speed Drills", "Smart Revision Sets"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/icons/clock.svg",
  },
];

export const CAT_RESOURCES: ResourceItem[] = [
  {
    id: "free-resources",
    title: "Free CAT Resources",
    description: "Access curated formulas, previous papers, and strategy guides — free for every aspirant.",
    ctaLabel: "Access Now",
    href: "/blog",
    icon: "/assets/icons/download.svg",
  },
  {
    id: "free-demo",
    title: "Attend a Free Demo",
    description: "Experience a live CAT class with our star faculty before you enroll.",
    ctaLabel: "Book Your Demo",
    href: "/contact",
    icon: "/assets/icons/play.svg",
  },
  {
    id: "webinars",
    title: "Upcoming Webinars",
    description: "Join free webinars on exam strategy, percentile targeting, and IIM interview prep.",
    ctaLabel: "Register Now",
    href: "/blog",
    icon: "/assets/icons/calendar.svg",
  },
  {
    id: "counsellor",
    title: "Talk to a Counsellor",
    description: "Get a personalised preparation roadmap mapped to your profile and timeline.",
    ctaLabel: "Contact Now",
    href: "/contact",
    icon: "/assets/icons/phone.svg",
    highlighted: true,
  },
];

export const CAT_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is the best time to start CAT preparation?",
    answer:
      "Ideally 8–12 months before the exam. Early starters can build concepts deeply, while later batches focus on mocks and revision. Rodha offers Complete, Pro, Crash, and Foundation tracks for every timeline.",
  },
  {
    id: "faq-2",
    question: "Are classes live or recorded?",
    answer:
      "Most programs include live interactive classes plus full recordings. You can revise anytime, and miss a session without falling behind.",
  },
  {
    id: "faq-3",
    question: "Does Rodha provide mock tests for CAT?",
    answer:
      "Yes. You get full-length mocks, sectional tests, topic tests, and mini mocks with detailed analytics and All-India percentiles via our test platform.",
  },
  {
    id: "faq-4",
    question: "Is personalised mentorship included?",
    answer:
      "Yes. Mentors help you build a study plan, review mock performance, and stay accountable through one-on-one guidance sessions.",
  },
  {
    id: "faq-5",
    question: "Can working professionals join CAT batches?",
    answer:
      "Absolutely. Evening and weekend-friendly schedules, recordings, and flexible mentorship make preparation workable alongside a full-time job.",
  },
  {
    id: "faq-6",
    question: "How do I enroll in a CAT course?",
    answer:
      "Choose a program on this page, click Enroll, and complete signup on our learning platform. For guidance, book a free counselling call first.",
  },
];
