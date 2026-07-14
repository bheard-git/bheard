# Rodha — Phase 1 Product Requirements Document (PRD)

**Version:** 1.0
**Date:** July 2025
**Status:** Active Development

---

## 1. Project Overview

### 1.1 Product Description
Rodha is India's trusted platform for competitive exam preparation covering CAT, IPMAT, GDPI, and CLAT. Phase 1 delivers a fully static marketing website with a dark theme (orange and shades of black), where all interactive actions (login, enroll, test) redirect to external platforms.

### 1.2 Phase 1 Scope Summary
- **Type:** Fully static marketing website
- **Theme:** Dark theme — orange and shades of black
- **Design Reference:** Physics Wallah website (with approved Rodha-specific design)
- **External Platforms:**
  - **Graphy** — Course enrollment & content delivery
  - **ThinkExam** — Test series & mock tests
  - **Rodha Buddy** — AI assistant / chatbot
- **Categories:** CAT, IPMAT, GDPI, CLAT

### 1.3 Phase 1 Exclusions (Phase 2 items NOT in scope)
- Real authentication / SSO
- On-site payment collection
- Course & test navigation within Rodha website
- Student Dashboard
- Admin Module
- Course Listing Page (dedicated)
- Test Series Page (dedicated)
- Mock Tests Page (dedicated)
- Results & Success Stories Page (dedicated)
- Testimonials Page (dedicated)
- Resources Hub & Resource Detail Page
- Search Results Page
- Login / Sign Up Page
- Payment Page

---

## 2. Information Architecture & Navigation

### 2.1 Categories
| Category | Full Name |
|----------|-----------|
| CAT | Common Admission Test |
| IPMAT | Integrated Program in Management Aptitude Test |
| GDPI | Group Discussion & Personal Interview |
| CLAT | Common Law Admission Test |

### 2.2 Navigation Structure

#### Global State (before category selected)
| Nav Item | Action |
|----------|--------|
| Logo | → Homepage |
| Category Switcher | "Choose your exam" dropdown |
| About Us | → About Us page |
| Faculty | → Faculty Listing page |
| Blogs | → Blog Listing page |
| Contact Us | → Contact Us page |
| Login / Sign Up | → Graphy redirect (external) |
| Rodha Buddy | → Rodha Buddy redirect (external) |

#### Category State (after category selected)
| Nav Item | Action |
|----------|--------|
| Logo | → Category Landing Page |
| Category Switcher | Current category + switch option |
| Courses | → Category Landing page (courses section) |
| Faculty | → Category faculty section |
| Test Series | → ThinkExam redirect (external) |
| Results | → Category results section |
| Resources | → Resources section |
| Login / Sign Up | → Category Graphy portal (external) |
| Rodha Buddy | → Rodha Buddy redirect (external) |

### 2.3 Internal Linking Map
```
Homepage
├── Category Landing Page (×4: CAT, IPMAT, GDPI, CLAT)
│   ├── Course Detail Page (per course)
│   │   └── Enroll Now → Graphy (external)
│   ├── Faculty Detail Page (per faculty)
│   ├── Test Series → ThinkExam (external)
│   └── Results section
├── About Us
│   └── Meet the Team
├── Faculty Listing (global)
│   └── Faculty Detail Page
├── Blog Listing
│   └── Blog Detail Page
├── Contact Us
├── FAQ (global)
└── Legal Pages (Privacy, Terms, Refund, Disclaimer)
```

---

## 3. Pages & Sections Specification

### 3.1 Header (Global Component)

**Component Type:** Sticky/Fixed top navigation bar

**Variants:**
1. **Global State** — Before any category is selected
2. **Category State** — After a category is selected

**Elements:**
- Rodha logo (linked)
- Category switcher dropdown ("Choose your exam")
- Primary navigation links
- Rodha Buddy CTA button (orange, prominent)
- Login / Sign Up button
- Promotional top banner (dismissible) with countdown timer
  - Content: "Early Bird Offer! Get up to 50% OFF on all CAT 2026 Batches. Enroll Now"
  - Countdown: days, hours, minutes, seconds

