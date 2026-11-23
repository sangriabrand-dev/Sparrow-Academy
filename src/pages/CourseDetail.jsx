import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { COURSES_DATA } from "../data/courses.js";
import { setPageSeo } from "../utils/seo.js";
import "../styles/Courses.css";
import "../styles/CourseDetail.css";

const COURSE_SEO = {
  "ai-powered-graphic-design-and-creative-design": {
    title: "AI Graphic Design & Creative Design Course Bengaluru | Sparrow",
    desc: "Master AI-powered graphic design, Midjourney, Adobe Firefly, vector branding and creative typography at Sparrow Creative Academy, Bengaluru."
  },
  "video-editing-and-ai-powered-post-production": {
    title: "Video Editing & AI Post-Production Course in Bengaluru | Sparrow",
    desc: "Learn video editing and AI-powered post-production in Bengaluru with Premiere Pro, DaVinci Resolve, and smart automated timelines."
  },
  "ai-motion-graphics-and-animation": {
    title: "AI Motion Graphics & Animation Course in Bengaluru | Sparrow",
    desc: "Create dynamic motion graphics, kinetic typography and visual effects using After Effects and AI animation plugins in Bengaluru."
  },
  "ai-3d-modeling-animation-and-visualization": {
    title: "AI 3D Modeling, Animation & Visualization Course | Sparrow",
    desc: "Learn 3D modeling, markerless mocap, Blender Cycles, and Unreal Engine 5 with AI-assisted generation workflows in Bengaluru."
  },
  "visual-effects-vfx-compositing-and-ai-workflows": {
    title: "VFX, Compositing & AI Workflows Course in Bengaluru | Sparrow",
    desc: "Master visual effects compositing, clean plate generation, matchmoving, and CGI integration with AI pipelines at Sparrow Academy."
  },
  "artificial-intelligence-and-machine-learning": {
    title: "Artificial Intelligence & Machine Learning Course | Sparrow",
    desc: "Learn AI & Machine Learning in Bengaluru: Python, PyTorch, neural networks, LLM fine-tuning, RAG, and production model deployment."
  },
  "cloud-computing-and-devops-engineering": {
    title: "Cloud Computing & DevOps Engineering Course | Sparrow",
    desc: "Master AWS cloud architecture, Docker containerization, Kubernetes orchestration, and automated CI/CD pipelines in Bengaluru."
  },
  "data-analytics": {
    title: "Data Analytics Course in Bengaluru | Sparrow Creative Academy",
    desc: "Master SQL, Python data analysis, Power BI, and Tableau dashboards for commercial business intelligence and data analytics careers."
  },
  "quality-control-engineering": {
    title: "Quality Control Engineering Course in Bengaluru | Sparrow",
    desc: "Learn QA/QC systems, ISO 9001 compliance, Statistical Process Control (SPC), and Six Sigma methodologies at Sparrow Creative Academy."
  },
  "digital-marketing-and-seo": {
    title: "Digital Marketing & SEO Course in Bengaluru | Sparrow",
    desc: "Master search engine optimization, Google Ads, performance marketing, content strategy, and GA4 analytics at Sparrow Creative Academy."
  },
  "photography-videography-and-drone-pilot-training": {
    title: "Photography, Videography & Drone Pilot Training in Bengaluru | Sparrow",
    desc: "Hands-on studio camera operations, lighting, cinematic videography, and introductory aerial drone filming techniques in Bengaluru."
  },
  // Legacy aliases for backward compatibility
  "ai-powered-motion-design": {
    title: "AI Motion Graphics & Animation Course in Bengaluru | Sparrow Creative Academy",
    desc: "Learn AI motion graphics, animation and VFX workflows in Bengaluru. Hands-on projects with After Effects and AI video tools."
  },
  "generative-art-and-design": {
    title: "AI-Powered Graphic Design & Creative Design Course | Sparrow",
    desc: "Master generative AI art and design in Bengaluru with Midjourney and modern AI tools. Build a professional portfolio."
  },
  "3d-character-animation": {
    title: "AI 3D Modeling, Animation & Visualization Course | Sparrow",
    desc: "Learn 3D modeling and animation in Bengaluru, from rigging to final render, with AI-assisted workflows."
  },
  "video-production-with-ai": {
    title: "Video Editing & AI-Powered Post-Production Course | Sparrow",
    desc: "Master video editing and AI-powered post-production with Premiere Pro and DaVinci Resolve in Bengaluru."
  },
  "brand-identity-design": {
    title: "AI Graphic Design & Creative Design Course Bengaluru | Sparrow",
    desc: "Learn brand identity and graphic design with AI tools in Bengaluru. Build real brand projects for your portfolio."
  }
};

