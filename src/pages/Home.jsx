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

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const IconCCTV = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <path d="M15 10l5-3v10l-5-3v-4z" />
    <rect x="2" y="6" width="13" height="12" rx="2" />
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

          <div className="courses-grid">
            {COURSES_DATA.map((c) => (
              <article className="course-card" key={c.id}>
                {/* Clean Complete 16:9 Thumbnail Header */}
                <div className="course-card-thumb-wrapper">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={`${c.title} course illustration`}
                      className="course-card-thumb"
                      loading="lazy"
                      width="640"
                      height="360"
                    />
                  ) : (
                    <div className="course-card-banner fallback">
                      <span className="course-banner-icon" aria-hidden="true">{c.icon}</span>
                    </div>
                  )}
                </div>

                <div className="course-body">
                  <div className="course-badges-row">
                    <span className="course-badge">{c.badge}</span>
                    <span className="course-category-tag">{c.category}</span>
                  </div>

                  <h3 className="course-title">{c.title}</h3>
                  <p className="course-desc">{c.desc}</p>

                  {/* Tool Badges */}
                  {c.tools && c.tools.length > 0 && (
                    <div className="course-tools-list" aria-label="Tools covered">
                      {c.tools.slice(0, 3).map((tool) => (
                        <span key={tool} className="course-tool-pill">{tool}</span>
                      ))}
                    </div>
                  )}

                  <div className="course-meta">
                    <span title="Skill Level">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M12 20v-6M6 20v-3M18 20v-9" strokeLinecap="round" />
                      </svg>
                      {c.level}
                    </span>
                    <span title="Total Duration">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" strokeLinecap="round" />
                      </svg>
                      {c.duration}
                    </span>
                    <span title="Career Support" className="placement-meta-item">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      100% Placement Support
                    </span>
                  </div>

                  <div className="course-card-actions">
                    <Link
                      to={`/courses/${c.slug}`}
                      className="btn-reusable btn-secondary btn-md"
                      style={{ flex: 1, textDecoration: "none" }}
                    >
                      Curriculum
                    </Link>
                    <button
                      type="button"
                      className="btn-reusable btn-primary btn-md enroll-button"
                      style={{ flex: 1.2 }}
                      onClick={() => navigate(`/contact?course=${encodeURIComponent(c.title)}`)}
                    >
                      Enroll <IconArrow />
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

      {/* ── 5. STUDENT SAFETY & FACILITIES SECTION ── */}
      <section className="facilities-section" id="facilities">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-eyebrow">Campus Life & Well-Being</span>
            <h2 className="section-title">
              Student Safety & <span className="gradient-text">Facilities</span>
            </h2>
            <p className="section-sub">
              We provide a supportive, secure, and modern infrastructure designed to ensure peace of mind and an optimal environment for creative learning.
            </p>
          </div>

          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-icon-box" aria-hidden="true">
                <IconShield />
              </div>
              <h3 className="facility-title">Student Safety & Security</h3>
              <p className="facility-desc">
                Dedicated campus security protocols, verified visitor screening, and on-ground staff support to maintain an inclusive, secure, and respectful learning environment at all times.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-icon-box" aria-hidden="true">
                <IconHome />
              </div>
              <h3 className="facility-title">Accommodation for All Students</h3>
              <p className="facility-desc">
                Comfortable, safe, and well-maintained hostel and accommodation assistance available for all students relocating to Bengaluru, complete with essential amenities and convenient transit options.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-icon-box" aria-hidden="true">
                <IconCCTV />
              </div>
              <h3 className="facility-title">CCTV Surveillance Throughout the Premises</h3>
              <p className="facility-desc">
                Comprehensive 24/7 high-definition CCTV camera coverage across computer labs, studios, communal zones, corridors, and campus access points to ensure constant student safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PROJECTS SECTION PREVIEW ── */}
      <section className="home-preview-section alt-bg" id="projects-preview">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-eyebrow">Hands-On Experience</span>
              <h2 className="section-title">
                Real-World <span className="gradient-text">Capstone Projects</span>
              </h2>
            </div>
            <Link to="/projects" className="section-link">
              View Project Method <IconArrow />
            </Link>
          </div>

          <div className="home-preview-grid">
            <div className="home-preview-card">
              <div className="home-preview-icon-box">
                <IconProject />
              </div>
              <h3 className="home-preview-card-title">Production Briefs</h3>
              <p className="home-preview-card-desc">
                Engage in authentic client-style briefs covering branding systems, 3D visualization, VFX sequences, and digital interfaces.
              </p>
            </div>

            <div className="home-preview-card">
              <div className="home-preview-icon-box">
                <IconMonitor />
              </div>
              <h3 className="home-preview-card-title">4-Step Studio Method</h3>
              <p className="home-preview-card-desc">
                Learn how professional teams research, plan, execute, and present work using industry-standard production pipelines.
              </p>
            </div>

            <div className="home-preview-card">
              <div className="home-preview-icon-box">
                <IconCertificate />
              </div>
              <h3 className="home-preview-card-title">Showcase-Ready Output</h3>
              <p className="home-preview-card-desc">
                Every project is refined and documented to stand out in professional portfolios for creative agency recruiters.
              </p>
            </div>
          </div>

          <div className="home-preview-cta">
            <Link to="/projects" className="btn-reusable btn-secondary btn-md">
              Explore Capstone Projects <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. LEARNING METHODOLOGY PREVIEW ── */}
      <section className="home-preview-section" id="methodology-preview">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-eyebrow">Our Teaching Approach</span>
              <h2 className="section-title">
                Studio-First <span className="gradient-text">Learning Methodology</span>
              </h2>
            </div>
            <Link to="/learning-methodology" className="section-link">
              Read Full Methodology <IconArrow />
            </Link>
          </div>

          <div className="home-preview-grid">
            <div className="home-preview-card">
              <div className="home-preview-icon-box">
                <IconLayers />
              </div>
              <h3 className="home-preview-card-title">Studio-First Immersion</h3>
              <p className="home-preview-card-desc">
                Hands-on studio workflows where students create practical assets daily instead of passive theoretical lectures.
              </p>
            </div>

            <div className="home-preview-card">
              <div className="home-preview-icon-box">
                <IconUsers />
              </div>
              <h3 className="home-preview-card-title">Live Mentor Critiques</h3>
              <p className="home-preview-card-desc">
                Weekly feedback sessions and design critiques modeled after leading creative agency and studio dailies.
              </p>
            </div>

            <div className="home-preview-card">
              <div className="home-preview-icon-box">
                <IconRocket />
              </div>
              <h3 className="home-preview-card-title">Modern AI Pipelines</h3>
              <p className="home-preview-card-desc">
                Seamless integration of generative AI tools alongside industry-standard software like Blender, Adobe Suite, and Unreal.
              </p>
            </div>
          </div>

          <div className="home-preview-cta">
            <Link to="/learning-methodology" className="btn-reusable btn-secondary btn-md">
              Explore Our Methodology <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. CERTIFICATIONS PREVIEW ── */}
      <section className="home-preview-section alt-bg" id="certifications-preview">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-eyebrow">Recognized Credentials</span>
              <h2 className="section-title">
                Verified Academy <span className="gradient-text">Certifications</span>
              </h2>
            </div>
            <Link to="/certifications" className="section-link">
              Certification Details <IconArrow />
            </Link>
          </div>

          <div className="home-preview-grid">
            <div className="home-preview-card">
              <div className="home-preview-icon-box">
                <IconCertificate />
              </div>
              <h3 className="home-preview-card-title">Performance-Based Assessment</h3>
              <p className="home-preview-card-desc">
                Certificates are awarded based on rigorous project evaluations, technical milestones, and practical execution.
              </p>
            </div>

            <div className="home-preview-card">
              <div className="home-preview-icon-box">
                <IconProject />
              </div>
              <h3 className="home-preview-card-title">Portfolio Validation</h3>
              <p className="home-preview-card-desc">
                Each certificate represents a complete, faculty-reviewed body of work demonstrating job-ready competency.
              </p>
            </div>

            <div className="home-preview-card">
              <div className="home-preview-icon-box">
                <IconShield />
              </div>
              <h3 className="home-preview-card-title">Digital Verification</h3>
              <p className="home-preview-card-desc">
                Unique credential IDs allow employers and studios to authenticate your qualification and training credentials.
              </p>
            </div>
          </div>

          <div className="home-preview-cta">
            <Link to="/certifications" className="btn-reusable btn-secondary btn-md">
              View Certification Framework <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. PLACEMENTS PREVIEW ── */}
      <section className="placement-section" id="placement">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-eyebrow">Career Outcomes</span>
              <h2 className="section-title">
                Dedicated <span className="gradient-text">Placement Support</span>
              </h2>
            </div>
            <Link to="/placements" className="section-link">
              Placement Support Details <IconArrow />
            </Link>
          </div>

          <div className="placement-grid">
            <div className="placement-card">
              <div className="placement-icon-box" aria-hidden="true">
                <IconProject />
              </div>
              <h3 className="placement-card-title">Portfolio Building</h3>
              <p className="placement-card-desc">
                Graduate with real, reviewed projects that show recruiters what you can do.
              </p>
            </div>

            <div className="placement-card">
              <div className="placement-icon-box" aria-hidden="true">
                <IconCertificate />
              </div>
              <h3 className="placement-card-title">Resume & Profile Prep</h3>
              <p className="placement-card-desc">
                Resume, LinkedIn, Behance, and showreel guidance tailored to creative roles.
              </p>
            </div>

            <div className="placement-card">
              <div className="placement-icon-box" aria-hidden="true">
                <IconUsers />
              </div>
              <h3 className="placement-card-title">Interview Training</h3>
              <p className="placement-card-desc">
                Mock interviews, portfolio walkthrough practice, and technical feedback with mentors.
              </p>
            </div>

            <div className="placement-card">
              <div className="placement-icon-box" aria-hidden="true">
                <IconBriefcase />
              </div>
              <h3 className="placement-card-title">Job & Studio Referrals</h3>
              <p className="placement-card-desc">
                Direct referrals, internship opportunities, and industry career assistance.
              </p>
            </div>
          </div>

          <div className="home-preview-cta" style={{ marginTop: "36px" }}>
            <Link to="/placements" className="btn-reusable btn-secondary btn-md">
              Explore Placement Support <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 10. PHOTO GALLERY PREVIEW ── */}
      <section className="home-preview-section alt-bg" id="gallery-preview">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-eyebrow">Campus Life & Spaces</span>
              <h2 className="section-title">
                Academy <span className="gradient-text">Photo Gallery</span>
              </h2>
            </div>
            <Link to="/gallery" className="section-link">
              View Full Gallery <IconArrow />
            </Link>
          </div>

          <div className="home-preview-grid">
            <div className="gallery-card-placeholder">
              <div className="gallery-frame-box">
                <div className="gallery-frame-icon">
                  <IconCamera />
                </div>
                <span className="gallery-frame-tag">Studio Labs</span>
                <span className="gallery-frame-subtext">Creative Workstations & Hardware</span>
              </div>
              <div className="gallery-card-body">
                <h4 className="gallery-card-caption">High-Performance Creative Labs</h4>
                <p className="gallery-card-meta">State-of-the-art workstations for design, 3D, and VFX</p>
              </div>
            </div>

            <div className="gallery-card-placeholder">
              <div className="gallery-frame-box">
                <div className="gallery-frame-icon">
                  <IconCamera />
                </div>
                <span className="gallery-frame-tag">Classrooms</span>
                <span className="gallery-frame-subtext">Interactive Classrooms & Studios</span>
              </div>
              <div className="gallery-card-body">
                <h4 className="gallery-card-caption">Collaborative Learning Spaces</h4>
                <p className="gallery-card-meta">Interactive mentor-led lecture rooms & review hubs</p>
              </div>
            </div>

            <div className="gallery-card-placeholder">
              <div className="gallery-frame-box">
                <div className="gallery-frame-icon">
                  <IconCamera />
                </div>
                <span className="gallery-frame-tag">Events</span>
                <span className="gallery-frame-subtext">Workshops & Guest Masterclasses</span>
              </div>
              <div className="gallery-card-body">
                <h4 className="gallery-card-caption">Student Masterclasses & Events</h4>
                <p className="gallery-card-meta">Industry speaker sessions, demo days, and workshops</p>
              </div>
            </div>
          </div>

          <div className="home-preview-cta">
            <Link to="/gallery" className="btn-reusable btn-secondary btn-md">
              View Photo Gallery <IconArrow />
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
