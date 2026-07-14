# Rodha — Approved Home Page UI Design Analysis

**Source:** `rodha home page UI screen.png`
**Status:** Approved — Design Source of Truth

---

## 1. Typography System

### Font Families
| Usage | Font Family | Fallback |
|-------|-------------|----------|
| Primary (Headings) | Inter / Poppins (geometric sans-serif) | system-ui, -apple-system, sans-serif |
| Body Text | Inter | system-ui, sans-serif |
| Accent / Numbers | Inter | tabular-nums |

### Font Sizes (extracted from UI)
| Token | Size | Usage |
|-------|------|-------|
| `text-hero` | 42-48px | Hero headline ("Expert Mentorship...") |
| `text-h1` | 32-36px | Section headings ("Why Thousands Choose Rodha") |
| `text-h2` | 24-28px | Sub-section headings ("Featured Courses") |
| `text-h3` | 20-22px | Card titles, category names |
| `text-h4` | 18px | Subsection titles, faculty names |
| `text-body-lg` | 16-18px | Lead paragraphs, nav links |
| `text-body` | 14-15px | Body text, descriptions |
| `text-body-sm` | 12-13px | Captions, metadata, badges |
| `text-xs` | 10-11px | Tags, small labels, footer links |

### Font Weights
| Token | Weight | Usage |
|-------|--------|-------|
| `font-bold` | 700 | Hero headline, section headings, prices |
| `font-semibold` | 600 | Card titles, CTAs, nav active |
| `font-medium` | 500 | Body text, nav links, labels |
| `font-regular` | 400 | Descriptions, metadata, long text |

### Line Heights
| Token | Value | Usage |
|-------|-------|-------|
| `leading-tight` | 1.1-1.2 | Hero headlines |
| `leading-snug` | 1.3 | Section headings |
| `leading-normal` | 1.5 | Body text |
| `leading-relaxed` | 1.6-1.75 | Long descriptions, paragraphs |

### Letter Spacing
| Token | Value | Usage |
|-------|-------|-------|
| `tracking-tight` | -0.02em | Large headings |
| `tracking-normal` | 0 | Body text |
| `tracking-wide` | 0.02-0.05em | Button text, labels, section subtitles |

---

## 2. Color System

### Primary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `primary-500` | `#F97316` | Primary orange — CTAs, accents, active states |
| `primary-600` | `#EA580C` | Hover state for primary orange |
| `primary-400` | `#FB923C` | Light orange — highlights, badges |
| `primary-300` | `#FDBA74` | Very light orange — subtle accents |
| `primary-700` | `#C2410C` | Dark orange — pressed states |

### Background Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` | `#0A0A0A` / `#000000` | Main page background (deep black) |
| `bg-secondary` | `#111111` / `#0F0F0F` | Card backgrounds, footer |
| `bg-tertiary` | `#1A1A1A` / `#171717` | Elevated cards, nav background |
| `bg-surface` | `#1E1E1E` / `#1C1C1C` | Input fields, dropdowns |
| `bg-hover` | `#252525` / `#222222` | Hover states on cards |
| `bg-hero` | Linear gradient (dark with orange glow) | Hero section background |

### Text Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#FFFFFF` | Primary white text — headings |
| `text-secondary` | `#D4D4D4` / `#E5E5E5` | Secondary text — descriptions |
| `text-muted` | `#A3A3A3` / `#9CA3AF` | Muted text — metadata, captions |
| `text-dimmed` | `#737373` / `#6B7280` | Very dim text — less important info |
| `text-orange` | `#F97316` | Orange text — CTAs, links, highlights |
| `text-green` | `#22C55E` | Price discount badges |

### Border Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `border-default` | `#262626` / `#2A2A2A` | Card borders, dividers |
| `border-subtle` | `#1F1F1F` | Subtle separators |
| `border-hover` | `#404040` | Border on hover |
| `border-orange` | `#F97316` | Active state borders, highlighted cards |
| `border-orange-subtle` | `rgba(249,115,22,0.3)` | Subtle orange border glow |

