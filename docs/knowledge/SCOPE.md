# RODHA — Combined Website Scope Document

> **Converted from:** `Rodha_Combined_Scope_Document.docx`
> **Conversion date:** 2026-07-14
> **Original prepared:** July 2025
> **Related:** [PHASE1_PRD.md](../PHASE1_PRD.md) is the detailed Phase 1 product requirements reference. Prefer the PRD for implementation detail; use this document for Phase 1 vs Phase 2 boundaries.

---

## Project Overview

### Phase 1
- Fully static marketing website
- Dark theme — orange and shades of black
- Design reference: Physics Wallah website (with approved Rodha-specific design)
- All actions (login, enroll, test) redirect to external platforms (Graphy, ThinkExam, Rodha Buddy)

### Phase 2
- Real authentication (SSO)
- Payments collected directly on Rodha website
- Course & test navigation within Rodha website — redirect only at last step
- Student Dashboard on the Rodha website
- Admin Module for course, master data & payment management

### Categories (Phase 1)
- CAT
- IPMAT
- GDPI
- CLAT

---

## Page-wise Scope & Sections

### 1. Header & Footer

| Area | Phase 1 | Phase 2 |
|------|---------|---------|
| Header — Global State | Logo → Homepage; Category Switcher; Nav: About Us, Faculty, Blogs, Contact; Login → Graphy; Rodha Buddy → redirect | Login → SSO Login Page |
| Header — Category State | Logo → Category Landing; Nav: Courses, Faculty, Test Series, Results, Resources; Login → Category Graphy; Rodha Buddy → redirect | User Avatar → Student Dashboard (assumed — to be confirmed) |
| Footer | Logo + tagline; category links; company links; resources/blog; legal links; social icons; copyright | Same structure (extended as needed) |

**Footer sections:** Logo + tagline; links to all categories; Company (About, Meet the Team, Contact, Careers); Resources / Blog; Legal (Privacy, Terms, Refund, Cookie, Disclaimer); social media icons; copyright line.

---

### 2. Home Page

**Phase 1 sections:**
- Hero with category selector grid (CAT, IPMAT, GDPI, CLAT)
- Why Rodha — value propositions
- Featured Faculty teaser
- Headline results / toppers highlight
- Testimonials slider
- Rodha Buddy intro + CTA
- Blog teaser (latest posts)
- Trust bar (student count, success rate, ratings)
- Inquiry / Lead form (reusable component — exact homepage placement TBD)
- Promotion popup with image/video feasibility; lead capture if not logged in (Exam, Name, Mobile, Email, Exam year)
- Footer

**Phase 1 behavior:** Category click → Category Landing Page (static). Login → Graphy redirect.
**Phase 2 behavior:** Login → SSO Login Page. Post-login → Student Dashboard. Promotion popup + student info capture.

---

### 3. About Us (Phase 1)
- Mission / Vision statement
- Our Story / Timeline
- What Makes Rodha Different
- Leadership / Founder snapshot
- Impact Stats
- Press / Recognition logos
- Link to Meet the Team
- CTA band: Explore Programs / Meet Faculty / Contact Us
- Footer

---

### 4. Meet the Team (Phase 1)
- Leadership / Management profiles
- Departments overview
- Advisors section
- Culture / Careers teaser
- CTA: Join Us / Careers, Contact Us
- Footer

---

### 5. Faculty (Global Listing) (Phase 1)
- Page intro / banner (assumed — design TBD)
- Filter bar: by subject / category
- Featured faculty at top
- Faculty card grid: photo, name, designation, subjects, experience, rating
- CTA band: Book a Demo / Explore Courses
- Footer

---

### 6. Faculty Detail Page (Phase 1)
- Hero: photo, name, designation, subjects, experience
- About / Teaching philosophy
- Subject expertise tags
- Courses taught by this faculty
- Achievements & credentials
- Publications / content (optional)
- Student reviews
- Video lecture snippets
- Results attributed to this faculty
- CTA band: Explore Courses / Book a Demo / Ask Rodha Buddy
- Footer

---

### 7. Blog Listing (Phase 1)
- Featured / Hero blog post
- Latest posts with category / tag filters
- Search bar
- Blog cards: thumbnail, title, date, author, category tag (assumed — TBD)
- Newsletter signup (assumed — redirect to external URL)
- Pagination
- CTA band: Explore Courses / Rodha Buddy
- Footer

---

### 8. Blog Detail (Phase 1)
- Title, author, date, body content
- Related posts
- In-content + end-of-post CTAs to relevant category / course
- Footer

---

### 9. Contact Us (Phase 1)
- Page hero / intro (assumed — design TBD)
- Inquiry Form: Name, Phone (primary/required), Email, Category of Interest, Message
- Phone / WhatsApp / Email contact details
- Office address + Google Map embed
- Support hours
- FAQ quick link
- Counsellor callback option
- Rodha Buddy CTA
- Footer

---

### 10. FAQ (Global) (Phase 1)
- Search bar
- Categorized accordions
- "Still have questions?" CTA → Contact / Rodha Buddy
- Footer

---

### 11. Legal Pages (Privacy / Terms / Refund) (Phase 1)
- Page title + Last Updated date
- Structured legal content
- Contact for grievances
- Footer (minimal)

> Note: Disclaimer page is also in the Phase 1 PRD route list.

---

### 12. Category Landing Page (CAT, IPMAT, GDPI, CLAT)

**Both phases share sections:**
- Category Hero: exam name, value prop, primary CTA
- Courses overview (cards)
- Star faculty for this category
- Test Series promo
- Results & Toppers (category-specific)
- Upcoming Demo / Webinar CTA
- Testimonials (category-specific)
- Resources teaser
- Category FAQ accordion
- SEO intro copy
- Rodha Buddy CTA
- Footer