**Responsive Behavior:**
- Desktop: Full horizontal nav with all items visible
- Tablet: Condensed nav, possible hamburger
- Mobile: Hamburger menu with slide-out navigation

---

### 3.2 Footer (Global Component)

**Component Type:** Fat navigation footer

**Sections:**
1. **Brand Column:**
   - Rodha logo
   - Tagline/description
   - Social media icons (Instagram, Facebook, Twitter/X, LinkedIn, YouTube)

2. **Exams Column:**
   - CAT → Category Landing
   - IPMAT → Category Landing
   - GDPI → Category Landing
   - CLAT → Category Landing

3. **Courses Column:**
   - All Courses
   - Live Classes
   - Test Series
   - Study Material

4. **Company Column:**
   - About Us
   - Meet the Team
   - Careers
   - Contact Us

5. **Resources Column:**
   - Blog
   - Free Resources
   - Webinars
   - Success Stories

6. **Legal Column:**
   - Privacy Policy
   - Terms & Conditions
   - Refund Policy
   - Disclaimer

7. **Bottom Bar:**
   - Copyright: "© 2025 Rodha. All rights reserved."
   - "Made with ❤ for aspirants"

---

### 3.3 Home Page

**URL:** `/`

**Sections (in order):**

1. **Promotional Banner** (top strip, dismissible)
   - Offer text + countdown timer + Enroll Now CTA

2. **Hero Section**
   - Headline: "Expert Mentorship. Proven Strategies. Real Results."
   - Subtext: "Join India's most trusted platform for CAT, IPMAT, GDPI & CLAT and achieve your dream career"
   - Two CTAs: "Explore Courses" (primary), "Book Free Counselling" (secondary/outline)
   - Hero image/illustration (campus/building visual)
   - Trust metrics bar: "2,50,000+ Students Enrolled", "4.8/5 Google Rating", "10,000+ Selections"
   - Feature cards (right side):
     - Top Faculty — "Learn from Experts"
     - AI Buddy — "24/7 Doubt Support"
     - Real Exam Practice — "High Quality Mocks"
     - Personalized Guidance — "For Your Success"

3. **Choose Your Exam, Start Your Journey**
   - Four exam cards (CAT, IPMAT, GDPI, CLAT)
   - Each card shows: exam name, full name, key stats (courses count, selections count)
   - Click → Category Landing Page

4. **Why Thousands Choose Rodha**
   - Six value proposition items with icons:
     - India's Top Faculty
     - Personalized Mentorship
     - Result-Oriented Approach
     - AI-Powered Rodha Buddy
     - High Quality Test Series
     - Engaged Community

5. **Featured Courses**
   - Section header: "Featured Courses — Handpicked for your success"
   - "View All Courses" link
   - Horizontal scrollable/carousel course cards:
     - Category badge (CAT 2026, IPMAT 2026, GDPI 2026, CLAT 2026)
     - Course name
     - Duration, mode (Live + Recorded), class count
     - Original price, discounted price, discount percentage
     - Enroll CTA → Graphy redirect
   - Left/right navigation arrows

6. **Learn from India's Top Faculty**
   - Section header + "View All Faculty" link
   - Faculty cards in horizontal scroll:
     - Photo (circular)
     - Name, designation, subjects
     - Experience (years)
     - Rating (stars)

7. **Our Results Speak for Themselves**
   - Section header + "View All Results" link
   - Stats: "10,000+ Selections", "250+ Top 100 Ranks"
   - Topper cards with:
     - AIR (All India Rank) badge
     - Rank number, exam name, year
     - Student name, college
     - Student photo

8. **Insights, Tips & Exam Updates**
   - Section header + "View All Blogs" link
   - Blog post cards:
     - Thumbnail image
     - Category tag (Featured, Marketing, etc.)
     - Title
     - Read time, date
   - Mix of large and small cards

9. **CTA Band — "Ready to Achieve Your Dream?"**
   - Subtext: "Join thousands of successful students on their journey to top colleges."
   - Two CTAs: "Book Free Counselling", "Explore Courses"

10. **Footer**

---

### 3.4 About Us Page

**URL:** `/about`

