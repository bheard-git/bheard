import type {
  Category,
  ContactInfo,
  SocialLink,
  ValueProp,
  HeroFeature,
  TrustMetric,
} from "./types";

export const SITE_NAME = "Rodha";
export const SITE_TAGLINE = "Expert Mentorship. Proven Strategies. Real Results.";
export const SITE_URL = "https://rodha.in";

export const EXTERNAL_URLS = {
  graphy: "https://rodha.graphy.com",
  thinkExam: "https://thinkexam.com",
  rodhaBuddy: "https://buddy.rodha.in",
} as const;

export const OFFER_END_DATE = "2026-08-31T23:59:59";

export const CATEGORIES: Category[] = [
  {
    id: "cat",
    name: "CAT",
    fullName: "Common Admission Test",
    slug: "cat",
    description: "India's premier MBA entrance exam for IIMs & top B-schools.",
    color: "#F97316",
    accentColor: "from-orange-500/25 to-orange-900/10",
    icon: "/assets/icons/cat-icon.svg",
    illustrationImage: "/assets/images/icons/cat-icon-3d.png",
    courseCount: "150+",
    selectionCount: "500+",
  },
  {
    id: "ipmat",
    name: "IPMAT",
    fullName: "Integrated Programme in Management Aptitude Test",
    slug: "ipmat",
    description: "Gateway to 5-year IPM programs at IIM Indore, Rohtak & more.",
    color: "#A855F7",
    accentColor: "from-purple-500/25 to-purple-900/10",
    icon: "/assets/icons/ipmat-icon.svg",
    illustrationImage: "/assets/images/icons/ipmat-icon-3d.png",
    courseCount: "40+",
    selectionCount: "200+",
  },
  {
    id: "gdpi",
    name: "GDPI",
    fullName: "Group Discussion & Personal Interview",
    slug: "gdpi",
    description: "Master the final selection rounds for top B-schools.",
    color: "#14B8A6",
    accentColor: "from-teal-500/25 to-teal-900/10",
    icon: "/assets/icons/gdpi-icon.svg",
    illustrationImage: "/assets/images/icons/gdpi-icon-3d.png",
    courseCount: "25+",
    selectionCount: "800+",
  },
  {
    id: "clat",
    name: "CLAT",
    fullName: "Common Law Admission Test",
    slug: "clat",
    description: "Crack CLAT and secure your seat at top NLUs.",
    color: "#D97706",
    accentColor: "from-amber-600/25 to-amber-900/10",
    icon: "/assets/icons/clat-icon.svg",
    illustrationImage: "/assets/images/icons/clat-icon-3d.png",
    courseCount: "50+",
    selectionCount: "300+",
  },
];

export const CONTACT_INFO: ContactInfo = {
  phone: "+91 98765 43210",
  email: "hello@rodha.in",
  address: "Mumbai, Maharashtra, India",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Instagram", url: "https://instagram.com/rodha.in", icon: "instagram" },
  { platform: "Facebook", url: "https://facebook.com/rodha.in", icon: "facebook" },
  { platform: "YouTube", url: "https://youtube.com/@rodha", icon: "youtube" },
  { platform: "LinkedIn", url: "https://linkedin.com/company/rodha", icon: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com/rodha_in", icon: "twitter" },
];

export const HEADER_NAV = [
  { label: "Courses", href: "/cat" },
  { label: "Faculty", href: "/faculty" },
  { label: "Test Series", href: EXTERNAL_URLS.thinkExam, external: true },
  { label: "Results", href: "/#results" },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Free Resources", href: "/blog" },
    ],
  },
  { label: "Blogs", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const NAV_ITEMS = {
  global: [
    { label: "Home", href: "/" },
    {
      label: "Courses",
      href: "#",
      children: [
        { label: "CAT Courses", href: "/cat" },
        { label: "IPMAT Courses", href: "/ipmat" },
        { label: "GDPI Courses", href: "/gdpi" },
        { label: "CLAT Courses", href: "/clat" },
      ],
    },
    { label: "Faculty", href: "/faculty" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  categories: {
    cat: [
      { label: "Overview", href: "/cat" },
      { label: "Courses", href: "/cat#courses" },
      { label: "Faculty", href: "/cat#faculty" },
      { label: "Results", href: "/cat#results" },
    ],
    ipmat: [
      { label: "Overview", href: "/ipmat" },
      { label: "Courses", href: "/ipmat#courses" },
      { label: "Faculty", href: "/ipmat#faculty" },
      { label: "Results", href: "/ipmat#results" },
    ],
    gdpi: [
      { label: "Overview", href: "/gdpi" },
      { label: "Courses", href: "/gdpi#courses" },
      { label: "Faculty", href: "/gdpi#faculty" },
    ],
    clat: [
      { label: "Overview", href: "/clat" },
      { label: "Courses", href: "/clat#courses" },
      { label: "Faculty", href: "/clat#faculty" },
      { label: "Results", href: "/clat#results" },
    ],
  },
} as const;

export const TRUST_METRICS: TrustMetric[] = [
  {
    id: "students",
    value: "2,50,000+",
    label: "Students Enrolled",
    icon: "/assets/images/icons/selection.png",
  },
  {
    id: "rating",
    value: "4.8/5",
    label: "Google Rating",
    icon: "/assets/images/icons/rank.png",
  },
  {
    id: "selections",
    value: "10,000+",
    label: "Selections",
    icon: "/assets/images/icons/selection.png",
  },
];

export const HERO_FEATURES: HeroFeature[] = [
  {
    id: "faculty",
    title: "Top Faculty",
    subtitle: "Learn from Experts",
    icon: "/assets/images/icons/rank.png",
  },
  {
    id: "ai-buddy",
    title: "AI Buddy",
    subtitle: "24/7 Doubt Support",
    icon: "/assets/images/icons/ts-mocks.png",
  },
  {
    id: "practice",
    title: "Real Exam Practice",
    subtitle: "High Quality Mocks",
    icon: "/assets/images/icons/ts-sectional.png",
  },
  {
    id: "guidance",
    title: "Personalized Guidance",
    subtitle: "For Your Success",
    icon: "/assets/images/icons/selection.png",
  },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: "top-faculty",
    title: "India's Top Faculty",
    description: "Learn from the best minds in the country",
    icon: "/assets/icons/top-faculty.svg",
  },
  {
    id: "mentorship",
    title: "Personalized Mentorship",
    description: "One-on-one guidance tailored for you",
    icon: "/assets/icons/mentorship.svg",
  },
  {
    id: "results",
    title: "Result-Oriented Approach",
    description: "Strategies that deliver results",
    icon: "/assets/icons/result-oriented.svg",
  },
  {
    id: "ai-buddy",
    title: "AI-Powered Rodha Buddy",
    description: "24/7 doubt solving & support",
    icon: "/assets/icons/ai-powered.svg",
  },
  {
    id: "test-series",
    title: "High Quality Test Series",
    description: "Mock tests that mirror real exams",
    icon: "/assets/icons/test-series.svg",
  },
  {
    id: "community",
    title: "Engaged Community",
    description: "Be a part of our learning family",
    icon: "/assets/icons/community.svg",
  },
];

export const RESULT_STATS = [
  { label: "Selections", value: "10,000", suffix: "+", description: "across all exams" },
  { label: "Top 100 Ranks", value: "250", suffix: "+", description: "in the last 3 years" },
] as const;

export const HERO_TRUST_STATS = [
  { label: "Students Enrolled", value: "2,50,000", suffix: "+" },
  { label: "Google Rating", value: "4.8", suffix: "/5" },
  { label: "Selections", value: "10,000", suffix: "+" },
] as const;
