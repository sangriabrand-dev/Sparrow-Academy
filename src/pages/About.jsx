import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { siteConfig } from "../config/siteConfig.js";
import { setPageSeo } from "../utils/seo.js";
import "../styles/About.css";

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTarget = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconEye = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32" aria-hidden="true">
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M16 14c2.8.2 5 2.5 5 6" />
  </svg>
);

const IconAward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32" aria-hidden="true">
    <circle cx="12" cy="9" r="6" />
    <path d="M9 14.5L7.5 22l4.5-2 4.5 2-1.5-7.5" />
  </svg>
);

const IconMapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

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

      {/* ── OUR STORY ── */}
      <section className="about-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-content">
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title">Built for the <span className="gradient-text">Creative Economy</span></h2>
              <p className="about-story-text">
                Sparrow Creative Academy was founded with a single belief — that creative education in India must evolve to meet the demands of an AI-powered industry. We bridge the gap between traditional design training and the cutting-edge tools shaping the global creative economy.
              </p>
              <p className="about-story-text">
                Located in Kodigehalli, Bengaluru, our campus brings together working professionals, industry mentors, and passionate learners under one roof — building real skills through real projects.
              </p>
              <div className="about-story-points">
                {[
                  "AI-integrated curriculum across all programs",
                  "Project-based learning with agency-grade deliverables",
                  "1-on-1 mentor guidance from industry practitioners",
                  "Career and placement support for every graduate"
                ].map((point) => (
                  <div className="about-story-point" key={point}>
                    <span className="about-point-icon"><IconCheck /></span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
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

      {/* ── MISSION, VISION, VALUES ── */}
      <section className="about-section alt-bg">
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

      {/* ── WHY SPARROW ── */}
      <section className="about-section">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="section-title">Why <span className="gradient-text">Sparrow Academy</span></h2>
          </div>
          <div className="about-why-grid">
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
        </div>
      </section>

      {/* ── QUICK STATS ── */}
      <section className="about-section alt-bg">
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