**Sections:**
1. Mission / Vision statement
2. Our Story / Timeline
3. What Makes Rodha Different
4. Leadership / Founder snapshot
5. Impact Stats (students enrolled, success rate, selections, etc.)
6. Press / Recognition logos
7. Link to Meet the Team page
8. CTA Band: "Explore Programs" / "Meet Faculty" / "Contact Us"
9. Footer

---

### 3.5 Meet the Team Page

**URL:** `/team`

**Sections:**
1. Leadership / Management profiles
   - Photo, name, title, bio
2. Departments overview
3. Advisors section
4. Culture / Careers teaser
5. CTA: "Join Us / Careers", "Contact Us"
6. Footer

---

### 3.6 Faculty Listing Page (Global)

**URL:** `/faculty`

**Sections:**
1. Page intro / banner
2. Filter bar: by subject / category (CAT, IPMAT, GDPI, CLAT)
3. Featured faculty at top (highlighted cards)
4. Faculty card grid:
   - Photo
   - Name
   - Designation
   - Subjects taught
   - Experience (years)
   - Rating (stars)
5. CTA Band: "Book a Demo" / "Explore Courses"
6. Footer

---

### 3.7 Faculty Detail Page

**URL:** `/faculty/[slug]`

**Sections:**
1. Hero: photo, name, designation, subjects, experience
2. About / Teaching philosophy
3. Subject expertise tags
4. Courses taught by this faculty (cards linking to Course Detail)
5. Achievements & credentials
6. Publications / content (optional)
7. Student reviews
8. Video lecture snippets
9. Results attributed to this faculty
10. CTA Band: "Explore Courses" / "Book a Demo" / "Ask Rodha Buddy"
11. Footer

---

### 3.8 Blog Listing Page

**URL:** `/blog`

**Sections:**
1. Featured / Hero blog post (large card)
2. Latest posts grid with category/tag filters
3. Search bar
4. Blog cards:
   - Thumbnail
   - Title
   - Date
   - Author
   - Category tag
   - Read time
5. Newsletter signup (redirects to external URL)
6. Pagination
7. CTA Band: "Explore Courses" / "Rodha Buddy"
8. Footer

---

### 3.9 Blog Detail Page

**URL:** `/blog/[slug]`

**Sections:**
1. Title
2. Author info + date + read time
3. Featured image
4. Body content (rich text)
5. Related posts (horizontal cards)
6. In-content CTAs to relevant category/course
7. End-of-post CTA band
8. Footer

---

### 3.10 Contact Us Page

**URL:** `/contact`

**Sections:**
1. Page hero / intro
2. Inquiry Form:
   - Name (text input, required)
   - Phone (text input, primary/required)
   - Email (email input, required)
   - Category of Interest (dropdown: CAT, IPMAT, GDPI, CLAT)
   - Message (textarea)
3. Contact details:
   - Phone number
   - WhatsApp number
   - Email address
4. Office address + Google Map embed
5. Support hours
6. FAQ quick link → FAQ page
7. Counsellor callback option
8. Rodha Buddy CTA
9. Footer

---

### 3.11 FAQ Page (Global)

**URL:** `/faq`

**Sections:**
1. Search bar
2. Categorized accordions (grouped by topic)
3. "Still have questions?" CTA → Contact Us / Rodha Buddy
4. Footer

---

### 3.12 Legal Pages

**URLs:** `/privacy-policy`, `/terms-and-conditions`, `/refund-policy`, `/disclaimer`

**Sections (each page):**
1. Page title
2. Last Updated date
3. Structured legal content (headings + paragraphs)
4. Contact for grievances
5. Footer (minimal)

---

### 3.13 Category Landing Page (×4)

**URLs:** `/cat`, `/ipmat`, `/gdpi`, `/clat`

**Sections:**
1. Category Hero:
   - Exam name + tagline/value proposition
   - Primary CTA: "Start Learning" → Graphy redirect
   - Secondary CTA: "Explore Test Series" → ThinkExam redirect
2. Courses overview (course cards for this category)
3. Star faculty for this category
4. Test Series promo section
5. Results & Toppers (category-specific)
6. Upcoming Demo / Webinar CTA
7. Testimonials (category-specific)
8. Resources teaser
9. Category FAQ accordion
10. SEO intro copy
11. Rodha Buddy CTA
12. Footer

