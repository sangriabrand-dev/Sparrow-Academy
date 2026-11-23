# SPARROW CREATIVE ACADEMY — PHASE 1 CHANGELOG & SYSTEM DIRECTORY

This document details all architectural, structural, and visual updates applied to the **Sparrow Creative Academy** React + Vite website.

---

## 📋 Phase 1 Summary Checklist (Items 1 to 6)

| # | Requirement | Status | Details |
|---|---|---|---|
| **1** | **Official Logo & Favicon** | **DONE** | Integrated official `logo.png` (purple-to-blue flying sparrow + "Sparrow CREATIVE ACADEMY") into Navbar (44px desktop / 36px mobile), Footer, and created clean transparent bird favicon in `public/favicon.png` and `index.html`. |
| **2** | **Brand Colors & Zero Nature Greens** | **DONE** | Eradicated all 14+ legacy green hex codes (`#123524`, `#1b4d35`, `#40916c`, `#52b788`, etc.). Implemented modern design system tokens in `src/styles/Global.css` based on `logo.png` & `live-site-home.png` (Indigo `--primary: #4f46e5`, Violet `--accent: #7c3aed`, Electric Blue `#2563eb`, Clean surfaces, and Obsidian Navy dark mode). |
| **3** | **Contact Us in Navbar & /contact Page** | **DONE** | Added gradient "Contact Us" button in Navbar (desktop and mobile drawer). Created full responsive `/contact` page with dual columns matching `contact-example.png` layout in brand colors: Quick Contact cards with copy buttons, Office address card, "Why Sparrow" value points, and "Book Free Consultation" form sending to WhatsApp with inline validation. |
| **4** | **WhatsApp Integration** | **DONE** | Added green WhatsApp "Chat instantly" card on `/contact` and fixed floating WhatsApp button (bottom-right) across every page linking to `https://wa.me/...` with pre-filled inquiries. Safe placeholder protection enabled. |
| **5** | **Hero Motion Background** | **DONE** | Hero section updated with dynamic brand gradients, glowing ambient orbs, grid overlay, and clean commented `<video>` slot configured with `autoPlay`, `muted`, `loop`, `playsInline`, poster fallback, and `prefers-reduced-motion` compliance. |
| **6** | **Usability, Mobile & Navigation** | **DONE** | Standardized 44px+ tap targets, auto-closing mobile menu on navigation, fixed top navbar with active route highlights, automatic `ScrollToTop` on route transitions, reusable `CTASection` on every page, and 0 errors on `npm run build`. |

---

## ✨ Design Polish (Step H)

All design enhancements are additive, strictly adhering to the CSS variable tokens in `Global.css`, with no external dependencies and full `prefers-reduced-motion` support.

### Global & Navigation
* **Navbar Dynamic Sizing & Blur**: Shrinks slightly upon scroll with increased backdrop blur and shadow (`.sparrow-navbar.scrolled`).
* **Active Nav Indicator**: Active links feature a gradient underline accent.
* **Branded Selection**: Text selection highlights in translucent primary indigo (`::selection`).
* **Themed Slim Scrollbar**: Custom 8px rounded track and hoverable thumb for dark and light modes.
* **Back-to-Top Trigger**: Smooth floating circular button appears when scrolled down > 400px.
* **Mobile Sticky Action Bar (`< 768px`)**: Replaces floating button on small screens with a slim 3-action bottom bar (Call, WhatsApp, Enquire) with body padding to ensure zero content overlap.

### Home Page
* **Hero Hierarchy & Ambient Glow**: Animated floating gradient orbs with breathing pulse and background micro-grid.
* **Floating Info Chips**: Subtle floating keyframe animation on student outcome chips.
* **Section Balance**: Alternating soft background tones with subtle gradient dividers.

### Inner Pages (Courses, Instructors, Blog, Projects, Contact, Legal)
* **Unified PageHeader**: Consistent hero banner with subtle ambient dot grid pattern.
* **Card Refinements**: Standardized radius (`var(--radius-lg)`), hover lift (`translateY(-4px)`), and subtle primary glow illumination.
* **Button Micro-interactions**: Hover arrow slide (`translateX(3px)`) and active press feedback (`scale(0.97)`).
* **Footer Gradient Rule**: Polished top border featuring the brand gradient.

---

## 📋 Phase 2 Summary Checklist (Items 7 to 20)

