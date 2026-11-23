import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { TESTIMONIALS_DATA } from "../data/testimonials.js";
import { setPageSeo } from "../utils/seo.js";
import testimonialsHeader from "../assets/images/testimonials-header.svg";
import "../styles/Testimonials.css";

/* ── Icon helper ──────────────────────────────────────────────────── */
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const IconQuote = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" opacity="0.15" aria-hidden="true">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

export default function Testimonials() {
  useEffect(() => {
    window.scrollTo(0, 0);
        setPageSeo({
      title: "Student Reviews & Success Stories | Sparrow Creative Academy Bengaluru",
      description: "Read how learners at Sparrow Creative Academy in Bengaluru turned practical AI design, video and animation training into freelance and studio careers."
    });
  }, []);

  return (
    <div className="testimonials-wrapper">
      {/* ── UNIFIED NAVBAR ── */}
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <PageHeader
        eyebrow="Student Outcomes"
        title="Real Stories, Real Impact"
        description="Discover how learners and professionals worldwide are translating practical training into real freelance projects, full-time positions, and creative independence."
        backgroundImage={testimonialsHeader}
        imageAlt="Abstract starburst auroras and celebratory success particles"
      />

      {/* ── TESTIMONIALS GRID ── */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-grid">
            {TESTIMONIALS_DATA.map((t) => (
              <article className="testimonial-card" key={t.name}>
                <div className="testimonial-top">
                  <div className="t-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <IconStar key={i} />
                    ))}
                  </div>
                  <span className="quote-svg"><IconQuote /></span>
                </div>

                <p className="testimonial-text">"{t.text}"</p>

                <div className="testimonial-meta-badge">
                  <span className="outcome-tag">Key Result</span>
                  <strong className="outcome-text">{t.outcome}</strong>
                </div>

                <div className="testimonial-footer">
                  <div className="t-avatar" style={{ background: t.avatarBg }}>
                    {t.initials || t.name[0]}
                  </div>

                  <div className="t-author-details">
                    <p className="t-name">{t.name}</p>
                    <p className="t-role">{t.role}</p>
                    <span className="t-course">Completed: {t.course}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY OUTCOME CTA ── */}
      <CTASection
        title="Ready to Write Your Own Success Story?"
        subtitle="Join our next cohort of creatives and designers mastering practical, career-ready AI skills."
        buttonText="Book Free Consultation"
        buttonLink="/contact"
      />

      {/* ── UNIFIED FOOTER ── */}
      <Footer />
    </div>
  );
}