---

### 3.14 Course Detail Page

**URL:** `/[category]/courses/[slug]`

**Sections:**
1. Course hero: name, faculty, outcome summary
2. Curriculum / Modules accordion
3. Faculty for this course (linked faculty cards)
4. What's Included:
   - Live classes count
   - Recordings
   - Tests
   - Mentorship sessions
5. Batch / Schedule info
6. Pricing tiers (display only)
   - Original price
   - Discounted price
   - Discount percentage
7. Student reviews / testimonials
8. Related courses
9. FAQ accordion
10. Sticky bottom bar with "Enrol Now" → Graphy redirect
11. Floating enquiry text → Lead form
12. Footer

---

## 4. Forms & Validations

### 4.1 Contact / Inquiry Form
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Name | Text | Yes | Min 2 chars, max 100 chars, alphabetic |
| Phone | Tel | Yes (primary) | Valid Indian mobile (10 digits, starts with 6-9) |
| Email | Email | Yes | Valid email format |
| Category of Interest | Select | No | One of: CAT, IPMAT, GDPI, CLAT |
| Message | Textarea | No | Max 1000 chars |

### 4.2 Promotion Popup Form (Lead Capture)
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Exam | Select | Yes | One of: CAT, IPMAT, GDPI, CLAT |
| Name | Text | Yes | Min 2 chars, alphabetic |
| Mobile Number | Tel | Yes | Valid Indian mobile (10 digits) |
| Email | Email | Yes | Valid email format |
| Exam Year | Select | Yes | Current year and next 2 years |

### 4.3 Newsletter Signup
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Email | Email | Yes | Valid email format |

### 4.4 Counsellor Callback
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Name | Text | Yes | Min 2 chars |
| Phone | Tel | Yes | Valid Indian mobile |
| Preferred Time | Select | No | Time slot options |

---

## 5. Shared / Reusable Components

### 5.1 Layout Components
| Component | Description |
|-----------|-------------|
| `Header` | Global sticky navigation with category switcher |
| `Footer` | Fat navigation footer with multi-column links |
| `PageLayout` | Standard page wrapper with header + footer |
| `Container` | Max-width centered container |
| `Section` | Consistent section wrapper with standard spacing |
| `PromotionalBanner` | Top dismissible offer strip with countdown |

### 5.2 Navigation Components
| Component | Description |
|-----------|-------------|
| `CategorySwitcher` | Dropdown to select exam category |
| `NavLink` | Styled navigation link with active state |
| `MobileNav` | Hamburger menu with slide-out drawer |
| `Breadcrumbs` | Breadcrumb navigation |

### 5.3 Content Components
| Component | Description |
|-----------|-------------|
| `HeroSection` | Full-width hero with headline, CTA, image |
| `CTABand` | Full-width call-to-action section |
| `SectionHeader` | Section title + subtitle + optional "View All" link |
| `TrustBar` | Horizontal bar with stats/metrics |
| `ValuePropCard` | Icon + title + description value proposition |
| `Accordion` | Expandable FAQ/curriculum sections |
| `Testimonial` | Student testimonial card |

### 5.4 Card Components
| Component | Description |
|-----------|-------------|
| `CourseCard` | Course info with pricing, duration, CTA |
| `FacultyCard` | Faculty photo, name, experience, rating |
| `ExamCard` | Exam category card (CAT, IPMAT, etc.) |
| `BlogCard` | Blog post thumbnail, title, date, author |
| `TopperCard` | Topper with rank, exam, photo, college |
| `ResultStatCard` | Result statistic with number + label |

### 5.5 UI Primitives
| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, outline, ghost variants |
| `Input` | Text input with label, error state |
| `Select` | Dropdown select |
| `Textarea` | Multi-line text input |
| `Badge` | Category/tag badge |
| `Rating` | Star rating display |
| `CountdownTimer` | Days/hours/minutes/seconds timer |
| `Carousel` | Horizontal scrollable container with arrows |
| `Modal` | Popup modal for promotions |
| `SearchInput` | Search input with icon |
| `Pagination` | Page navigation controls |
| `Tag` | Content tags/chips |
| `Divider` | Section divider |
| `Skeleton` | Loading skeleton states |