| # | Requirement | Status | Details |
|---|---|---|---|
| **7** | **Image Optimization & Aspect Ratios** | **DONE** | Non-hero images have explicit aspect-ratios, object-fit constraints, and `loading="lazy"` attributes to prevent cumulative layout shift (CLS). |
| **8** | **Form Loading & Inline Validation** | **DONE** | Contact form, Login form, and Blog Newsletter include inline validation, clear error messages, and loading feedback during submission. |
| **9** | **Accessibility & Focus Rings** | **DONE** | High contrast, visible keyboard focus rings (`:focus-visible` in brand lavender/indigo), clean semantic heading tags (`h1`-`h4`), and `aria-label`s on icon buttons. |
| **10** | **Dynamic Page Titles & SEO Meta Tags** | **DONE** | Added distinct `document.title` on every route transition. Added comprehensive OpenGraph, Twitter Cards, description, and keywords to `index.html`. |
| **11** | **Dedicated 404 Page** | **DONE** | Created `src/pages/NotFound.jsx` with branded 404 typography, helpful explanation, quick destination links, and routed to `*` and `/404`. |
| **12** | **Multi-Device Responsive Polish** | **DONE** | Tested across 360px, 768px, 1024px, and 1440px desktop. Added responsive grids, flexible toolbars, and mobile-friendly tap targets. |
| **13** | **Reduced Motion Accessibility** | **DONE** | `@media (prefers-reduced-motion: reduce)` resets all transitions and animations smoothly across all components. |
| **14** | **Demo / Simulated Data Annotations** | **DONE** | Marked all simulated dashboard & sample items with `/* DEMO DATA */` in `Projects.jsx` and `Login.jsx`. |
| **15** | **Apache SPA Rewrite (.htaccess)** | **DONE** | Created `public/.htaccess` with mod_rewrite rules redirecting client-side routes to `index.html` on Apache/cPanel hosting. |
| **16** | **Course Detail Pages (/courses/:slug)** | **DONE** | Built `src/pages/CourseDetail.jsx` with breadcrumbs, quick specs, "What You Will Master", interactive syllabus module accordion, certificate badge, and direct consultation CTA. |
| **17** | **Blog Reader Modal & Newsletter** | **DONE** | Interactive full-article reader modal and newsletter subscription feedback in `Blog.jsx`. |
| **18** | **Theme Toggle Persistence** | **DONE** | Clean dark/light theme switching with smooth transitions and persistent Obsidian Navy (`#090d16`) dark mode. |
| **19** | **Google Maps Embed Integration** | **DONE** | In `Contact.jsx`, conditional Google Maps iframe renders when `siteConfig.mapsEmbedUrl` is provided, hiding cleanly without broken frames when it is a placeholder. |
| **20** | **Delivery Package & Documentation** | **DONE** | Complete clean source codebase prepared with verification via `npm run build` with 0 errors. |

---

## 🚫 Zero Pricing & Fee Removal Confirmation

Per instructions, **all prices, fees, currency symbols (₹, $), discounts, and payment terms have been removed** across the entire website (`Courses.jsx`, `CourseDetail.jsx`, `Home.jsx`, `Projects.jsx`, modal dialogs, and data files).
Every **"Enroll in Course"** and **"Apply Project"** button now routes directly to `/contact?course=<CourseTitle>` with that course pre-selected in the consultation dropdown.

---

## 📁 Updated Codebase Architecture

