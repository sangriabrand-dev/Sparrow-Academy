import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { COURSES_DATA, COURSE_CATEGORIES } from "../data/courses.js";
import { setPageSeo } from "../utils/seo.js";
import coursesHeader from "../assets/images/courses-header.svg";
import "../styles/Courses.css";

/* ── Icon helpers ─────────────────────────────────────────────────────── */
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
        setPageSeo({
      title: "AI Design & Video Creation Courses in Bengaluru | Sparrow Creative Academy",
      description: "Explore AI design, AI video creation, VFX, motion graphics, 3D animation and UI/UX courses at Sparrow Creative Academy, Bengaluru. Hands-on, project-based training."
    });
  }, []);

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      course.desc.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleEnrollClick = (courseTitle) => {
    navigate(`/contact?course=${encodeURIComponent(courseTitle)}`);
  };

  const renderCourseCard = (c) => (
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

        {/* Up to 3 Key Tool Badges */}
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
            onClick={() => handleEnrollClick(c.title)}
          >
            Enroll <IconArrow />
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <div className="courses-wrapper">
      {/* ── UNIFIED NAVBAR ── */}
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <PageHeader
        eyebrow="Practical Curriculum"
        title="Courses Built for the Creative Era"
        description="Hands-on programs blending design, video, 3D, and AI tools for real-world creative mastery and career advancement."
        backgroundImage={coursesHeader}
        imageAlt="Abstract digital wave patterns and creative tech visualization"
      />

      {/* ── FILTER & SEARCH TOOLBAR ── */}
      <section className="courses-toolbar-section">
        <div className="container">
          <div className="courses-placement-callout">
            <span className="placement-callout-badge">Career Track</span>
            <span>All diploma &amp; studio programs include <strong>100% Placement Support</strong>, portfolio reviews &amp; 1-on-1 mentor guidance.</span>
          </div>
        </div>

        <div className="container toolbar-inner">
          <div className="category-pills" role="tablist">
            {COURSE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-pill ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
                role="tab"
                aria-selected={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="courses-search-bar">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Filter courses..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              aria-label="Filter courses"
            />
            {searchFilter && (
              <button
                type="button"
                className="clear-filter-btn"
                onClick={() => setSearchFilter("")}
                aria-label="Clear filter"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── COURSES GRID ── */}
      <section className="courses-section">
        <div className="container">
          {filteredCourses.length === 0 ? (
            <div className="courses-empty">
              <p>No results found matching your search.</p>
              <button
                type="button"
                className="btn-reusable btn-secondary btn-md"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchFilter("");
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="courses-grid">
              {filteredCourses.map((c) => renderCourseCard(c))}
            </div>
          )}
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <CTASection
        title="Find the Right Creative Program for You"
        subtitle="Need help picking between Motion Design, Generative 3D, and UI/UX? Book a free consultation with our academic counselor."
        buttonText="Book Free Consultation"
        buttonLink="/contact"
      />

      {/* ── UNIFIED FOOTER ── */}
      <Footer />
    </div>
  );
}