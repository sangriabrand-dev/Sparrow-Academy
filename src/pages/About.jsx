import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { siteConfig } from "../config/siteConfig.js";
import { setPageSeo } from "../utils/seo.js";
import "../styles/About.css";

/* ── ICONS ── */
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconTarget = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);
const IconEye = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.5" /><path d="M16 14c2.8.2 5 2.5 5 6" />
  </svg>
);
const IconAward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <circle cx="12" cy="9" r="6" /><path d="M9 14.5L7.5 22l4.5-2 4.5 2-1.5-7.5" />
  </svg>
);
const IconMapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);
const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <path d="M14 4c3-2 6-1 6-1s1 3-1 6c-2 3-6 5-9 6l-3-3c1-3 4-6 7-8Z" />
    <path d="M8 16l-4 4M7 12l-3-1M12 17l1 3" />
    <circle cx="15" cy="8" r="1.5" />
  </svg>
);
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const IconMonitor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" />
  </svg>
);

/* ── EMPLOYEE DATA (Mock) ── */
const EMPLOYEES = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Creative Director & Lead Instructor",
    exp: "10+ years",
    bio: "Former creative head at leading digital agencies. Specializes in brand identity, motion design, and AI-integrated creative workflows. Mentors students on real commercial projects.",
    skills: ["Brand Design", "Motion Graphics", "AI Tools", "Mentorship"],
    initials: "RS",
    avatarBg: "linear-gradient(135deg, #5B4BE1, #2563EB)"
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Head of Technology & AI Programs",
    exp: "8+ years",
    bio: "AI/ML engineer and educator with deep expertise in generative AI, Python, and creative technology. Bridges the gap between technical skills and creative applications for industry-ready graduates.",
    skills: ["AI & ML", "Python", "Generative AI", "Cloud DevOps"],
    initials: "PN",
    avatarBg: "linear-gradient(135deg, #7c3aed, #ec4899)"
  }
];

