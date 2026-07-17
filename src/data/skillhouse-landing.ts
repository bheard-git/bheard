import type {
  CategoryHeroFeature,
  CategoryQuickStat,
  FaqItem,
  ResourceItem,
  ResultStat,
  TestSeriesItem,
} from "@/lib/types";
import { EXTERNAL_URLS } from "@/lib/constants";

export const SKILLHOUSE_HERO_FEATURES: CategoryHeroFeature[] = [
  {
    id: "live-classes",
    label: "100+ Hours Live Classes",
    icon: "/assets/images/icons/ts-mini-mocks.png",
  },
  {
    id: "practice",
    label: "Project-Based Learning",
    icon: "/assets/images/icons/ts-topic.png",
  },
  {
    id: "mocks",
    label: "Industry Capstones",
    icon: "/assets/images/icons/ts-mocks.png",
  },
  {
    id: "mentorship",
    label: "Personalised Mentorship",
    icon: "/assets/images/icons/selection.png",
  },
];

export const SKILLHOUSE_QUICK_STATS: CategoryQuickStat[] = [
  {
    id: "learners",
    value: "10,000+",
    label: "Learners",
    icon: "/assets/images/icons/selection.png",
  },
  {
    id: "placements",
    value: "1,000+",
    label: "Career Outcomes",
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

export const SKILLHOUSE_RESULT_STATS: ResultStat[] = [
  {
    label: "Learners",
    value: "10,000",
    suffix: "+",
  },
  {
    label: "Career Outcomes",
    value: "1,000",
    suffix: "+",
  },
];

export const SKILLHOUSE_TEST_SERIES: TestSeriesItem[] = [
  {
    id: "skill-assessments",
    title: "Skill Assessments",
    description: "Benchmark your progress with role-aligned skill assessments.",
    features: ["20+ Assessments", "Detailed Analytics", "Skill Gap Reports"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-mocks.png",
  },
  {
    id: "practice-labs",
    title: "Practice Labs",
    description: "Hands-on labs to apply concepts in real-world scenarios.",
    features: ["60+ Lab Sessions", "Timed Challenges", "Mentor Feedback"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-sectional.png",
  },
  {
    id: "topic-drills",
    title: "Topic Drills",
    description: "Build depth with focused drills after every module.",
    features: ["200+ Topic Drills", "Instant Solutions", "Weak Area Tracking"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-topic.png",
  },
  {
    id: "mini-projects",
    title: "Mini Projects",
    description: "Short projects that build portfolio-ready artefacts.",
    features: ["40+ Mini Projects", "Portfolio Templates", "Peer Reviews"],
    href: EXTERNAL_URLS.thinkExam,
    icon: "/assets/images/icons/ts-mini-mocks.png",
  },
];

export const SKILLHOUSE_RESOURCES: ResourceItem[] = [
  {
    id: "free-resources",
    title: "Free Skill House Resources",
    description:
      "Access curated templates, guides, and starter kits — free for every learner.",
    ctaLabel: "Access Now",
    href: "/blog",
    icon: "/assets/icons/download.svg",
  },
  {
    id: "free-demo",
    title: "Attend a Free Demo",
    description:
      "Experience a live Skill House session with our mentors before you enroll.",
    ctaLabel: "Book Your Demo",
    href: "/contact",
    icon: "/assets/icons/play.svg",
  },
  {
    id: "webinars",
    title: "Upcoming Webinars",
    description:
      "Join free webinars on career pathways, skill stacks, and industry trends.",
    ctaLabel: "Register Now",
    href: "/blog",
    icon: "/assets/icons/calendar.svg",
  },
  {
    id: "counsellor",
    title: "Talk to a Counsellor",
    description:
      "Get a personalised learning roadmap mapped to your career goals.",
    ctaLabel: "Contact Now",
    href: "/contact",
    icon: "/assets/icons/phone.svg",
    highlighted: true,
  },
];

export const SKILLHOUSE_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is Skill House?",
    answer:
      "Skill House is Rodha’s career-skills vertical — practical programs that build professional capabilities alongside exam preparation pathways.",
  },
  {
    id: "faq-2",
    question: "Who should join Skill House programs?",
    answer:
      "Students and early professionals who want portfolio-ready skills, mentorship, and structured practice beyond traditional exam prep.",
  },
  {
    id: "faq-3",
    question: "Are classes live or recorded?",
    answer:
      "Most programs include live interactive classes plus recordings so you can revise and catch up anytime.",
  },
  {
    id: "faq-4",
    question: "Is mentorship included?",
    answer:
      "Yes. Mentors help you plan milestones, review projects, and stay accountable through one-on-one guidance.",
  },
  {
    id: "faq-5",
    question: "Can working professionals join?",
    answer:
      "Absolutely. Evening and weekend-friendly schedules make Skill House workable alongside a full-time role.",
  },
  {
    id: "faq-6",
    question: "How do I enroll?",
    answer:
      "Choose a program on this page, click Enroll, and complete signup on our learning platform. For guidance, book a free counselling call first.",
  },
];
