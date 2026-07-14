import type {
  CategoryHeroFeature,
  CategoryQuickStat,
  FaqItem,
  ResourceItem,
  ResultStat,
  TestSeriesItem,
} from "@/lib/types";
import { EXTERNAL_URLS } from "@/lib/constants";

export const CLAT_HERO_FEATURES: CategoryHeroFeature[] = [
  {
    id: "live-classes",
    label: "300+ Hours Live Classes",
    icon: "/assets/images/icons/ts-mini-mocks.png",
  },
  {
    id: "practice",
    label: "3000+ Practice Questions",
    icon: "/assets/images/icons/ts-topic.png",
  },
  {
    id: "mocks",
    label: "30+ Full Length Mock Tests",
    icon: "/assets/images/icons/ts-mocks.png",
  },
  {
    id: "legal",
    label: "Legal Reasoning Workshops",
    icon: "/assets/images/icons/selection.png",
  },
];

export const CLAT_QUICK_STATS: CategoryQuickStat[] = [
  {
    id: "selections",
    value: "3,000+",
    label: "Selections",
    icon: "/assets/images/icons/selection.png",
  },
  {
    id: "nlu",
    value: "60+",
    label: "NLU Selections in 2024",
    icon: "/assets/images/icons/clat-icon-3d.png",
  },
  {
    id: "satisfaction",
    value: "97.5%",
    label: "Student Satisfaction",
    icon: "/assets/images/icons/ts-mocks.png",
  },
  {
    id: "excellence",
    value: "10+",
    label: "Years Of Excellence",
    icon: "/assets/images/icons/rank.png",
  },
  {
    id: "rating",
    value: "4.7/5",
    label: "Google Rating",
    icon: "/assets/images/icons/CAT-icon.png",
  },
];

export const CLAT_RESULT_STATS: ResultStat[] = [
  {
    label: "Selections",
    value: "3,000",
    suffix: "+",
  },
  {
    label: "Top 100 Ranks",
    value: "100",
    suffix: "+",
  },
];

export const CLAT_TEST_SERIES: TestSeriesItem[] = [
  {
    id: "clat-mocks",
    title: "CLAT Mocks",
    description: "Full-length mocks that mirror the real CLAT pattern and difficulty.",
    features: ["20+ Full Length Mocks", "Detailed Analytics", "All-India Rank"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-mocks.png",
  },
  {
    id: "legal-reasoning",
    title: "Legal Reasoning Tests",
    description: "Sharpen principles of law, fact application, and passage-based reasoning.",
    features: ["40+ Legal Reasoning Tests", "Principle-Fact Drills", "Error Analysis"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-sectional.png",
  },
  {
    id: "current-affairs",
    title: "Current Affairs Tests",
    description: "Stay exam-ready with GK and current affairs quizzes aligned to CLAT.",
    features: ["Daily CA Quizzes", "Monthly Compilations", "Static GK Mix"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-topic.png",
  },
  {
    id: "english-comp",
    title: "English & Comprehension",
    description: "Build reading speed, vocabulary, and grammar accuracy for CLAT English.",
    features: ["30+ RC Sets", "Grammar Practice", "Vocab Boosters"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-mini-mocks.png",
  },
];

export const CLAT_RESOURCES: ResourceItem[] = [
  {
    id: "free-resources",
    title: "Free CLAT Resources",
    description: "Access legal principle notes, previous papers, and strategy guides — free for every aspirant.",
    ctaLabel: "Access Now",
    href: "/blog",
    icon: "/assets/icons/download.svg",
  },
  {
    id: "free-demo",
    title: "Attend a Free Demo",
    description: "Experience a live CLAT class with our legal experts before you enroll.",
    ctaLabel: "Book Your Demo",
    href: "/contact",
    icon: "/assets/icons/play.svg",
  },
  {
    id: "webinars",
    title: "Upcoming Webinars",
    description: "Join free webinars on CLAT strategy, NLU preferences, and legal aptitude.",
    ctaLabel: "Register Now",
    href: "/blog",
    icon: "/assets/icons/calendar.svg",
  },
  {
    id: "counsellor",
    title: "Talk to a Counsellor",
    description: "Get a personalised NLU roadmap mapped to your timeline and target colleges.",
    ctaLabel: "Contact Now",
    href: "/contact",
    icon: "/assets/icons/phone.svg",
    highlighted: true,
  },
];

export const CLAT_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is the best time to start CLAT preparation?",
    answer:
      "Ideally 10–12 months before the exam. Early starters can build legal reasoning and reading habits deeply, while later batches focus on mocks and current affairs. Rodha offers Foundation and Complete tracks for every timeline.",
  },
  {
    id: "faq-2",
    question: "How is legal reasoning taught at Rodha?",
    answer:
      "We teach principle-fact application through workshops, passage-based practice, and guided discussions — so you learn to reason like a lawyer without needing prior law background.",
  },
  {
    id: "faq-3",
    question: "Does Rodha provide mock tests for CLAT?",
    answer:
      "Yes. You get full-length CLAT mocks, legal reasoning tests, current affairs quizzes, and English practice with detailed analytics via our test platform.",
  },
  {
    id: "faq-4",
    question: "Is current affairs coverage included?",
    answer:
      "Yes. Daily updates, monthly compilations, and timed quizzes keep you aligned with the CLAT GK pattern throughout your preparation.",
  },
  {
    id: "faq-5",
    question: "Can Class 11 and 12 students join CLAT batches?",
    answer:
      "Absolutely. Our Foundation and Complete programs are designed for school students balancing board exams with NLU preparation.",
  },
  {
    id: "faq-6",
    question: "How do I enroll in a CLAT course?",
    answer:
      "Choose a program on this page, click Enroll, and complete signup on our learning platform. For guidance on NLU targets, book a free counselling call first.",
  },
];
