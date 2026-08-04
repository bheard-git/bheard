import type {
  CategoryHeroFeature,
  CategoryQuickStat,
  FaqItem,
  ResourceItem,
  ResultStat,
  TestSeriesItem,
} from "@/lib/types";
import { EXTERNAL_URLS } from "@/lib/constants";

export const BANKING_HERO_FEATURES: CategoryHeroFeature[] = [
  {
    id: "live-classes",
    label: "150+ Hours Live Classes",
    icon: "/assets/images/icons/ts-mini-mocks.png",
  },
  {
    id: "practice",
    label: "5000+ Practice Questions",
    icon: "/assets/images/icons/ts-topic.png",
  },
  {
    id: "mocks",
    label: "50+ Full Length Mock Tests",
    icon: "/assets/images/icons/ts-mocks.png",
  },
  {
    id: "mentorship",
    label: "Personalised Mentorship",
    icon: "/assets/images/icons/selection.png",
  },
];

export const BANKING_QUICK_STATS: CategoryQuickStat[] = [
  {
    id: "selections",
    value: "5,000+",
    label: "Selections",
    icon: "/assets/images/icons/selection.png",
  },
  {
    id: "banking-ssc",
    value: "500+",
    label: "Banking & SSC Selects",
    icon: "/assets/images/icons/CAT-icon.png",
  },
  {
    id: "satisfaction",
    value: "98%",
    label: "Student Satisfaction",
    icon: "/assets/images/icons/ts-mocks.png",
  },
  {
    id: "excellence",
    value: "15+",
    label: "Years Of Excellence",
    icon: "/assets/images/icons/rank.png",
  },
  {
    id: "rating",
    value: "4.8/5",
    label: "Google Rating",
    icon: "/assets/images/icons/cat-icon-3d.png",
  },
];

export const BANKING_RESULT_STATS: ResultStat[] = [
  {
    label: "Selections",
    value: "5,000",
    suffix: "+",
  },
  {
    label: "Top Ranks",
    value: "200",
    suffix: "+",
  },
];

export const BANKING_TEST_SERIES: TestSeriesItem[] = [
  {
    id: "banking-mocks",
    title: "Banking Mocks",
    description: "Full-length mocks designed to mirror IBPS, SBI and RBI exam patterns.",
    features: ["20+ Full Length Mocks", "Detailed Analytics", "All-India Percentile"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-mocks.png",
    value: "",
  },
  {
    id: "sectional-tests",
    title: "Sectional Tests",
    description: "Sharpen Quant, Reasoning & English with focused sectional practice.",
    features: ["60+ Sectional Tests", "Timed Practice", "Topic Weightage Maps"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-sectional.png",
    value: "",
  },
  {
    id: "topic-tests",
    title: "Topic Tests",
    description: "Build depth with micro-tests after every concept class.",
    features: ["200+ Topic Tests", "Instant Solutions", "Weak Area Tracking"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-topic.png",
    value: "",
  },
  {
    id: "ssc-mocks",
    title: "SSC Mini Mocks",
    description: "Quick simulations for SSC CGL, CHSL and related government exams.",
    features: ["40+ Mini Mocks", "Speed Drills", "Smart Revision Sets"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-mini-mocks.png",
    value: "",
  },
];

export const BANKING_RESOURCES: ResourceItem[] = [
  {
    id: "free-resources",
    title: "Free Banking Resources",
    description:
      "Access curated formulas, previous papers, and strategy guides — free for every aspirant.",
    ctaLabel: "Access Now",
    href: "/blog",
    icon: "/assets/icons/download.svg",
  },
  {
    id: "free-demo",
    title: "Attend a Free Demo",
    description:
      "Experience a live banking class with our star faculty before you enroll.",
    ctaLabel: "Book Your Demo",
    href: "/contact",
    icon: "/assets/icons/play.svg",
  },
  {
    id: "webinars",
    title: "Upcoming Webinars",
    description:
      "Join free webinars on banking exam strategy, SSC patterns, and interview prep.",
    ctaLabel: "Register Now",
    href: "/blog",
    icon: "/assets/icons/calendar.svg",
  },
  {
    id: "counsellor",
    title: "Talk to a Counsellor",
    description:
      "Get a personalised preparation roadmap mapped to your target exams and timeline.",
    ctaLabel: "Contact Now",
    href: "/contact",
    icon: "/assets/icons/phone.svg",
    highlighted: true,
  },
];

export const BANKING_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Which exams does Banking & Government cover?",
    answer:
      "Rodha covers major banking exams (IBPS, SBI, RBI) and government exams including SSC CGL, CHSL and related competitive tests — with shared foundations and exam-specific mocks.",
  },
  {
    id: "faq-2",
    question: "What is the best time to start preparation?",
    answer:
      "Ideally 6–12 months before your target exam. Early starters build concepts deeply; later batches focus on mocks and revision.",
  },
  {
    id: "faq-3",
    question: "Are classes live or recorded?",
    answer:
      "Most programs include live interactive classes plus full recordings so you can revise anytime.",
  },
  {
    id: "faq-4",
    question: "Does Rodha provide mock tests?",
    answer:
      "Yes. You get full-length mocks, sectional tests, topic tests, and SSC mini mocks with detailed analytics.",
  },
  {
    id: "faq-5",
    question: "Can working professionals join?",
    answer:
      "Absolutely. Evening and weekend-friendly schedules, recordings, and flexible mentorship make preparation workable alongside a full-time job.",
  },
  {
    id: "faq-6",
    question: "How do I enroll?",
    answer:
      "Choose a program on this page, click Enroll, and complete signup on our learning platform. For guidance, book a free counselling call first.",
  },
];
