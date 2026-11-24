import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { siteConfig } from "../config/siteConfig.js";
import { COURSES_DATA } from "../data/courses.js";
import { setPageSeo } from "../utils/seo.js";

import heroImg from "../assets/images/hero.jpg";

import "../styles/Home.css";
import "../styles/Courses.css";
import "../styles/PhotoGallery.css";

/* =========================================================
   ICONS
   ========================================================= */

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M8 5v14l11-7L8 5z" />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 12h18" />
    <path d="M10 12v2h4v-2" />
  </svg>
);

const IconProject = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M7 8h10M7 12h6M7 16h8" />
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M16 14c2.8.2 5 2.5 5 6" />
  </svg>
);

const IconCertificate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <circle cx="12" cy="9" r="6" />
    <path d="M9 14.5L7.5 22l4.5-2 4.5 2-1.5-7.5" />
    <path d="M9.5 9l1.5 1.5L14.5 7" />
  </svg>
);

const IconMonitor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <path d="M14 4c3-2 6-1 6-1s1 3-1 6c-2 3-6 5-9 6l-3-3c1-3 4-6 7-8Z" />
    <path d="M8 16l-4 4M7 12l-3-1M12 17l1 3" />
    <circle cx="15" cy="8" r="1.5" />
  </svg>
);

const IconLayers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconCamera = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

/* =========================================================
   HOME PAGE COMPONENT
   ========================================================= */

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageSeo({
      title: "AI Design, VFX & Animation Courses in Bengaluru | Sparrow Creative Academy",
      description: "Learn AI-powered design, video creation, VFX and animation at Sparrow Creative Academy, Bengaluru. Hands-on training in Midjourney, Runway, After Effects and Blender. Book a free consultation."
    });
  }, []);

  return (
    <div className="home-wrapper">

      {/* ── 1. NAVBAR ── */}
      <Navbar />

      {/* ── 2. HERO SECTION ── */}
      <section className="hero">
        <div className="hero-motion-bg">
          <div className="hero-background-shape hero-shape-one" />
          <div className="hero-background-shape hero-shape-two" />
          <div className="hero-grid-overlay" />

          <div className="hero-video-visual-container" aria-hidden="true">
            <div className="hero-video-ambient-mesh" />
            <div className="hero-video-gradient-overlay" />
          </div>
        </div>

        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              AI-Powered Creative Education
            </div>

            <h1 className="hero-title">
              Master <span className="gradient-text">AI-Driven</span> Design & Animation
            </h1>

            <p className="hero-subtitle">
              {siteConfig.companyName} blends design, animation, and AI tools for quality execution in branding, advertising, digital product design, and cinematic video.
            </p>

            <div className="hero-actions">
              <Link to="/courses" className="btn-reusable btn-primary btn-lg">
                Explore Courses <IconArrow />
              </Link>
              <Link to="/contact" className="btn-reusable btn-secondary btn-lg">
                <IconPlay /> Book Consultation
              </Link>
            </div>

            {/* ── 3. BENEFIT LABELS BELOW HERO ── */}
            <div className="hero-highlights" aria-label="Academy Core Benefits">
              <div className="hero-highlight">
                <span className="hero-highlight-icon"><IconCheck /></span>
                <span>Industry-Relevant Training</span>
              </div>
              <div className="hero-highlight">
                <span className="hero-highlight-icon"><IconCheck /></span>
                <span>Real-World Projects</span>
              </div>
              <div className="hero-highlight hero-highlight-featured">
                <span className="hero-highlight-icon"><IconCheck /></span>
                <span>Career & Placement Support</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-frame">
              <div className="hero-img-wrapper">
                <video
                  className="hero-card-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={heroImg}
                  aria-label="AI-driven digital art and creative design animation"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                  <img
                    src={heroImg}
                    alt="Students learning and building practical skills at Sparrow Academy"
                    className="hero-img"
                    width="600"
                    height="450"
                    fetchpriority="high"
                  />
                </video>
                <img
                  src={heroImg}
                  alt="Students learning and building practical skills at Sparrow Academy"
                  className="hero-img hero-img-reduced-motion"
                  width="600"
                  height="450"
                  aria-hidden="true"
                />
                <div className="hero-img-overlay" />
              </div>

              {/* Floating cards: Live Projects and Practical Training */}
              <div className="hero-floating-cards-group" aria-label="Key highlights">
                <div className="hero-floating-card hero-floating-card-one">
                  <span className="hero-floating-icon"><IconProject /></span>
                  <div className="hero-floating-text">
                    <strong>Live Projects</strong>
                    <span>Learn by building</span>
                  </div>
                </div>

                <div className="hero-floating-card hero-floating-card-two">
                  <span className="hero-floating-icon"><IconMonitor /></span>
                  <div className="hero-floating-text">
                    <strong>Practical Training</strong>
                    <span>Hands-on studio workflows</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. COURSES SECTION (PREVIEW OF APPROVED COURSES) ── */}
      <section className="home-courses-section" id="courses">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-eyebrow">Academic Offerings</span>
            <h2 className="section-title">
              Our Professional <span className="gradient-text">Programs</span>
            </h2>
            <p className="section-sub">
              Career-focused courses combining foundational design principles, advanced technical workflows, and industry-grade AI tools.
            </p>
          </div>

          <div className="home-courses-grid">
            {COURSES_DATA.map((c) => (
              <article className="home-course-card" key={c.id}>
                {/* 16:9 course image – full, no cropping */}
                <div className="home-course-card-thumb-wrapper">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={`${c.title} course illustration`}
                      className="home-course-card-thumb"
                      loading="lazy"
                      width="640"
                      height="360"
                    />
                  ) : (
                    <div className="home-course-card-fallback">
                      <span aria-hidden="true">{c.icon}</span>
                    </div>
                  )}
                </div>

                <div className="home-course-card-body">
                  <h3 className="home-course-card-title">{c.title}</h3>

                  <div className="home-course-card-actions">
                    <button
                      type="button"
                      className="btn-reusable btn-primary btn-md home-enquire-btn"
                      onClick={() => navigate(`/contact?course=${encodeURIComponent(c.title)}`)}
                    >
                      Enquire Now <IconArrow />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="home-courses-footer">
            <Link to="/courses" className="btn-reusable btn-primary btn-lg">
              Explore All 11 Courses <IconArrow />
            </Link>
          </div>
        </div>
      </section>


      {/* ── BOTTOM CTA SECTION ── */}
      <CTASection
        title="Ready to Start Your Creative Career?"
        subtitle="Get personalized 1-on-1 counseling, course guidance, and master industry-standard workflows."
        buttonText="Book Free Consultation"
        buttonLink="/contact"
        note="1-on-1 Personalized Guidance • Prompt Response"
      />

      {/* ── 11. FOOTER ── */}
      <Footer />

    </div>
  );
}
