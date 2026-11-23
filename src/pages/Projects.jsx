import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { setPageSeo } from "../utils/seo.js";
import projectsHeader from "../assets/images/projects-header.svg";
import {
  PROJECT_CATEGORIES,
  COMPLETED_PROJECTS,
  LIVE_PROJECTS
} from "../data/projectsData.js";
import "../styles/Projects.css";

/* ── Modern Category SVGs ────────────────────────────────────────────── */
function CategoryIcon({ category }) {
  switch (category) {
    case "Computer-Based Testing (CBT)":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M8 10l2.5 2.5L16 7.5" />
        </svg>
      );
    case "Web-Based Training (WBT)":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "Technical Documentation":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      );
    case "Video & Multimedia Production":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2.5" />
          <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Graphic Design & Printing":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "Presentations & Visual Communication":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M7 11l3-3 2 2 4-4" />
        </svg>
      );
    case "Quality & Assessment Solutions":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case "Digital & Technical Solutions":
    default:
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
  }
}

/* ── Checkmark Icon for Completed Badge ── */
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const WORKFLOW = [
  {
    number: "01",
    title: "Understand & Scope",
    text: "Analyze the technical requirements, engineering parameters, and client expectations with absolute confidentiality."
  },
  {
    number: "02",
    title: "Architect & Plan",
    text: "Formulate technical frameworks, storyboard multimedia narratives, and establish rigorous milestones."
  },
  {
    number: "03",
    title: "Build & Execute",
    text: "Develop interactive CBTs, high-end 3D visual assets, precision documentation, and broadcast-ready productions."
  },
  {
    number: "04",
    title: "Assure & Deliver",
    text: "Subject deliverables to multi-stage quality control, ISO compliance verification, and client delivery standards."
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [completedDisplayCount, setCompletedDisplayCount] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageSeo({
      title: "Our Projects | Sparrow Creative Academy",
      description: "Explore our technical, digital, and creative projects at Sparrow Creative Academy, Bengaluru."
    });
  }, []);

  // Filter completed projects based on category and optional text search
  const filteredCompleted = useMemo(() => {
    return COMPLETED_PROJECTS.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const matchesQuery =
        !searchQuery.trim() ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Compute category counts for pills
  const categoryCounts = useMemo(() => {
    const counts = { All: COMPLETED_PROJECTS.length };
    PROJECT_CATEGORIES.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = COMPLETED_PROJECTS.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Items to show in Completed Projects
  const visibleCompleted = useMemo(() => {
    // If a specific category or search is active, show all matching results
    if (selectedCategory !== "All" || searchQuery.trim() !== "") {
      return filteredCompleted;
    }
    return filteredCompleted.slice(0, completedDisplayCount);
  }, [filteredCompleted, selectedCategory, searchQuery, completedDisplayCount]);

  return (
    <div className="projects-page">
      {/* ── UNIFIED NAVBAR ── */}
      <Navbar />

      {/* ── 1. MAIN HERO HEADER ── */}
      <PageHeader
        eyebrow="Portfolio & Capability Showcase"
        title="Our Projects"
        highlight=""
        description="Explore our technical, digital, and creative projects."
        backgroundImage={projectsHeader}
        imageAlt="Sparrow Creative Academy Project Showcase"
      />

      {/* ── METRICS OVERVIEW BAR ── */}
      <section className="projects-stats-bar">
        <div className="container">
          <div className="projects-stats-grid">
            <div className="stat-card">
              <span className="stat-num">{COMPLETED_PROJECTS.length}+</span>
              <span className="stat-lbl">Completed Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">{LIVE_PROJECTS.length}</span>
              <span className="stat-lbl">Live Projects in Progress</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">8</span>
              <span className="stat-lbl">Specialized Domains</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">100%</span>
              <span className="stat-lbl">Quality & Verification</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. COMPLETED PROJECTS SHOWCASE ── */}
      <section className="projects-section completed-projects-section" id="completed-projects">
        <div className="container">
          <div className="section-head-center">
            <span className="section-badge-pill">Unified Showcase</span>
            <h2 className="section-main-heading">Completed Projects</h2>
            <p className="section-sub-desc">
              A comprehensive showcase of verified deliverables across Computer-Based Testing, Technical Documentation, Video & Multimedia, Graphic Design, Quality Solutions, and Digital Technologies.
            </p>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div className="projects-filter-wrapper">
            <div className="projects-search-box">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search completed projects by keyword or deliverable..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search projects"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="category-pills-bar" role="tablist" aria-label="Project Categories">
              {PROJECT_CATEGORIES.map((cat) => {
                const count = categoryCounts[cat] || 0;
                // Only render category pills that have projects (or 'All')
                if (count === 0 && cat !== "All") return null;
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`filter-pill-item ${selectedCategory === cat ? "active" : ""}`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCompletedDisplayCount(12);
                    }}
                    role="tab"
                    aria-selected={selectedCategory === cat}
                  >
                    <span>{cat}</span>
                    <span className="pill-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid of Completed Project Cards */}
          {filteredCompleted.length === 0 ? (
            <div className="projects-empty-box">
              <p>No completed projects found matching &ldquo;{searchQuery}&rdquo;.</p>
              <button
                type="button"
                className="btn-reusable btn-secondary btn-sm"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="projects-responsive-grid">
                {visibleCompleted.map((project) => (
                  <article className="modern-project-card" key={project.id}>
                    <div className="card-top-row">
                      <div className="card-icon-container" title={project.category}>
                        <CategoryIcon category={project.category} />
                      </div>
                      <span className="status-pill-badge status-completed">
                        <CheckIcon />
                        <span>Completed</span>
                      </span>
                    </div>

                    <span className="card-category-text">{project.category}</span>
                    <h3 className="card-project-title">{project.title}</h3>
                    <p className="card-project-desc">{project.description}</p>

                    <div className="card-tags-row">
                      {project.tags.map((tag) => (
                        <span key={tag} className="deliverable-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="card-footer-action">
                      <Link
                        to={`/contact?subject=${encodeURIComponent("Inquiry regarding " + project.title)}`}
                        className="card-inquiry-link"
                      >
                        <span>Inquire via Consultation</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Show more button if in 'All' view and more items exist */}
              {selectedCategory === "All" &&
                !searchQuery &&
                completedDisplayCount < filteredCompleted.length && (
                  <div className="load-more-container">
                    <button
                      type="button"
                      className="btn-reusable btn-primary btn-md load-more-btn"
                      onClick={() => setCompletedDisplayCount((prev) => prev + 12)}
                    >
                      Show More Completed Projects ({filteredCompleted.length - completedDisplayCount} remaining)
                    </button>
                    <button
                      type="button"
                      className="btn-reusable btn-secondary btn-md load-more-btn"
                      onClick={() => setCompletedDisplayCount(filteredCompleted.length)}
                    >
                      View All {filteredCompleted.length}
                    </button>
                  </div>
                )}
            </>
          )}
        </div>
      </section>

      {/* ── 3. LIVE PROJECTS SECTION ── */}
      <section className="projects-section live-projects-section" id="live-projects">
        <div className="container">
          <div className="section-head-center">
            <div className="live-pulse-badge">
              <span className="live-dot" />
              <span>Active Operations</span>
            </div>
            <h2 className="section-main-heading">Live Projects</h2>
            <p className="section-sub-desc">
              Explore our current technical, digital, and creative projects in progress.
            </p>
          </div>

          <div className="projects-responsive-grid">
            {LIVE_PROJECTS.map((project) => (
              <article className="modern-project-card live-card" key={project.id}>
                <div className="card-top-row">
                  <div className="card-icon-container live-icon" title={project.category}>
                    <CategoryIcon category={project.category} />
                  </div>
                  <span className="status-pill-badge status-inprogress">
                    <span className="status-pulse-dot" />
                    <span>In Progress</span>
                  </span>
                </div>

                <span className="card-category-text">{project.category}</span>
                <h3 className="card-project-title">{project.title}</h3>
                <p className="card-project-desc">{project.description}</p>

                <div className="card-tags-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="deliverable-tag live-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="card-footer-action">
                  <Link
                    to={`/contact?subject=${encodeURIComponent("Inquiry regarding " + project.title)}`}
                    className="card-inquiry-link"
                  >
                    <span>Inquire via Consultation</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PROJECT METHODOLOGY SECTION ── */}
      <section className="projects-methodology-section">
        <div className="container">
          <div className="methodology-grid">
            <div className="methodology-intro">
              <span className="section-badge-pill">Studio Rigor</span>
              <h2 className="methodology-heading">
                The Project Method: From Technical Brief to Delivery
              </h2>
              <p className="methodology-desc">
                Every project at Sparrow Creative Academy operates under strict engineering benchmarks, structured milestones, and institutional quality audits to ensure professional excellence.
              </p>
              <div className="methodology-highlights">
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  <span>Confidentiality & Non-Disclosure Governance</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  <span>Multi-Tier Quality Assurance Review Gates</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  <span>Cross-Disciplinary Technical & Creative Teams</span>
                </div>
              </div>
            </div>

            <div className="methodology-steps">
              {WORKFLOW.map((item) => (
                <div className="methodology-step-card" key={item.number}>
                  <span className="step-number">{item.number}</span>
                  <div className="step-body">
                    <h3 className="step-title">{item.title}</h3>
                    <p className="step-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CALL TO ACTION ── */}
      <CTASection
        title="Looking to Commission or Collaborate on a Project?"
        subtitle="Connect with our technical leads and creative directors to discuss custom development, multimedia production, or specialized technical documentation."
        buttonText="Inquire via Consultation"
        buttonLink="/contact"
      />

      {/* ── UNIFIED FOOTER ── */}
      <Footer />
    </div>
  );
}
