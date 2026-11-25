import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { COURSES_DATA } from "../data/courses.js";
import { setPageSeo } from "../utils/seo.js";
import coursesHeader from "../assets/images/courses-header.svg";
import "../styles/Courses.css";

/* ── Icon helpers ─────────────────────────────────────────────────────── */
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconChevron = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    width="16"
    height="16"
    aria-hidden="true"
    className={`accordion-chevron${open ? " accordion-chevron-open" : ""}`}
  >
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Courses() {
  const [searchFilter, setSearchFilter] = useState("");
  /* Track which course card has its learning areas expanded on mobile.
     null = all collapsed. Only one open at a time. */
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageSeo({
      title: "AI Design & Video Creation Courses in Bengaluru | Sparrow Creative Academy",
      description: "Explore AI design, AI video creation, VFX, motion graphics, 3D animation and UI/UX courses at Sparrow Creative Academy, Bengaluru. Hands-on, project-based training."
    });
  }, []);

  /* Collapse expanded card when search changes */
  useEffect(() => {
    setExpandedId(null);
  }, [searchFilter]);

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      course.desc.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesSearch;
  });

  const handleEnrollClick = (courseTitle) => {
    navigate(`/contact?course=${encodeURIComponent(courseTitle)}`);
  };

  const toggleExpanded = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const renderCourseCard = (c) => {
    const isOpen = expandedId === c.id;
    return (
      <article className="course-card course-card-detailed" key={c.id}>
        {/* 16:9 Course Thumbnail */}
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
          {/* Course Name */}
          <h3 className="course-title">{c.title}</h3>

          {/* Short Course Overview — always visible */}
          {c.overview && (
            <p className="course-overview-text">{c.overview}</p>
          )}

          {/* Key Learning Areas
              • Desktop: always rendered, visible via CSS
              • Mobile:  hidden behind accordion toggle */}
          {c.whatYouLearn && c.whatYouLearn.length > 0 && (
            <>
              {/* ── Mobile accordion toggle ── */}
              <button
                type="button"
                className="accordion-toggle"
                aria-expanded={isOpen}
                aria-controls={`learning-${c.id}`}
                onClick={() => toggleExpanded(c.id)}
              >
                <span className="course-learning-label accordion-toggle-label">
                  View Learning Areas
                </span>
                <IconChevron open={isOpen} />
              </button>

              {/* ── Learning areas panel ── */}
              <div
                id={`learning-${c.id}`}
                className={`course-learning-areas${isOpen ? " course-learning-open" : ""}`}
              >
                <p className="course-learning-label desktop-learning-label">Key Learning Areas</p>
                <ul className="course-learning-list" aria-label="Key learning areas">
                  {c.whatYouLearn.map((item, idx) => (
                    <li key={idx} className="course-learning-item">
                      <span className="course-learning-dot" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Enquire Now Button — always visible */}
          <div className="course-card-actions">
            <button
              type="button"
              className="btn-reusable btn-primary btn-md enquire-button"
              onClick={() => handleEnrollClick(c.title)}
            >
              Enquire Now <IconArrow />
            </button>
          </div>
        </div>
      </article>
    );
  };

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
        <div className="container toolbar-inner">
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