```text
Sparrow-project/
├── index.html                               # Plus Jakarta Sans, Space Grotesk, Inter typography, OpenGraph & brand favicon
├── package.json                             # Kept stable dependencies (react, react-dom, react-router-dom)
├── public/
│   ├── .htaccess                            # Apache SPA rewrite rules for Linux/cPanel hosting
│   ├── favicon.png                          # Extracted bird logo icon favicon
│   └── logo.png                             # Official brand logo
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── logo.png                     # Official Sparrow Creative Academy logo
│   │       ├── hero.jpg                     # Hero fallback poster
│   │       └── about.jpg                    # About section visual
│   ├── config/
│   │   └── siteConfig.js                    # Centralized config for phone, email, WhatsApp, address, maps, socials & why points
│   ├── context/
│   │   └── ThemeContext.jsx                 # Light / Dark theme context provider
│   ├── data/
│   │   ├── courses.js                       # Comprehensive course catalog with syllabus (Zero fees/prices)
│   │   ├── instructors.js                   # Mentor profiles, bios, and specialties
│   │   ├── testimonials.js                  # Verified student outcomes and reviews
│   │   └── blog.js                          # Industry articles, tutorials, and career insights
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx                   # Primary (gradient), secondary (outline), sm/md/lg
│   │   │   ├── Card.jsx                     # Standardized card container
│   │   │   ├── SectionHeading.jsx           # Eyebrow pill + Space Grotesk title
│   │   │   ├── PageHeader.jsx               # Unified top hero banner for inner pages
│   │   │   ├── CTASection.jsx               # Universal bottom "Book Free Consultation" banner
│   │   │   ├── FormField.jsx                # Form input/select/textarea with inline validation errors
│   │   │   ├── Modal.jsx                    # Accessible modal dialog
│   │   │   ├── BackToTop.jsx                # Smooth scroll-to-top floating button
│   │   │   └── ScrollToTop.jsx              # Automatic scroll reset on route changes
│   │   └── layout/
│   │       ├── Navbar.jsx                   # Fixed navbar, official logo, active links, ⌘K search modal, Contact Us button
│   │       ├── Footer.jsx                   # 4-column footer reading dynamically from siteConfig.js
│   │       ├── ThemeToggle.jsx              # Day / Night mode toggle
│   │       ├── WhatsAppButton.jsx           # Fixed floating WhatsApp button (desktop)
│   │       └── MobileActionBar.jsx          # Mobile bottom sticky action bar (<768px)
│   ├── pages/
│   │   ├── Home.jsx                         # Landing page with motion hero, stats, features, courses, FAQ
│   │   ├── Courses.jsx                      # Course catalog with categories, search, empty state & clear filters
│   │   ├── CourseDetail.jsx                 # Dedicated course page with syllabus accordion, specs & direct CTA
│   │   ├── Instructors.jsx                  # Mentor profiles & faculty inquiry
│   │   ├── Testimonials.jsx                 # Graduate reviews and outcome metrics (VERIFY WITH CLIENT)
│   │   ├── Blog.jsx                         # Journal, category tabs, modal reader, newsletter inline validation
│   │   ├── Contact.jsx                      # Dual-column contact page, Hostinger PHP API mailer & no-key Google Map
│   │   ├── Projects.jsx                     # Practical project library & deliverables modal (DEMO DATA)
│   │   ├── Login.jsx                        # Student account portal (DEMO DATA)
│   │   ├── Privacy.jsx                      # Privacy policy with contact form notice (REVIEW BEFORE PUBLISHING)
│   │   ├── Terms.jsx                        # Terms of service (REVIEW BEFORE PUBLISHING)
│   │   └── NotFound.jsx                     # Custom 404 Not Found page
│   └── styles/
│       ├── Global.css                       # Design tokens, CSS variables, typography scale, buttons, reset
│       ├── Navbar.css                       # Glassmorphism navbar & mobile drawer
│       ├── Footer.css                       # Clean dark obsidian footer with gradient top border
│       ├── Home.css                         # Homepage animations, grid layouts, FAQ accordion
│       ├── Courses.css                      # Course card styling & category tabs
│       ├── CourseDetail.css                 # Course detail layout, syllabus accordion, sticky sidebar
│       ├── Instructors.css                  # Mentor card grid & verified badges
│       ├── Testimonials.css                 # Testimonial cards & review stars
│       ├── Blog.css                         # Article cards, category filters, modal reader
│       ├── Contact.css                      # Dual-column contact styling & form validation
│       ├── Projects.css                     # Project directory & workspace preview
│       ├── Login.css                        # Split-screen auth layout
│       └── NotFound.css                     # 404 page styling
```

---

## 📌 Things the Client / You Must Provide

The following items are centralized or marked with clear code comments and ready for client configuration:

1. **Receiving Email for Contact Form**:
   - `src/config/siteConfig.js`: Replace `"[CLIENT_EMAIL]"` with client's admissions inbox (e.g. `admissions@sparrowacademy.online`).
   - `public/api/contact.php`: Line 48 `$recipientEmail = "[CLIENT_EMAIL]";` receives the form submission on Hostinger shared hosting.
2. **Client Phone & WhatsApp Number**:
   - `src/config/siteConfig.js`: Replace `"[CLIENT_PHONE]"` and `"[CLIENT_WHATSAPP_WITH_COUNTRY_CODE, digits only]"`.
3. **Office Address & Maps Link**:
   - `src/config/siteConfig.js`: Replace `"[CLIENT_ADDRESS]"` and `"[GOOGLE_MAPS_LINK]"`.
   - Contact page Google Map embed automatically builds from the address once updated.
4. **Social Media URLs**:
   - `src/config/siteConfig.js`: Fill in active URLs for `instagram`, `youtube`, `linkedin`, and `facebook` in `siteConfig.socialLinks`. Footer icons appear only when real URLs are provided.
5. **Hero Video (`hero.mp4`)**:
   - Place your optimized looping MP4 at `src/assets/videos/hero.mp4` when ready to activate the video slot in `Home.jsx`.
6. **Items Marked `/* VERIFY WITH CLIENT */`**:
   - `src/data/courses.js`: Course delivery modes ("Online Live Cohort & Offline Studio Mentorship in Bengaluru") and batch capacity.
   - `src/data/testimonials.js`: Student names, roles, and review quotes for final verification.
   - `src/pages/Home.jsx`: Stat cards (Learners Trained, Course Satisfaction) ready for client metrics.
7. **Items Marked `/* REVIEW BEFORE PUBLISHING */`**:
   - `src/pages/Privacy.jsx`: Legal privacy policy text and contact form data notice.
   - `src/pages/Terms.jsx`: Legal terms of service.