**Phase 1:** "Start Learning" → Graphy (category URL). "Explore Test Series" → ThinkExam redirect.
**Phase 2:** "Start Learning" → Course Listing Page. "Explore Test Series" → Test Listing Page.

---

### 13. Course Listing Page (per category) — Phase 2 only
- Filter / sort bar: level, mode, duration
- Course cards: title, faculty, duration, price-from, highlights
- Comparison strip
- FAQ accordion
- Enrol CTA band
- Footer

**Phase 1:** Enroll → Graphy redirect (from category/course surfaces, not a dedicated listing page).
**Phase 2:** Enroll → Course Detail → Payment Page.

---

### 14. Course Detail Page (per category)

**Shared sections (Phase 1 + Phase 2):**
- Course hero: name, faculty, outcome summary
- Curriculum / Modules accordion
- Faculty for this course
- What's Included: live classes, recordings, tests, mentorship
- Batch / Schedule info
- Pricing tiers (display only in Phase 1)
- Student reviews / testimonials
- Related courses
- FAQ accordion
- Sticky bottom bar with "Enrol Now"
- Floating enquiry form: Exam, Name, Mobile, Email, Exam year
- Footer

**Phase 1:** Enrol Now → Graphy redirect.

**Phase 2 — Payment flow (logged-in users):**
- Enrol Now → Payment Page
- If not logged in → SSO Login → return to Course Detail → Payment Page

**Phase 2 — Content navigation (enrolled users only):**
- Course Detail → Subject → Topic → Content (Video / PDF) → Graphy Player

---

### 15. Test Series Page (per category) — Phase 2 only
- Intro / hero
- What's included: full mocks, sectional, topic-wise
- Test calendar / sample
- Benefits
- Toppers who used it
- FAQ accordion
- CTA band
- Footer

**Phase 1:** Start Test Series → ThinkExam redirect.
**Phase 2:** Subject → Topic → Exam → Start Test → ThinkExam.

---

### 16. Mock Tests Page (per category) — Phase 2 only
- Mock types & pattern breakdown
- Difficulty & analytics promise
- Free vs Paid mocks comparison
- Sample questions
- How analysis / results work post-test
- CTA band
- Footer

**Phase 1:** Attempt Mock → ThinkExam redirect.
**Phase 2:** Same navigation as Test Series → ThinkExam.

---

### 17. Results & Success Stories — Phase 2
- Headline result stats
- Topper cards: name, rank, score, photo, course
- Year / category filters
- Detailed success stories
- Faculty credited
- CTA band: Enrol Now / Meet the Faculty
- Footer

---

### 18. Testimonials Page — Phase 2
- Featured video testimonials
- Written reviews with filters: category, year
- Aggregate rating widget
- Success story links
- CTA band
- Footer

---

### 19. Resources Hub — Phase 2
- Searchable / filterable resource library: by category & type
- Resource cards
- CTA band
- Footer

---

### 20. Resource Detail Page — Phase 2
- Resource description
- Preview
- Download / lead-gate (optional email capture)
- Related resources
- CTA band
- Footer

---

### 21. Search Results Page — Phase 2
- Search bar
- Filtered results: Courses, Faculty, Blog, Resources
- No-result fallback with suggestions
- Ask Rodha Buddy fallback CTA
- Footer

---

### 22. Login / Sign Up Page — Phase 2
- Google SSO login option
- Email & Password login / signup
- Forgot Password / Reset Password flow
- On success → Student Dashboard
- If triggered mid-flow (e.g. Enroll) → return to previous page

---

### 23. Payment Page — Phase 2
- Order summary: course / test details
- Coupon / Discount Code field
- Payment gateway integration (Razorpay / Cashfree — TBC)
- Payment Success Page → auto-route to Graphy / ThinkExam link
- Payment Failure Page → Retry / Contact Support

---

### 24. Student Dashboard — Phase 2
- Enrolled Courses list → links to Graphy
- Test History & Scores → links to ThinkExam
- My Profile: name, email, photo
- My Orders / Invoices

---

### 25. Admin Module — Phase 2
- Course management
- Testimonials
- Blogs
- Success Stories
- Faculty, Student review per faculty
- FAQ
- Legal Pages
- Category & Category detail
- Course details
- Resource hub
- Lead master + Contact us inquiry
- Master data management
- Payment details & transaction records
- Promotion popup (image/video) + lead capture form

---

## Open Points

All open-point efforts will be assessed and shared post clarification from respective owners.

| # | Open Point | Impact |
|---|------------|--------|
| 1 | SSO feasibility with Graphy — OAuth/API support? | Core Phase 2 auth dependency |
| 2 | SSO feasibility with ThinkExam — OAuth/API support? | Core Phase 2 auth dependency |
| 3 | Client to share Graphy & ThinkExam API documentation | Phase 2 integration effort |
| 4 | Payment gateway preference — Razorpay / Cashfree / other? | Affects Payment Page design & integration |
| 5 | EMI / Instalment payment feasibility | Adds to Payment effort if confirmed |
| 6 | Current tech stack & hosting/deployment setup of existing website | May affect deployment effort |

---

## Cross-reference Notes

- Detailed Phase 1 page specifications, forms, SEO, and component inventory live in [PHASE1_PRD.md](../PHASE1_PRD.md).
- Approved homepage visual tokens live in [UI_DESIGN_ANALYSIS.md](../UI_DESIGN_ANALYSIS.md).
- If this scope doc and the PRD diverge, treat Phase 1/2 **boundaries** from this document as authoritative and implementation **detail** from the PRD as authoritative; flag conflicts in [DECISIONS.md](DECISIONS.md).