### Accent Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `accent-green` | `#22C55E` | Discount badges, success states |
| `accent-red` | `#EF4444` | Live badges, alerts, "Real Results" text |
| `accent-yellow` | `#EAB308` / `#FBBF24` | Star ratings |
| `accent-blue` | `#3B82F6` | Informational elements |

### Gradient Definitions
| Token | Value | Usage |
|-------|-------|-------|
| `gradient-hero` | `radial-gradient(ellipse at 60% 50%, rgba(249,115,22,0.15) 0%, transparent 60%)` | Hero section warm glow |
| `gradient-card-hover` | `linear-gradient(135deg, rgba(249,115,22,0.05) 0%, transparent 100%)` | Card hover effect |
| `gradient-cta-band` | `linear-gradient(135deg, #1A1A1A 0%, #0F0F0F 50%, #1A1A1A 100%)` | CTA section background |
| `gradient-orange-btn` | `linear-gradient(135deg, #F97316 0%, #EA580C 100%)` | Primary button gradient |
| `gradient-overlay` | `linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)` | Image overlay on cards |

---

## 3. Design System — Structural Tokens

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `rounded-none` | 0px | Full-bleed elements |
| `rounded-sm` | 4px | Small badges, tags |
| `rounded` | 6-8px | Buttons, inputs, small cards |
| `rounded-md` | 10-12px | Standard cards, modals |
| `rounded-lg` | 16px | Large cards, sections |
| `rounded-xl` | 20-24px | Feature cards, hero elements |
| `rounded-full` | 9999px | Circular avatars, pills, round buttons |

### Shadows
| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` | Subtle depth for small elements |
| `shadow` | `0 2px 8px rgba(0,0,0,0.4)` | Standard card shadow |
| `shadow-md` | `0 4px 16px rgba(0,0,0,0.5)` | Elevated cards, dropdowns |
| `shadow-lg` | `0 8px 32px rgba(0,0,0,0.6)` | Modals, hero elements |
| `shadow-orange` | `0 4px 20px rgba(249,115,22,0.25)` | Orange glow shadow for CTAs |
| `shadow-orange-lg` | `0 8px 40px rgba(249,115,22,0.3)` | Large orange glow |

### Glow Effects
| Token | Value | Usage |
|-------|-------|-------|
| `glow-orange` | `box-shadow: 0 0 20px rgba(249,115,22,0.2)` | Subtle orange glow on cards |
| `glow-orange-strong` | `box-shadow: 0 0 40px rgba(249,115,22,0.35)` | Strong orange glow on hero |
| `glow-text-orange` | `text-shadow: 0 0 20px rgba(249,115,22,0.5)` | "Real Results" text glow |

### Section Spacing
| Token | Value | Usage |
|-------|-------|-------|
| `section-py` | 80-100px (desktop), 48-60px (mobile) | Vertical section padding |
| `section-gap` | 48-64px | Gap between section title and content |
| `card-gap` | 20-24px | Gap between cards in a grid |
| `element-gap` | 12-16px | Gap between inline elements |

### Container & Grid
| Token | Value | Usage |
|-------|-------|-------|
| `container-max` | 1280px | Maximum content width |
| `container-padding` | 16px (mobile), 24px (tablet), 32-48px (desktop) | Horizontal padding |
| `grid-cols-2` | 2 columns | Mobile card layout |
| `grid-cols-3` | 3 columns | Tablet card layout |
| `grid-cols-4` | 4 columns | Desktop card layout (courses, exam cards) |
| `grid-cols-5` | 5 columns | Faculty cards, topper cards |

---

## 4. Component Design Specifications

### 4.1 Buttons

#### Primary Button (Orange)
- Background: `#F97316` (gradient optional)
- Text: `#FFFFFF`, font-weight: 600, size: 14-16px
- Padding: 12px 24px
- Border-radius: 8px
- Hover: background darkens to `#EA580C`, slight shadow glow
- Active: background `#C2410C`
- Shadow: `0 4px 12px rgba(249,115,22,0.3)` on hover
- Example: "Explore Courses", "Book Free Counselling" (filled version)

