import type {
  CategoryHeroFeature,
  CategoryQuickStat,
  FaqItem,
  ResourceItem,
  ResultStat,
  TestSeriesItem,
} from "@/lib/types";
import { EXTERNAL_URLS } from "@/lib/constants";

export const MBA_HERO_FEATURES: CategoryHeroFeature[] = [
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

export const MBA_QUICK_STATS: CategoryQuickStat[] = [
  {
    id: "selections",
    value: "10,000+",
    label: "Selections",
    icon: "/assets/images/icons/selection.png",
  },
  {
    id: "iim-calls",
    value: "250+",
    label: "IIM Calls in 2024",
    icon: "/assets/images/icons/CAT-icon.png",
  },
  {
    id: "satisfaction",
    value: "98.7%",
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

export const MBA_RESULT_STATS: ResultStat[] = [
  {
    label: "Selections",
    value: "10,000",
    suffix: "+",
  },
  {
    label: "Top 100 Ranks",
    value: "250",
    suffix: "+",
  },
];

export const MBA_TEST_SERIES: TestSeriesItem[] = [
  {
    id: "cat-mocks",
    value: "20+",
    title: "CAT Mocks",
    description:
      "Full-length tests with AI analytics & percentile prediction.",
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-mocks.png",
  },
  {
    id: "sectional-tests",
    value: "60+",
    title: "Sectional Tests",
    description:
      "Topic-weighted sectional papers to fix weak areas.",
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-sectional.png",
  },
  {
    id: "topic-tests",
    value: "200+",
    title: "Topic Tests",
    description:
      "Micro-tests with instant, detailed solutions.",
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-topic.png",
  },
  {
    id: "mini-mocks",
    value: "40+",
    title: "Mini Mocks",
    description:
      "Timed 30–45 min drills to build exam stamina.",
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-mini-mocks.png",
  },
];

export const MBA_RESOURCES: ResourceItem[] = [
  {
    id: "free-resources",
    title: "Free MBA Resources",
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
      "Experience a live CAT class with our star faculty before you enroll.",
    ctaLabel: "Book Your Demo",
    href: "/contact",
    icon: "/assets/icons/play.svg",
  },
  {
    id: "webinars",
    title: "Upcoming Webinars",
    description:
      "Join free webinars on exam strategy, percentile targeting, and IIM interview prep.",
    ctaLabel: "Register Now",
    href: "/blog",
    icon: "/assets/icons/calendar.svg",
  },
  {
    id: "counsellor",
    title: "Talk to a Counsellor",
    description:
      "Get a personalised preparation roadmap mapped to your profile and timeline.",
    ctaLabel: "Contact Now",
    href: "/contact",
    icon: "/assets/icons/phone.svg",
    highlighted: true,
  },
];

export const MBA_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What does Rodha’s MBA vertical cover?",
    answer:
      "MBA at Rodha covers CAT preparation and GDPI (Group Discussion & Personal Interview) conversion — so you can go from exam readiness to IIM and top B-school admits in one vertical.",
  },
  {
    id: "faq-2",
    question: "What is the best time to start CAT preparation?",
    answer:
      "Ideally 8–12 months before the exam. Early starters can build concepts deeply, while later batches focus on mocks and revision. Rodha offers Complete, Pro, Crash, and Foundation tracks for every timeline.",
  },
  {
    id: "faq-3",
    question: "Are classes live or recorded?",
    answer:
      "Most programs include live interactive classes plus full recordings. You can revise anytime, and miss a session without falling behind.",
  },
  {
    id: "faq-4",
    question: "Does Rodha provide mock tests for CAT?",
    answer:
      "Yes. You get full-length mocks, sectional tests, topic tests, and mini mocks with detailed analytics and All-India percentiles via our test platform.",
  },
  {
    id: "faq-5",
    question: "Is GDPI included with MBA programs?",
    answer:
      "Yes. GDPI masterclasses, WAT/PI focus tracks, and IIM call conversion programs sit under the MBA vertical alongside CAT courses.",
  },
  {
    id: "faq-6",
    question: "How do I enroll in an MBA course?",
    answer:
      "Choose a CAT or GDPI program on this page, click Enroll, and complete signup on our learning platform. For guidance, book a free counselling call first.",
  },
];
