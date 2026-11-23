import { useEffect } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { setPageSeo } from "../utils/seo.js";
import "../styles/LearningMethodology.css";

const IconLayers = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconCompass = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const IconCpu = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const IconCheckCircle = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default function LearningMethodology() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageSeo({
      title: "Learning Methodology & Training Approach | Sparrow Creative Academy",
      description: "Discover our structured, studio-first learning methodology blending creative foundations with advanced digital and AI production workflows."
    });
  }, []);

  const pillars = [
    {
      icon: <IconLayers />,
      title: "Studio-First Immersion",
      desc: "Practical learning conducted in a modern studio environment designed to simulate genuine commercial production pipelines."
    },
    {
      icon: <IconCompass />,
      title: "Live Mentorship & Critiques",
      desc: "Regular cohort review sessions and actionable critiques from active creative industry practitioners."
    },
    {
      icon: <IconCheckCircle />,
      title: "Milestone-Based Capstones",
      desc: "Hands-on projects organized in incremental milestones ensuring learners finish with production-ready portfolios."
    },
    {
      icon: <IconCpu />,
      title: "Modern Toolset Integration",
      desc: "Applied mastery of industry-standard creative software coupled with emerging generative and automated AI workflows."
    }
  ];

  return (
    <div className="methodology-page">
      <Navbar />

      <PageHeader
        eyebrow="Our Pedagogy"
        title="Learning Methodology"
        description="A structured, studio-first approach to creative education and applied technology. Detailed curriculum workflows and training frameworks will be featured here."
      />

      {/* ── CORE PILLARS ── */}
      <section className="methodology-pillars-section">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-eyebrow">Studio Approach</span>
            <h2 className="section-title">
              Built Around <span className="gradient-text">Practical Mastery</span>
            </h2>
            <p className="section-sub">
              Our training structure prioritizes applied execution, individual feedback loops, and professional creative competence.
            </p>
          </div>

          <div className="methodology-pillars-grid">
            {pillars.map((item) => (
              <div className="methodology-pillar-card" key={item.title}>
                <div className="methodology-pillar-icon-box" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="methodology-pillar-title">{item.title}</h3>
                <p className="methodology-pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── READY-STATE SECTION ── */}
      <section className="methodology-ready-section">
        <div className="container">
          <div className="methodology-ready-box">
            <span className="methodology-status-badge">
              <span className="methodology-status-dot" /> Methodology Framework
            </span>
            <h3 className="methodology-ready-title">
              Comprehensive Syllabus & Lab Schedules
            </h3>
            <p className="methodology-ready-desc">
              Detailed course-by-course pedagogical briefs, lab hours allocation, cohort milestone calendars, and studio review schedules will be published here.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the Sparrow Studio Workflow"
        subtitle="Schedule a free consultation or campus visit to see our learning environment firsthand."
        buttonText="Book Free Consultation"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
}