#### Secondary Button (Outline)
- Background: transparent
- Border: 1px solid `#F97316`
- Text: `#F97316`, font-weight: 600
- Padding: 12px 24px
- Border-radius: 8px
- Hover: background `rgba(249,115,22,0.1)`, border brightens
- Example: "Book Free Counselling" (outline version)

#### Ghost Button (Text Only)
- Background: transparent
- Text: `#F97316` or `#FFFFFF`
- Padding: 8px 16px
- Hover: text color brightens, underline or background tint
- Example: "View All Courses →"

#### Nav Button (Rodha Buddy)
- Background: `#F97316`
- Text: `#FFFFFF`, font-weight: 600
- Padding: 8px 16px
- Border-radius: 6px
- Smaller size for navigation context

### 4.2 Cards

#### Course Card
- Background: `#111111` / `#141414`
- Border: 1px solid `#262626`
- Border-radius: 12px
- Padding: 0 (image flush top) + 16-20px (content area)
- Top image/thumbnail with category badge overlay
- Content: course name, meta icons (duration, mode, classes), pricing
- Pricing: original price (strikethrough), discounted price (bold), discount % (green badge)
- Hover: border changes to `rgba(249,115,22,0.3)`, subtle lift `translateY(-2px)`
- Shadow on hover: `0 8px 24px rgba(0,0,0,0.4)`

#### Exam Category Card (Choose Your Exam)
- Background: `#111111` with subtle gradient overlay
- Border: 1px solid `#262626`
- Border-radius: 12-16px
- Padding: 24px
- Contains: exam name (large), full name (small), stat badges
- Each has a unique accent/illustration area
- Hover: border color transitions to orange, subtle glow

#### Faculty Card
- Background: `#111111`
- Circular photo (80-100px diameter)
- Name, designation, experience below photo
- Star rating
- Border-radius: 12px
- Hover: subtle lift and border highlight

#### Blog Card
- Background: `#111111`
- Thumbnail image (16:9 or 3:2 ratio)
- Category tag badge overlay
- Title, read time, date below
- Border-radius: 12px
- Two sizes: large featured card + smaller grid cards

#### Topper/Result Card
- Background: dark with image
- AIR badge (All India Rank) - orange accent badge at top
- Large rank number
- Student photo
- Name, exam, year below
- Border-radius: 12px
- Gradient overlay on image

#### Value Proposition Card
- Background: `#111111` or transparent
- Circular icon container (48-56px)
- Title + short description below
- Border: subtle or none
- Centered layout

#### Feature Card (Hero - Right Side)
- Background: `#1A1A1A` / `#171717` with slight opacity
- Border: 1px solid `#262626`
- Border-radius: 10-12px
- Icon (left) + Title + Subtitle (right)
- Compact padding: 12-16px
- Semi-transparent / glassmorphism effect

### 4.3 Navigation

#### Header Bar
- Background: `#0A0A0A` / `#000000` (slight transparency optional)
- Height: ~64px
- Sticky top position
- Border-bottom: 1px solid `#1A1A1A`
- Items: Logo, Category Switcher, Nav Links, Rodha Buddy CTA, Login/Sign Up
- Nav link style: `#D4D4D4` text, hover `#FFFFFF`, active `#F97316`

#### Category Switcher
- Dropdown button style
- Border: 1px solid `#404040`
- Border-radius: 8px
- Background: `#1A1A1A`
- Padding: 8px 16px
- Arrow/chevron icon

#### Promotional Top Banner
- Background: `#0A0A0A` with orange accents
- Full width strip above header
- Text: offer text + "Enroll Now" link
- Countdown timer: day/hour/min/sec blocks
- Close (×) button
- Height: ~36-40px
- Text size: 12-13px

### 4.4 Hero Section
- Full width, tall section (~500-600px desktop)
- Background: dark with radial orange glow (center-right)
- Left content: headline, subtext, CTAs
- Right content: illustration/image of campus/building
- Right overlay: floating feature cards (stacked vertically)
- Trust bar at bottom of hero: metrics in row
- Headline "Real Results." in orange/red with text glow

### 4.5 Section Headers
- Title: large, white, bold
- Subtitle: muted text below title
- Optional "View All" link aligned right
- Bottom border or spacing separator

### 4.6 Badges & Tags