export default function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [openModules, setOpenModules] = useState({});

  const course = COURSES_DATA.find(
    (c) => c.slug === slug || String(c.id) === slug || (c.legacySlugs && c.legacySlugs.includes(slug))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (course) {
      setPageSeo({
        title: `${course.title} | Sparrow Creative Academy`,
        description: course.desc || `Learn ${course.title} at Sparrow Creative Academy in Bengaluru.`
      });
      if (course.syllabus && course.syllabus.length > 0) {
        setOpenModules({ 0: true });
      }
    } else {
      setPageSeo({
        title: "Course Not Found | Sparrow Creative Academy",
        description: "This course could not be found. Browse the Sparrow Creative Academy catalogue."
      });
    }
  }, [slug, course]);

  const toggleModule = (index) => {
    setOpenModules((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleEnroll = () => {
    if (course) {
      navigate(`/contact?course=${encodeURIComponent(course.title)}`);
    } else {
      navigate("/contact");
    }
  };

  if (!course) {
    return (
      <div className="course-detail-page">
        <Navbar />
        <div className="container" style={{ padding: "120px 24px 80px", textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "16px" }}>Course Not Found</h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: "28px" }}>
            The course you are looking for does not exist or has been relocated.
          </p>
          <Link to="/courses" className="btn-reusable btn-primary btn-md">
            Explore All Courses
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedCourses = COURSES_DATA.filter((c) => c.id !== course.id).slice(0, 3);

  return (
    <div className="course-detail-page">
      <Navbar />

      {/* ── COURSE HERO ── */}
      <section className="course-detail-hero">
        {course.image && (
          <div className="course-hero-bg-media" aria-hidden="true">
            <img src={course.image} alt="" className="course-hero-bg-img" />
            <div className="course-hero-bg-overlay" />
          </div>
        )}

        <div className="container">
          <div className="course-hero-inner">
            {/* Breadcrumb Navigation */}
            <nav className="course-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/courses">Courses</Link>
              <span aria-hidden="true">/</span>
              <span>{course.title}</span>
            </nav>

            <div className="course-hero-badge-row">
              <span className="course-badge-pill">{course.badge}</span>
              <span className="course-cat-tag">{course.category}</span>
              <span className="course-placement-tag">100% Placement Support</span>
            </div>

            <h1 className="course-detail-title">{course.title}</h1>
            <p className="course-detail-overview">{course.overview || course.desc}</p>

            {/* Key Tools Taught (Task 5) */}
            {course.tools && course.tools.length > 0 && (
              <div className="course-hero-tools" aria-label="Key tools taught">
                <span className="tools-label">Key Tools:</span>
                <div className="tools-pills-row">
                  {course.tools.map((tool) => (
                    <span key={tool} className="course-hero-tool-pill">{tool}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="course-quick-specs">
              <div className="spec-item">
                <span className="spec-label">Level</span>
                <span className="spec-val">{course.level}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Duration</span>
                <span className="spec-val">{course.duration}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Learning Format</span>
                <span className="spec-val">{course.mode}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Career Track</span>
                <span className="spec-val highlight">100% Placement Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT (2-COLUMN) ── */}
      <main className="course-main-layout">
        <div className="container">
          <div className="course-grid-2col">
            {/* Left Column: Syllabus & Learning Outcomes */}
            <div className="course-content-col">
              {/* Who Is This For */}
              {course.whoIsItFor && (
                <section className="course-section-block">
                  <h2>
                    <span aria-hidden="true">🎯</span> Who Is This Course For?
                  </h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.7" }}>
                    {course.whoIsItFor}
                  </p>
                </section>
              )}

              {/* What You Will Learn */}
              {course.whatYouLearn && course.whatYouLearn.length > 0 && (
                <section className="course-section-block">
                  <h2>
                    <span aria-hidden="true">⚡</span> What You Will Master
                  </h2>
                  <div className="outcomes-list">
                    {course.whatYouLearn.map((item, idx) => (
                      <div className="outcome-item" key={idx}>
                        <span className="outcome-icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Syllabus Accordion */}
              {course.syllabus && course.syllabus.length > 0 && (
                <section className="course-section-block">
                  <h2>
                    <span aria-hidden="true">📚</span> Comprehensive Syllabus
                  </h2>
                  <div className="syllabus-accordion">
                    {course.syllabus.map((mod, index) => {
                      const isOpen = !!openModules[index];
                      return (
                        <div
                          key={index}
                          className={`syllabus-module-card ${isOpen ? "open" : ""}`}
                        >
                          <button
                            type="button"
                            className="syllabus-module-btn"
                            onClick={() => toggleModule(index)}
                            aria-expanded={isOpen}
                          >
                            <span>{mod.module}</span>
                            <span className="syllabus-toggle-icon" aria-hidden="true">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="syllabus-module-content">
                              <ul className="syllabus-topics-list">
                                {mod.topics.map((topic, tIdx) => (
                                  <li key={tIdx}>{topic}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* Certificate & Accreditation */}
              <section className="course-section-block">
                <h2>
                  <span aria-hidden="true">🎓</span> Industry Recognition & Certificate
                </h2>
                <div className="outcome-item" style={{ background: "rgba(79, 70, 229, 0.05)", borderColor: "rgba(79, 70, 229, 0.2)" }}>
                  <span className="outcome-icon" aria-hidden="true" style={{ fontSize: "1.3rem" }}>📜</span>
                  <div>
                    <strong style={{ display: "block", marginBottom: "4px", color: "var(--text)" }}>
                      Sparrow Creative Academy Verified Credential
                    </strong>
                    <p style={{ margin: 0, color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: "1.6" }}>
                      {course.certificateInfo || "Receive a verifiable credential recognized by our hiring network and partner creative studios."}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Sticky Sidebar Action Card */}
            <aside className="course-sidebar-sticky" aria-label="Course Enrollment">
              <span className="sidebar-course-icon" aria-hidden="true">{course.icon}</span>
              <div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "6px" }}>
                  Join the Upcoming Cohort
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.5" }}>
                  Live interactive labs, portfolio assignments, and 1-on-1 industry mentorship.
                </p>
              </div>

              <button
                type="button"
                className="btn-reusable btn-primary sidebar-enroll-btn"
                onClick={handleEnroll}
              >
                Apply for Enrollment →
              </button>

              <ul className="sidebar-perks-list">
                <li>
                  <span className="sidebar-perk-check">✓</span>
                  <span>100% Practical Studio Workflows</span>
                </li>
                <li>
                  <span className="sidebar-perk-check">✓</span>
                  <strong style={{ color: "var(--primary)" }}>100% Placement Support Included</strong>
                </li>
                <li>
                  <span className="sidebar-perk-check">✓</span>
                  <span>Direct 1-on-1 Mentor Feedback</span>
                </li>
                <li>
                  <span className="sidebar-perk-check">✓</span>
                  <span>Portfolio-Ready Capstone Project</span>
                </li>
                <li>
                  <span className="sidebar-perk-check">✓</span>
                  <span>Lifetime Creative Community Access</span>
                </li>
                <li>
                  <span className="sidebar-perk-check">✓</span>
                  <span>Verified Sparrow Certification</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </main>

      {/* ── RELATED COURSES SECTION ── */}
      <section className="courses-section" style={{ background: "var(--surface-soft)", padding: "64px 0", borderTop: "1px solid var(--border-light)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.8rem", fontWeight: 700, marginBottom: "32px", textAlign: "center" }}>
            Explore Related Creative Programs
          </h2>
          <div className="courses-grid">
            {relatedCourses.map((c) => (
              <article className="course-card" key={c.id}>
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
                  <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                    <Link
                      to={`/courses/${c.slug}`}
                      className="btn-reusable btn-secondary btn-block"
                      style={{ textDecoration: "none" }}
                    >
                      View Syllabus
                    </Link>
                    <button
                      type="button"
                      className="btn-reusable btn-primary btn-block"
                      onClick={() => navigate(`/contact?course=${encodeURIComponent(c.title)}`)}
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <CTASection
        title="Ready to Build Your Creative Career?"
        subtitle="Speak directly with an academic mentor to map out your custom learning path and portfolio goals."
        buttonText="Book Free Consultation"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
}