---

## 6. User Flows

### 6.1 Primary User Flow — Course Enrollment
```
Homepage → Choose Exam (CAT/IPMAT/GDPI/CLAT)
  → Category Landing Page → View Course
    → Course Detail Page → "Enrol Now"
      → Redirect to Graphy (external)
```

### 6.2 Faculty Discovery Flow
```
Homepage → "View All Faculty"
  → Faculty Listing Page → Select Faculty
    → Faculty Detail Page → View Courses
      → Course Detail Page
```

### 6.3 Blog Reading Flow
```
Homepage → "View All Blogs"
  → Blog Listing Page → Select Post
    → Blog Detail Page → Related Posts / CTAs
```

### 6.4 Contact / Inquiry Flow
```
Any Page → "Contact Us" (nav)
  → Contact Us Page → Fill Form → Submit
  → Confirmation message
```

### 6.5 Category Exploration Flow
```
Homepage → Choose Exam Category
  → Header switches to category state
  → Category Landing Page
    → Browse courses, faculty, results, test series
    → All enrollment CTAs → Graphy redirect
    → Test Series CTAs → ThinkExam redirect
```

### 6.6 Promotion Popup Flow
```
Any Page → Timer triggers popup OR first visit
  → Popup with offer + lead capture form
  → User fills form → Submit → Redirect/dismiss
```

---

## 7. External Redirects (Phase 1)

| Action | Destination | Platform |
|--------|-------------|----------|
| Login / Sign Up | Category-specific Graphy portal | Graphy |
| Enroll Now (course) | Course-specific Graphy URL | Graphy |
| Start Test Series | ThinkExam portal | ThinkExam |
| Attempt Mock Test | ThinkExam portal | ThinkExam |
| Rodha Buddy | Rodha Buddy chatbot | Rodha Buddy |

---

## 8. SEO Requirements

### 8.1 Per-Page SEO
- Unique meta title and description for each page
- Open Graph tags (title, description, image)
- Twitter Card tags
- Canonical URLs
- Structured data (JSON-LD) for:
  - Organization
  - Course (for course detail pages)
  - FAQ (for FAQ sections)
  - BreadcrumbList
  - Person (for faculty pages)
  - BlogPosting (for blog posts)

### 8.2 Technical SEO
- Server-side rendering (Next.js SSR/SSG)
- Sitemap.xml generation
- Robots.txt
- Fast page load (Core Web Vitals optimization)
- Mobile-first responsive design
- Semantic HTML5 structure
- Alt text for all images
- Proper heading hierarchy (h1-h6)

---

## 9. Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile S | 320px | Small phones |
| Mobile | 375px - 639px | Standard phones |
| Tablet | 640px - 1023px | Tablets |
| Desktop | 1024px - 1279px | Standard desktop |
| Desktop L | 1280px - 1535px | Large desktop |
| Desktop XL | 1536px+ | Ultra-wide |

---

## 10. Technical Stack

| Technology | Purpose |
|------------|---------|
| Next.js (App Router) | Framework, SSR/SSG |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| React | UI components |

---

## 11. Assumptions & Open Items

### Confirmed Assumptions
1. All course enrollment redirects to Graphy in Phase 1
2. All test series/mock test actions redirect to ThinkExam in Phase 1
3. No user authentication in Phase 1
4. Blog content will be statically generated or fetched from CMS
5. Contact form submissions need a backend endpoint (serverless function or external service)
6. Promotion popup shows on first visit with a timer-based trigger

### Items Requiring Client Confirmation
1. Homepage inquiry/lead form placement — confirmed as reusable component, exact homepage placement TBD
2. Faculty listing page intro/banner — design TBD
3. Blog card author display — TBD
4. Newsletter signup — redirect URL TBD
5. Contact Us page hero — design TBD
6. Specific Graphy redirect URLs per category/course
7. ThinkExam redirect URLs
8. Rodha Buddy redirect URL
9. Social media profile URLs
10. Google Maps embed location/coordinates