#### Category Badge
- Background: `#F97316` (for current category) or dark with colored border
- Text: white, 11-12px, font-weight: 600
- Padding: 4px 10px
- Border-radius: 4px
- Position: absolute on card thumbnails

#### Discount Badge
- Background: `#22C55E` (green)
- Text: white, 10-11px
- Padding: 2px 8px
- Border-radius: 4px

#### Featured Badge
- Background: `#EF4444` (red)
- Text: white, 10-11px, uppercase
- Example: "Featured", "Live"

#### AIR Rank Badge
- Background: dark with orange accent
- "AIR" label + rank number
- Prominent display on topper cards

### 4.7 Rating Component
- Star icons: filled `#EAB308` (gold/yellow)
- Half-star support
- Rating number beside stars
- Size: 14-16px stars

### 4.8 Carousel / Slider
- Horizontal scroll container
- Left/right arrow buttons:
  - Circular, 40-48px diameter
  - Background: `#1A1A1A` or `rgba(255,255,255,0.1)`
  - Border: 1px solid `#404040`
  - Centered chevron icon
  - Hover: background lightens
- Scroll snap behavior
- Desktop: 4 cards visible
- Tablet: 2-3 cards visible
- Mobile: 1-2 cards visible

### 4.9 Trust Bar / Stats Bar
- Horizontal layout with separators
- Each stat: large number + label
- Icon prefixed (checkmark, star, etc.)
- Muted dividers between stats
- Located in hero section bottom

### 4.10 CTA Band
- Full width section
- Background: `#111111` or subtle gradient
- Rounded container (inner): border-radius 16-24px
- Centered text + 2 CTAs side by side
- "Ready to Achieve Your Dream?" headline
- Orange tint/glow in background

### 4.11 Footer
- Background: `#0A0A0A` / `#050505`
- Multi-column grid layout (6 columns)
- Column headers: `#FFFFFF`, 14px, semibold
- Column links: `#9CA3AF`, 13px, regular
- Link hover: `#FFFFFF`
- Social icons: 20-24px, `#9CA3AF`, hover `#FFFFFF`
- Divider line above copyright
- Copyright text: `#6B7280`, 12px

### 4.12 Decorative Elements

#### Hero Background Glow
- Radial gradient with orange tones
- Positioned center-right behind the hero image
- Creates warm atmospheric effect
- Blurred, large radius

#### Card Hover Glow
- Subtle orange border glow on hover
- `box-shadow: 0 0 0 1px rgba(249,115,22,0.3)`
- Transition: 300ms ease

#### Section Dividers
- No visible hard lines between most sections
- Spacing-based separation
- Occasional subtle horizontal lines (`#1A1A1A`)

#### Background Pattern
- Subtle dot grid or noise texture (very low opacity)
- Only visible on close inspection
- Adds texture to flat dark backgrounds

#### Image Overlays
- Gradient overlays on card images: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)`
- Ensures text readability over images

---

## 5. Animation & Interaction Notes

### Hover Effects
- Cards: `transform: translateY(-2px)`, border color change, shadow increase
- Buttons: background darken, shadow increase
- Links: color brighten to white
- Transition duration: 200-300ms
- Easing: ease-out or cubic-bezier

### Scroll Behavior
- Smooth scroll for anchor links
- Carousel: scroll-snap-type
- Sections: subtle fade-in on scroll (optional)

### Interactive States
- Focus: visible focus ring (orange outline for accessibility)
- Active: slightly pressed/scaled feel
- Disabled: opacity 0.5, cursor not-allowed
- Loading: skeleton shimmer animation

---

## 6. Responsive Design Notes

### Desktop (1280px+)
- Full 4-column grid for course cards
- 5-column grid for faculty cards
- Side-by-side hero layout (text left, image right)
- Full navigation visible

### Tablet (768px - 1279px)
- 2-3 column grid
- Hero stacks partially
- Navigation may condense
- Carousel shows fewer items

### Mobile (< 768px)
- Single column layout
- Stacked hero (text top, image below)
- Hamburger navigation
- Full-width cards
- Touch-friendly spacing (min 44px tap targets)
- Carousel: single card view with swipe