/* ── WHY CARDS ROW 2 (new 4 cards) ── */
const WHY_CARDS_ROW2 = [
  {
    icon: <IconMonitor />,
    title: "Learn by Doing",
    desc: "Most of every class is practical. You work on real briefs, not just theory slides."
  },
  {
    icon: <IconUsers />,
    title: "Mentors Who Guide You",
    desc: "Trainers who explain clearly, review your work and tell you honestly how to improve."
  },
  {
    icon: <IconCalendar />,
    title: "Flexible Batches",
    desc: "Weekday, weekend and online-support options for students and working professionals."
  },
  {
    icon: <IconRocket />,
    title: "Beginner Friendly",
    desc: "No prior experience needed. We start from the basics and take you step by step."
  }
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageSeo({
      title: "About Us | Sparrow Creative Academy, Bengaluru",
      description: "Learn about Sparrow Creative Academy — Bengaluru's AI-first creative education institution offering hands-on design, animation, VFX, and technology courses."
    });
  }, []);

  return (
    <div className="about-wrapper">
      <Navbar />

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="about-hero-shape about-shape-one" />
          <div className="about-hero-shape about-shape-two" />
          <div className="about-hero-grid" />
        </div>
        <div className="container about-hero-inner">
          <span className="section-eyebrow">Who We Are</span>
          <h1 className="about-hero-title">
            Bengaluru's <span className="gradient-text">AI-First</span> Creative Academy
          </h1>
          <p className="about-hero-desc">
            Sparrow Creative Academy is a modern creative education institution in Bengaluru, dedicated to training the next generation of designers, animators, filmmakers, and technologists through hands-on, industry-aligned programs.
          </p>
          <div className="about-hero-actions">
            <Link to="/courses" className="btn-reusable btn-primary btn-lg">Explore Courses</Link>
            <Link to="/contact" className="btn-reusable btn-secondary btn-lg">Book Consultation</Link>
          </div>
        </div>
      </section>

      {/* ── 1. SPARROW ACADEMY (was "Our Story") ── */}
      <section className="about-section">
        <div className="container">
          <div className="about-sparrow-grid">
            <div className="about-sparrow-content">
              <span className="section-eyebrow">Sparrow Academy</span>
              <h2 className="section-title">Built for the <span className="gradient-text">Creative Economy</span></h2>
              <p className="about-story-text">
                Today, brands, startups, studios and creators all need strong visuals, smart content and fast ideas. Sparrow Academy trains you for exactly that world.
              </p>
              <p className="about-story-text">
                The creative economy is growing every day. Businesses need designers, animators, video editors and content creators who can think well and deliver fast. At Sparrow Academy, we prepare you with the right mix of creative skills, modern AI tools and real project experience.
              </p>
              <p className="about-story-text">
                We don't just teach software. We teach you how to turn your creativity into work, whether that is a job at a studio, freelance clients or your own creative brand.
              </p>
            </div>
            <div className="about-story-visual">
              <div className="about-visual-card">
                <div className="about-visual-icon-box">
                  <IconMapPin />
                </div>
                <h4>Our Campus</h4>
                <p>{siteConfig.address}</p>
                <a
                  href={siteConfig.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-reusable btn-secondary btn-sm"
                  style={{ marginTop: "16px", display: "inline-block", textDecoration: "none" }}
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. OUR PROFESSIONAL EXPERTISE ── */}
      <section className="about-section alt-bg">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-eyebrow">Meet the Team</span>
            <h2 className="section-title">Our Professional <span className="gradient-text">Expertise</span></h2>
            <p className="section-sub">Led by experienced industry practitioners who bring real-world knowledge into every classroom.</p>
          </div>
          <div className="about-employee-grid">
            {EMPLOYEES.map((emp) => (
              <div className="about-employee-card" key={emp.id}>
                <div className="about-emp-top">
                  <div className="about-emp-avatar" style={{ background: emp.avatarBg }}>
                    {emp.initials}
                  </div>
                  <div className="about-emp-meta">
                    <h3 className="about-emp-name">{emp.name}</h3>
                    <span className="about-emp-role">{emp.role}</span>
                    <span className="about-emp-exp">{emp.exp} experience</span>
                  </div>
                </div>
                <p className="about-emp-bio">{emp.bio}</p>
                <div className="about-emp-skills">
                  {emp.skills.map((skill) => (
                    <span className="about-emp-skill-pill" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MISSION, VISION, VALUES ── */}
      <section className="about-section">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-eyebrow">What Drives Us</span>
            <h2 className="section-title">Mission, Vision & <span className="gradient-text">Values</span></h2>
          </div>
          <div className="about-mvv-grid">
            <div className="about-mvv-card">
              <div className="about-mvv-icon"><IconTarget /></div>
              <h3>Our Mission</h3>
              <p>To deliver practical, AI-first creative education that prepares students for real roles in design, animation, filmmaking, and technology — with zero gap between classroom and industry.</p>
            </div>
            <div className="about-mvv-card">
              <div className="about-mvv-icon"><IconEye /></div>
              <h3>Our Vision</h3>
              <p>To be South India's most trusted creative institution — known for producing work-ready graduates who lead projects, build portfolios, and contribute meaningfully to the global creative industry.</p>
            </div>
            <div className="about-mvv-card">
              <div className="about-mvv-icon"><IconHeart /></div>
              <h3>Our Values</h3>
              <p>Practical learning over passive lectures. Real projects over theory. Honest mentorship over empty promises. Student success as our only metric.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US ── */}
      <section className="about-section alt-bg">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="section-title">Why <span className="gradient-text">Sparrow Academy</span></h2>
          </div>

          {/* Row 1 — existing 4 cards (with check icon style) */}
          <div className="about-why-grid" style={{ marginTop: "36px" }}>
            {siteConfig.whySparrowPoints.map((point) => (
              <div className="about-why-card" key={point.title}>
                <div className="about-why-check"><IconCheck /></div>
                <div>
                  <h4>{point.title}</h4>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 — 4 new feature cards */}
          <div className="about-feature-grid">
            {WHY_CARDS_ROW2.map((card) => (
              <div className="about-feature-card" key={card.title}>
                <div className="about-feature-icon">{card.icon}</div>
                <h4 className="about-feature-title">{card.title}</h4>
                <p className="about-feature-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. QUICK STATS ── */}
      <section className="about-section">
        <div className="container">
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-icon"><IconUsers /></div>
              <div className="about-stat-text">
                <strong>Hands-On Learning</strong>
                <span>Studio-first approach on every program</span>
              </div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-icon"><IconAward /></div>
              <div className="about-stat-text">
                <strong>Verified Certifications</strong>
                <span>Portfolio-backed credentials for every graduate</span>
              </div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-icon"><IconTarget /></div>
              <div className="about-stat-text">
                <strong>100% Placement Support</strong>
                <span>Resume, portfolio, and referral assistance</span>
              </div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-icon"><IconMapPin /></div>
              <div className="about-stat-text">
                <strong>Bengaluru Campus</strong>
                <span>Kodigehalli, Sahakar Nagar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Ready to Join Sparrow Creative Academy?"
        subtitle="Talk to our admissions team and get personalized course guidance."
        buttonText="Book Free Consultation"
        buttonLink="/contact"
        note="1-on-1 Personalized Guidance • Prompt Response"
      />

      <Footer />
    </div>
  );
}
