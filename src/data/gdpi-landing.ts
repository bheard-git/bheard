import type {
  CategoryHeroFeature,
  CategoryQuickStat,
  FaqItem,
  ResourceItem,
  ResultStat,
  TestSeriesItem,
} from "@/lib/types";
import { EXTERNAL_URLS } from "@/lib/constants";

export const GDPI_HERO_FEATURES: CategoryHeroFeature[] = [
  {
    id: "mock-gd",
    label: "50+ Mock GD Sessions",
    icon: "/assets/images/icons/ts-mocks.png",
  },
  {
    id: "mock-pi",
    label: "30+ Mock Interview Rounds",
    icon: "/assets/images/icons/ts-sectional.png",
  },
  {
    id: "feedback",
    label: "Expert Panel Feedback",
    icon: "/assets/images/icons/rank.png",
  },
  {
    id: "wat",
    label: "WAT Practice Workshops",
    icon: "/assets/images/icons/ts-topic.png",
  },
];

export const GDPI_QUICK_STATS: CategoryQuickStat[] = [
  {
    id: "converts",
    value: "800+",
    label: "B-school Converts",
    icon: "/assets/images/icons/selection.png",
  },
  {
    id: "conversion",
    value: "85%",
    label: "Conversion Rate",
    icon: "/assets/images/icons/gdpi-icon-3d.png",
  },
  {
    id: "satisfaction",
    value: "98.2%",
    label: "Student Satisfaction",
    icon: "/assets/images/icons/ts-mocks.png",
  },
  {
    id: "excellence",
    value: "12+",
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

export const GDPI_RESULT_STATS: ResultStat[] = [
  {
    label: "B-school Converts",
    value: "800",
    suffix: "+",
    description: "across all GDPI batches",
  },
  {
    label: "Conversion Rate",
    value: "85",
    suffix: "%",
    description: "call-to-admit success",
  },
  {
    label: "IIM Converts in 2024",
    value: "200",
    suffix: "+",
    description: "from Rodha aspirants",
  },
];

export const GDPI_TEST_SERIES: TestSeriesItem[] = [
  {
    id: "mock-gd",
    title: "Mock GD Sessions",
    description: "Practice group discussions with peer panels and structured topic banks.",
    features: ["50+ GD Topics", "Live Peer Panels", "Framework Feedback"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-mocks.png",
  },
  {
    id: "mock-pi",
    title: "Mock PI Rounds",
    description: "Simulate personal interviews with B-school-style grilling and coaching.",
    features: ["30+ Mock Interviews", "Profile-Based Qs", "Expert Debriefs"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-sectional.png",
  },
  {
    id: "wat-practice",
    title: "WAT Practice",
    description: "Master written ability tests with timed essays and evaluator feedback.",
    features: ["40+ WAT Prompts", "Timed Writing", "Structure Templates"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-topic.png",
  },
  {
    id: "case-study",
    title: "Case Study Analysis",
    description: "Build case-solving muscle for IIMs and top B-school interviews.",
    features: ["20+ Case Sets", "Framework Guides", "Discussion Circles"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-mini-mocks.png",
  },
];

export const GDPI_RESOURCES: ResourceItem[] = [
  {
    id: "free-resources",
    title: "Free GDPI Resources",
    description: "Access GD frameworks, interview templates, and current affairs briefs — free for aspirants.",
    ctaLabel: "Access Now",
    href: "/blog",
    icon: "/assets/icons/download.svg",
  },
  {
    id: "free-demo",
    title: "Attend a Free Demo",
    description: "Experience a live GD or interview coaching session before you enroll.",
    ctaLabel: "Book Your Demo",
    href: "/contact",
    icon: "/assets/icons/play.svg",
  },
  {
    id: "webinars",
    title: "Upcoming Webinars",
    description: "Join free webinars on GD strategy, PI stories, and IIM-specific prep.",
    ctaLabel: "Register Now",
    href: "/blog",
    icon: "/assets/icons/calendar.svg",
  },
  {
    id: "counsellor",
    title: "Talk to a Counsellor",
    description: "Get a personalised call-conversion plan mapped to your shortlist and timeline.",
    ctaLabel: "Contact Now",
    href: "/contact",
    icon: "/assets/icons/phone.svg",
    highlighted: true,
  },
];

export const GDPI_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "When should I start GDPI preparation?",
    answer:
      "Start as soon as you receive interview calls — typically right after CAT results. Early prep on WAT, GD frameworks, and personal stories gives a clear edge over last-minute crammers.",
  },
  {
    id: "faq-2",
    question: "How many mock GDs and interviews do I get?",
    answer:
      "Our Masterclass includes 50+ mock GD sessions and 30+ mock interview rounds with expert panel feedback, plus WAT writing practice throughout the program.",
  },
  {
    id: "faq-3",
    question: "Is preparation different for different B-schools?",
    answer:
      "Yes. We cover IIM-specific formats, WAT topics, case discussions, and profile-based interview questions so you can tailor answers for each shortlist.",
  },
  {
    id: "faq-4",
    question: "Do you help with WAT (Written Ability Test)?",
    answer:
      "Absolutely. Timed WAT prompts, structure templates, and evaluator feedback help you write clear, opinionated essays under pressure.",
  },
  {
    id: "faq-5",
    question: "Can working professionals join GDPI batches?",
    answer:
      "Yes. Evening-friendly mock schedules, recordings of strategy sessions, and flexible mentor slots make conversion prep workable alongside a full-time job.",
  },
  {
    id: "faq-6",
    question: "How do I enroll in a GDPI course?",
    answer:
      "Choose the Masterclass on this page, click Enroll, and complete signup on our learning platform. For a conversion roadmap, book a free counselling call first.",
  },
];
