import { useEffect } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { setPageSeo } from "../utils/seo.js";
import { CAREER_STUDENTS } from "../data/careerStudents.js";
import "../styles/Placements.css";

/* ── Professional SVG Icons ─────────────────────────────────────────── */
const IconCheck = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 12h18" />
  </svg>
);

const IconBriefcaseSmall = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 12h18" />
  </svg>
);

const IconFileText = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconAward = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

export default function Placements() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageSeo({
      title: "Career Success | Sparrow Creative Academy",
      description: "Celebrating our students and their professional achievements at Sparrow Creative Academy, Bengaluru."
    });
  }, []);

  const pillars = [
    {
      step: "01",
      icon: <IconFileText />,
      title: "Portfolio & Showreel Reviews",
      desc: "Get personal feedback on your projects and showreel to improve their quality and presentation."
    },
    {
      step: "02",
      icon: <IconUsers />,
      title: "Interview & Technical Preparation",
      desc: "Practice interviews, improve your technical skills, and build confidence in communication."
    },
    {
      step: "03",
      icon: <IconBriefcase />,
      title: "Industry Connections",
      desc: "Explore opportunities to connect with creative studios, digital agencies, and technology companies."
    },
    {
      step: "04",
      icon: <IconAward />,
      title: "Career Guidance & Mentorship",
      desc: "Get guidance on career choices, freelancing, salary discussions, and updating your showreel."
    }
  ];

  return (
    <div className="placements-page">
      <Navbar />

      {/* ── 1. HERO SECTION ── */}
      <section className="career-hero-section">
        <div className="career-hero-ambient" aria-hidden="true">
          <div className="career-ambient-mesh" />
          <div className="career-grid-overlay" />
        </div>

        <div className="container career-hero-inner">
          <span className="section-eyebrow-pill">
            <span className="career-pill-dot" /> Verified Outcomes
          </span>

          <h1 className="career-hero-title">
            Career <span className="gradient-text">Success</span>
          </h1>

          <p className="career-hero-subtitle">
            Celebrating our students and their professional achievements.
          </p>

          <div className="career-hero-meta">
            <span className="career-meta-badge">
              <IconAward /> 15 Verified Student Careers
            </span>
            <span className="career-meta-divider">•</span>
            <span className="career-meta-text">Creative &amp; Technical Disciplines</span>
          </div>
        </div>
      </section>

      {/* ── 2. STUDENT ACHIEVEMENTS SECTION ── */}
      <section className="career-students-section" id="student-achievements">
        <div className="container">
          <div className="career-section-header">
            <div>
              <span className="section-eyebrow">Student Directory</span>
              <h2 className="section-title">
                Student <span className="gradient-text">Achievements</span>
              </h2>
            </div>
            <div className="career-directory-badge">
              <span>15 Alumni Records</span>
            </div>
          </div>

          <div className="career-students-grid">
            {CAREER_STUDENTS.map((student) => (
              <article className="career-student-card" key={student.id}>
                <div className="career-card-top">
                  <div className="career-student-avatar" aria-hidden="true">
                    <span className="career-student-initials">{student.initials}</span>
                  </div>
                  <span className="career-verified-tag">
                    <IconCheck /> Verified
                  </span>
                </div>

                <div className="career-student-info">
                  <h3 className="career-student-name">{student.name}</h3>
                  <div className="career-student-designation-wrap">
                    <span className="career-role-icon"><IconBriefcaseSmall /></span>
                    <p className="career-student-designation">{student.designation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CAREER SUPPORT SECTION (CAREER SUPPORT & GUIDANCE) ── */}
      <section className="placements-pillars-section" id="career-support">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-eyebrow">Our Framework</span>
            <h2 className="section-title">
              Career Support &amp; <span className="gradient-text">Guidance</span>
            </h2>
            <p className="section-sub">
              Get practical support with your portfolio, interview preparation, and career development.
            </p>
          </div>

          <div className="placements-pillars-grid">
            {pillars.map((item) => (
              <div className="placements-pillar-card" key={item.title}>
                <span className="pillar-step-number">{item.step}</span>
                <div className="placements-pillar-icon-box" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="placements-pillar-title">{item.title}</h3>
                <p className="placements-pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CONSULTATION CTA SECTION ── */}
      <CTASection
        title="Prepare for a Creative Career"
        subtitle="Schedule a free consultation to discuss courses, portfolio roadmaps, and career support tailored to your goals."
        buttonText="Book Free Consultation"
        buttonLink="/contact"
        note="Personalized 1-on-1 Guidance • Prompt Response"
        className="career-cta"
      />

      <Footer />
    </div>
  );
}
