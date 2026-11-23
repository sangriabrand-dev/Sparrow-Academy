import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { INSTRUCTORS_DATA } from "../data/instructors.js";
import { setPageSeo } from "../utils/seo.js";
import instructorsHeader from "../assets/images/instructors-header.svg";
import "../styles/Instructors.css";

export default function Instructors() {
  useEffect(() => {
    window.scrollTo(0, 0);
        setPageSeo({
      title: "Mentors & Faculty for AI Design and Animation | Sparrow Creative Academy",
      description: "Learn from working designers, VFX artists, animators and AI specialists mentoring at Sparrow Creative Academy in Bengaluru."
    });
  }, []);

  return (
    <div className="instructors-wrapper">
      {/* ── UNIFIED NAVBAR ── */}
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <PageHeader
        eyebrow="World-Class Faculty"
        title="Learn from Industry Practitioners"
        description="Our mentors are seasoned designers, art directors, and engineers actively working on top creative and commercial projects worldwide."
        backgroundImage={instructorsHeader}
        imageAlt="Abstract luminous beacon rings and mentorship constellation network"
      />

      {/* ── INSTRUCTORS GRID ── */}
      <section className="instructors-section">
        <div className="container">
          <div className="instructors-grid">
            {INSTRUCTORS_DATA.map((ins) => (
              <article className="instructor-card" key={ins.name}>
                <div className="instructor-card-top">
                  <div className="instructor-avatar" style={{ background: ins.avatarBg }}>
                    <span>{ins.initials}</span>
                    <span className="verified-badge" title="Verified Instructor">✓</span>
                  </div>

                  <div className="instructor-info">
                    <h3 className="instructor-name">{ins.name}</h3>
                    <p className="instructor-role">{ins.role}</p>
                    <span className="instructor-exp">{ins.exp}</span>
                  </div>
                </div>

                <p className="instructor-bio">{ins.bio}</p>

                <div className="instructor-teaching">
                  <small>PRIMARY PROGRAM</small>
                  <strong>{ins.courses}</strong>
                </div>

                <div className="instructor-specialties">
                  {ins.specialties.map((spec) => (
                    <span key={spec} className="specialty-pill">{spec}</span>
                  ))}
                </div>

                <div className="instructor-footer">
                  <Link to={`/contact?course=${encodeURIComponent(ins.courses)}`} className="mentor-courses-link">
                    Connect with Mentor →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEACH WITH US CTA ── */}
      <CTASection
        title="Want to Mentor at Sparrow Creative Academy?"
        subtitle="Share your practical knowledge with passionate creators around the world. Connect with our academic board to explore faculty roles."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />

      {/* ── UNIFIED FOOTER ── */}
      <Footer />
    </div>
  );
}