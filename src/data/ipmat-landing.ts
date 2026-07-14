import type {
  CategoryHeroFeature,
  CategoryQuickStat,
  FaqItem,
  ResourceItem,
  ResultStat,
  TestSeriesItem,
} from "@/lib/types";
import { EXTERNAL_URLS } from "@/lib/constants";

export const IPMAT_HERO_FEATURES: CategoryHeroFeature[] = [
  {
    id: "live-classes",
    label: "200+ Hours Live Classes",
    icon: "/assets/images/icons/ts-mini-mocks.png",
  },
  {
    id: "practice",
    label: "4000+ Practice Questions",
    icon: "/assets/images/icons/ts-topic.png",
  },
  {
    id: "mocks",
    label: "25+ Full Length Mock Tests",
    icon: "/assets/images/icons/ts-mocks.png",
  },
  {
    id: "mentorship",
    label: "Personalised Mentorship",
    icon: "/assets/images/icons/selection.png",
  },
];

export const IPMAT_QUICK_STATS: CategoryQuickStat[] = [
  {
    id: "selections",
    value: "2,000+",
    label: "Selections",
    icon: "/assets/images/icons/selection.png",
  },
  {
    id: "iim-indore",
    value: "40+",
    label: "IIM Indore Selections in 2024",
    icon: "/assets/images/icons/ipmat-icon-3d.png",
  },
  {
    id: "satisfaction",
    value: "97.8%",
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
    value: "4.8/5",
    label: "Google Rating",
    icon: "/assets/images/icons/CAT-icon.png",
  },
];

export const IPMAT_RESULT_STATS: ResultStat[] = [
  {
    label: "Selections",
    value: "2,000",
    suffix: "+",
  },
  {
    label: "Top 50 Ranks",
    value: "80",
    suffix: "+",
  },
];

export const IPMAT_TEST_SERIES: TestSeriesItem[] = [
  {
    id: "ipmat-mocks",
    title: "IPMAT Mocks",
    description: "Full-length mocks designed for IIM Indore and Rohtak patterns.",
    features: ["15+ Full Length Mocks", "Pattern Matching", "Detailed Analytics"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-mocks.png",
  },
  {
    id: "aptitude-tests",
    title: "Aptitude Tests",
    description: "Strengthen Quant and Logical Reasoning with sectional intensity.",
    features: ["50+ Aptitude Sets", "Timed Practice", "Concept Maps"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-sectional.png",
  },
  {
    id: "verbal-tests",
    title: "Verbal Ability Tests",
    description: "Build RC accuracy, grammar, and verbal reasoning for IPMAT.",
    features: ["40+ Verbal Sets", "RC Speed Drills", "Error Logs"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-topic.png",
  },
  {
    id: "mini-mocks",
    title: "Mini Mocks",
    description: "Short simulations for daily stamina and quick revision cycles.",
    features: ["30+ Mini Mocks", "Speed Drills", "Smart Revision"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-mini-mocks.png",
  },
];

export const IPMAT_RESOURCES: ResourceItem[] = [
  {
    id: "free-resources",
    title: "Free IPMAT Resources",
    description: "Access aptitude notes, previous papers, and strategy guides — free for every aspirant.",
    ctaLabel: "Access Now",
    href: "/blog",
    icon: "/assets/icons/download.svg",
  },
  {
    id: "free-demo",
    title: "Attend a Free Demo",
    description: "Experience a live IPMAT class with our star faculty before you enroll.",
    ctaLabel: "Book Your Demo",
    href: "/contact",
    icon: "/assets/icons/play.svg",
  },
  {
    id: "webinars",
    title: "Upcoming Webinars",
    description: "Join free webinars on IPMAT strategy, Indore vs Rohtak patterns, and interviews.",
    ctaLabel: "Register Now",
    href: "/blog",
    icon: "/assets/icons/calendar.svg",
  },
  {
    id: "counsellor",
    title: "Talk to a Counsellor",
    description: "Get a personalised IPMAT roadmap mapped to your Class 11/12 timeline.",
    ctaLabel: "Contact Now",
    href: "/contact",
    icon: "/assets/icons/phone.svg",
    highlighted: true,
  },
];

export const IPMAT_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is the best time to start IPMAT preparation?",
    answer:
      "Most aspirants begin in Class 11 or early Class 12. A 10–12 month runway helps build Quant and Verbal foundations while balancing board exams. Rodha’s Complete Program is designed for this timeline.",
  },
  {
    id: "faq-2",
    question: "Is IPMAT Indore different from IPMAT Rohtak?",
    answer:
      "Yes. Patterns, section weights, and interview stages differ. Our curriculum covers both, with dedicated mocks and strategy sessions for each institute.",
  },
  {
    id: "faq-3",
    question: "Does Rodha provide mock tests for IPMAT?",
    answer:
      "Yes. You get full-length mocks, aptitude sets, verbal tests, and mini mocks with detailed analytics aligned to Indore and Rohtak formats.",
  },
  {
    id: "faq-4",
    question: "Can Class 11 students join IPMAT batches?",
    answer:
      "Absolutely. Early starters get concept mastery and longer mock exposure. Mentors also help plan around school exams so neither track suffers.",
  },
  {
    id: "faq-5",
    question: "Is interview preparation included?",
    answer:
      "Yes. Shortlisted aspirants receive interview guidance and profile-building support as part of the IPMAT journey toward IIM Indore and Rohtak.",
  },
  {
    id: "faq-6",
    question: "How do I enroll in an IPMAT course?",
    answer:
      "Choose a program on this page, click Enroll, and complete signup on our learning platform. For a personalised plan, book a free counselling call first.",
  },
];
