export type CategoryId = "cat" | "ipmat" | "gdpi" | "clat";

export interface Category {
  id: CategoryId;
  name: string;
  fullName: string;
  slug: string;
  description: string;
  color?: string;
  accentColor?: string;
  icon?: string;
  /** Large 3D illustration for exam category cards */
  illustrationImage?: string;
  courseCount?: string;
  selectionCount?: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: CategoryId;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  duration: string;
  mode?: string;
  classCount?: string;
  studentsEnrolled?: string;
  features: string[];
  highlights: string[];
  enrollmentUrl: string;
  image?: string;
  thumbnail?: string;
  /** Faculty portrait shown on the right of featured course cards */
  facultyImage?: string;
  badge?: string;
  isPopular?: boolean;
  startDate?: string;
}

export interface Faculty {
  id: string;
  name: string;
  slug: string;
  title: string;
  qualification: string;
  specialization: string[];
  experience: string;
  bio: string;
  image: string;
  rating?: number;
  studentsMentored?: string;
  achievements?: string[];
  categories: CategoryId[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  exam: string;
  score: string;
  college: string;
  quote: string;
  image?: string;
  year: number;
  category: CategoryId;
}

export interface TopperResult {
  id: string;
  name: string;
  exam: string;
  rank?: number;
  percentile?: number;
  score?: string;
  college: string;
  year: number;
  image?: string;
  category: CategoryId;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  exam: CategoryId | "";
  message: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  exam: CategoryId | "";
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface ResultStat {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface HeroFeature {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface TrustMetric {
  id: string;
  value: string;
  label: string;
  icon: string;
}
