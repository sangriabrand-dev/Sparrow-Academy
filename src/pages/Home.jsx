import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { siteConfig } from "../config/siteConfig.js";
import { COURSES_DATA } from "../data/courses.js";
import { setPageSeo } from "../utils/seo.js";

import heroImg from "../assets/images/hero.jpg";

import "../styles/Home.css";

/* ── ICONS ── */
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
const IconProject = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M7 8h10M7 12h6M7 16h8" />
  </svg>
);
const IconMonitor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

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
                  autoPlay muted loop playsInline preload="metadata"
                  poster={heroImg}
                  aria-label="AI-driven digital art and creative design animation"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                  <img src={heroImg} alt="Students learning at Sparrow Academy" className="hero-img" width="600" height="450" fetchpriority="high" />
                </video>
                <img src={heroImg} alt="Students learning at Sparrow Academy" className="hero-img hero-img-reduced-motion" width="600" height="450" aria-hidden="true" />
                <div className="hero-img-overlay" />
              </div>
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

      {/* ── 3. COURSES SECTION — SIMPLE CARDS ── */}
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

          <div className="home-simple-courses-grid">
            {COURSES_DATA.map((c) => (
              <article className="home-simple-course-card" key={c.id}>
                <div className="home-simple-course-img-wrap">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.title}
                      className="home-simple-course-img"
                      loading="lazy"
                      width="400"
                      height="220"
                    />
                  ) : (
                    <div className="home-simple-course-fallback">
                      <span>{c.icon}</span>
                    </div>
                  )}
                </div>
                <div className="home-simple-course-body">
                  <h3 className="home-simple-course-title">{c.title}</h3>
                  <p className="home-simple-course-desc">{c.desc}</p>
                  <button
                    type="button"
                    className="btn-reusable btn-primary btn-sm home-simple-enroll-btn"
                    onClick={() => navigate(`/contact?course=${encodeURIComponent(c.title)}`)}
                  >
                    Enroll Now <IconArrow />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="home-courses-footer">
            <Link to="/courses" className="btn-reusable btn-primary btn-lg">
              Explore All Courses <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. EDUCATION STREAMS — Degrees & Streams ── */}
      <section className="home-streams-section" id="streams">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-eyebrow">Who Can Join</span>
            <h2 className="section-title">
              Students from <span className="gradient-text">All Backgrounds</span> Welcome
            </h2>
            <p className="section-sub">
              Whether you are from Arts, Science, Commerce, or Engineering — our programs are designed for anyone with a passion for creativity and technology.
            </p>
          </div>

          <div className="home-streams-two-col">
            {/* Left — Degrees */}
            <div className="home-streams-box">
              <div className="home-streams-box-header">
                <span className="home-streams-box-icon">🎓</span>
                <h3>From Various Degrees</h3>
              </div>
              <div className="home-streams-tags">
                {["BE / B.Tech", "BCA", "BSC", "B.Com", "MCA", "ME / M.Tech", "MBA", "M.Sc", "More..."].map(d => (
                  <span key={d} className="home-streams-tag">{d}</span>
                ))}
              </div>
            </div>

            {/* Right — Streams */}
            <div className="home-streams-box">
              <div className="home-streams-box-header">
                <span className="home-streams-box-icon">📚</span>
                <h3>From Various Streams</h3>
              </div>
              <div className="home-streams-tags">
                {["CS", "EEE", "IT", "CME", "ECE", "ME", "IS", "CIV", "More..."].map(s => (
                  <span key={s} className="home-streams-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="home-streams-cta">
            <Link to="/contact" className="btn-reusable btn-primary btn-lg">
              Join Our Training Programs <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Ready to Start Your Creative Career?"
        subtitle="Get personalized 1-on-1 counseling, course guidance, and master industry-standard workflows."
        buttonText="Book Free Consultation"
        buttonLink="/contact"
        note="1-on-1 Personalized Guidance • Prompt Response"
      />

      {/* ── FOOTER ── */}
      <Footer />

    </div>
  );
}
