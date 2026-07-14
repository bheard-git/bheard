export interface FAQCategory {
  id: string;
  label: string;
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  { id: "all", label: "All" },
  { id: "general", label: "General" },
  { id: "courses", label: "Courses" },
  { id: "pricing", label: "Pricing & Payments" },
  { id: "mentorship", label: "Mentorship" },
  { id: "tests", label: "Test Series" },
  { id: "technical", label: "Technical" },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQ_ITEMS_PER_PAGE = 10;

export const FAQ_DATA: FAQItem[] = [
  // ─── General ───
  {
    id: "gen-1",
    category: "general",
    question: "What is Rodha?",
    answer:
      "Rodha is India's trusted platform for CAT, IPMAT, GDPI, and CLAT preparation. We combine expert mentorship, structured courses, rigorous test series, and personalised guidance to help students crack competitive exams and get into top colleges.",
  },
  {
    id: "gen-2",
    category: "general",
    question: "Which exams does Rodha prepare students for?",
    answer:
      "We currently offer programs for CAT (MBA entrance), IPMAT (IIM Indore/Rohtak and similar IPM exams), GDPI (Group Discussion & Personal Interview for B-schools), and CLAT (law entrance for NLUs).",
  },
  {
    id: "gen-3",
    category: "general",
    question: "Who can join Rodha programs?",
    answer:
      "Anyone preparing for CAT, IPMAT, GDPI, or CLAT can join — college students, working professionals, and career switchers. Each category has tracks for different timelines and experience levels.",
  },
  {
    id: "gen-4",
    category: "general",
    question: "Is Rodha available online or offline?",
    answer:
      "Most Rodha programs are delivered online with live interactive classes, recordings, and digital study material. Select workshops or counselling sessions may be offered in hybrid formats depending on the batch.",
  },
  {
    id: "gen-5",
    category: "general",
    question: "How do I get started with Rodha?",
    answer:
      "Browse the exam category that matches your goal (CAT, IPMAT, GDPI, or CLAT), pick a course that fits your timeline, and enroll. You can also book a free counselling call or ask Rodha Buddy for personalised advice.",
  },
  {
    id: "gen-6",
    category: "general",
    question: "What makes Rodha different from other coaching platforms?",
    answer:
      "Rodha focuses on mentorship-led preparation — not just content dump. You get experienced faculty, personalised study plans, mock analytics, and accountability so your effort translates into percentile and selection outcomes.",
  },

  // ─── Courses ───
  {
    id: "crs-1",
    category: "courses",
    question: "What types of courses does Rodha offer?",
    answer:
      "We offer Complete, Pro, Crash, and Foundation tracks depending on the exam and how much time you have. Programs typically include live classes, recordings, practice sets, mocks, and mentorship access.",
  },
  {
    id: "crs-2",
    category: "courses",
    question: "Are classes live or recorded?",
    answer:
      "Most programs include live interactive classes plus full recordings. You can revise anytime and catch up if you miss a session without falling behind.",
  },
  {
    id: "crs-3",
    category: "courses",
    question: "Can working professionals join Rodha batches?",
    answer:
      "Yes. Evening and weekend-friendly schedules, class recordings, and flexible mentorship make preparation workable alongside a full-time job.",
  },
  {
    id: "crs-4",
    category: "courses",
    question: "How do I choose the right course for my timeline?",
    answer:
      "If you have 8–12 months, start with a Complete or Foundation track. With 4–6 months, Pro tracks work well. Crash programs suit last-mile revision. When unsure, book free counselling and we will recommend a plan.",
  },
  {
    id: "crs-5",
    category: "courses",
    question: "Will I get study material with my course?",
    answer:
      "Yes. Enrolled students receive structured modules, practice sheets, and relevant digital resources as part of their program. Exact inclusions vary by course and are listed on each course page.",
  },
  {
    id: "crs-6",
    category: "courses",
    question: "Can I switch courses after enrolling?",
    answer:
      "Course switches depend on batch availability, fee difference, and our refund/transfer policy. Contact support or your counsellor soon after enrollment so we can check options for your case.",
  },

  // ─── Pricing & Payments ───
  {
    id: "prc-1",
    category: "pricing",
    question: "How much do Rodha courses cost?",
    answer:
      "Pricing varies by exam category, track (Complete / Pro / Crash), and current offers. Course pages show fee details before enrollment. For a custom recommendation, book free counselling.",
  },
  {
    id: "prc-2",
    category: "pricing",
    question: "What payment methods are accepted?",
    answer:
      "Payments are processed on our learning partner platform and typically support UPI, cards, net banking, and other standard Indian payment methods available at checkout.",
  },
  {
    id: "prc-3",
    category: "pricing",
    question: "Are there discounts or scholarship offers?",
    answer:
      "Seasonal offers, early-bird discounts, and batch-specific promotions appear on the site and promotional banner when active. Counsellors can also confirm current applicable offers.",
  },
  {
    id: "prc-4",
    category: "pricing",
    question: "Can I pay in instalments?",
    answer:
      "Instalment options, if available for a particular course, are shown at checkout or shared by the counselling team. Availability may vary by program and payment partner.",
  },
  {
    id: "prc-5",
    category: "pricing",
    question: "Where can I find the refund policy?",
    answer:
      "Please read our Refund Policy page for eligibility, timelines, and the request process. For case-specific questions, email hello@rodha.in with your order details.",
  },
  {
    id: "prc-6",
    category: "pricing",
    question: "Will I get an invoice after payment?",
    answer:
      "Yes. After a successful payment on the partner platform, you typically receive a receipt/invoice on your registered email. Keep that for refund or support requests.",
  },

  // ─── Mentorship ───
  {
    id: "men-1",
    category: "mentorship",
    question: "Is personalised mentorship included?",
    answer:
      "Yes. Most Rodha programs include mentorship support to help you build a study plan, review mock performance, and stay accountable through one-on-one or small-group guidance.",
  },
  {
    id: "men-2",
    category: "mentorship",
    question: "How often can I speak with my mentor?",
    answer:
      "Mentorship frequency depends on your program tier. Typical formats include scheduled check-ins plus doubt-support channels. Your batch onboarding note will list the exact cadence.",
  },
  {
    id: "men-3",
    category: "mentorship",
    question: "What is Rodha Buddy?",
    answer:
      "Rodha Buddy is our AI-assisted guidance companion that helps you get quick answers, planning tips, and next-step suggestions related to exam prep. You can open it from the header CTA.",
  },
  {
    id: "men-4",
    category: "mentorship",
    question: "Can mentors help with college shortlisting?",
    answer:
      "Yes. Especially for CAT and GDPI track students — mentors and counsellors can guide on profile readiness, call strategy, and college fit based on your score range and goals.",
  },
  {
    id: "men-5",
    category: "mentorship",
    question: "Do you offer free counselling before I enroll?",
    answer:
      "Yes. Book a free counselling session from the Contact page or CTA bands across the site. A counsellor will help match you to the right exam track and timeline.",
  },

  // ─── Test Series ───
  {
    id: "tst-1",
    category: "tests",
    question: "Does Rodha provide mock tests?",
    answer:
      "Yes. Students get access to full-length mocks, sectional tests, topic tests, and mini mocks with detailed analytics and All-India percentile insights via our test platform partner.",
  },
  {
    id: "tst-2",
    category: "tests",
    question: "Are mocks based on the latest exam pattern?",
    answer:
      "Our test series is updated to reflect the latest known patterns for CAT, IPMAT, GDPI practice, and CLAT. When exam authorities announce changes, we revise content accordingly.",
  },
  {
    id: "tst-3",
    category: "tests",
    question: "How do I access the test series?",
    answer:
      "After enrollment, you receive access credentials or a direct redirect to our test platform (ThinkExam). Category pages also link to Explore Test Series when applicable.",
  },
  {
    id: "tst-4",
    category: "tests",
    question: "Will I get analysis after each mock?",
    answer:
      "Yes. Mock reports typically include scores, sectional breakdowns, percentile indicators, and area-wise insights so you and your mentor can prioritise the next revision cycle.",
  },
  {
    id: "tst-5",
    category: "tests",
    question: "Can I attempt mocks on mobile?",
    answer:
      "Most tests work on desktop and mobile browsers. For long full-length mocks we recommend a stable desktop or laptop setup for the closest exam-day experience.",
  },
  {
    id: "tst-6",
    category: "tests",
    question: "Is the test series sold separately from courses?",
    answer:
      "Some programs bundle mocks; standalone test-series access may also be available via our partner platform. Check the category Test Series section or ask counselling for current packages.",
  },

  // ─── Technical ───
  {
    id: "tec-1",
    category: "technical",
    question: "Which platforms do I use after enrolling?",
    answer:
      "Course learning content is typically delivered via Graphy. Tests run on ThinkExam. Guidance experiences may also involve Rodha Buddy. Login buttons on the site redirect to the relevant platform.",
  },
  {
    id: "tec-2",
    category: "technical",
    question: "I am unable to log in. What should I do?",
    answer:
      "Confirm you are on the correct partner platform and using the email registered at purchase. Reset password if needed. If access still fails, email hello@rodha.in with your order ID and registered mobile.",
  },
  {
    id: "tec-3",
    category: "technical",
    question: "Do live classes require a special app?",
    answer:
      "Live classes are usually attended through the learning platform or a linked video classroom. Your batch welcome message will share the exact join steps and any recommended browser.",
  },
  {
    id: "tec-4",
    category: "technical",
    question: "What internet speed do I need for live classes?",
    answer:
      "A stable connection of roughly 5 Mbps or higher is recommended for uninterrupted video. Use headphones and close heavy downloads during class for best audio quality.",
  },
  {
    id: "tec-5",
    category: "technical",
    question: "Can I download recordings for offline viewing?",
    answer:
      "Download availability depends on the learning platform settings for your course. Many programs allow streaming anytime; offline download, if enabled, will be mentioned in your course dashboard.",
  },
  {
    id: "tec-6",
    category: "technical",
    question: "How do I report a technical bug?",
    answer:
      "Write to hello@rodha.in with screenshots, the page/URL, browser/device details, and time of issue. Our support team will investigate and revert with a fix or workaround.",
  },
];

export function getFaqsByCategory(categoryId: string): FAQItem[] {
  if (categoryId === "all") return FAQ_DATA;
  return FAQ_DATA.filter((item) => item.category === categoryId);
}

export function searchFaqs(items: FAQItem[], query: string): FAQItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter(
    (item) =>
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q)
  );
}
