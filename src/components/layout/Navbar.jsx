import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";
import logoLight from "../../assets/images/logo-transparent.png";
import logoDark from "../../assets/images/logo-darkbg.png";
import "../../styles/Navbar.css";

// Search catalog featuring all 9 approved courses and academy sections
const SEARCH_DATABASE = [
  { title: "AI-Powered Graphic Design & Creative Design", category: "Course", path: "/courses/ai-powered-graphic-design-and-creative-design", desc: "Generative brand systems, Midjourney, vector graphics & typography." },
  { title: "Video Editing & AI-Powered Post-Production", category: "Course", path: "/courses/video-editing-and-ai-powered-post-production", desc: "AI timeline cutting, audio mastering & DaVinci Resolve color grading." },
  { title: "AI Motion Graphics & Animation", category: "Course", path: "/courses/ai-motion-graphics-and-animation", desc: "After Effects animation pipelines, kinetic typography & dynamic VFX." },
  { title: "AI 3D Modeling, Animation & Visualization", category: "Course", path: "/courses/ai-3d-modeling-animation-and-visualization", desc: "Blender, Unreal Engine, markerless mocap & AI mesh synthesis." },
  { title: "Visual Effects (VFX), Compositing & AI Workflows", category: "Course", path: "/courses/visual-effects-vfx-compositing-and-ai-workflows", desc: "Node-based compositing, AI clean plates, matchmoving & CGI integration." },
  { title: "Artificial Intelligence & Machine Learning", category: "Course", path: "/courses/artificial-intelligence-and-machine-learning", desc: "Python, PyTorch, LLMs, neural networks & production ML models." },
  { title: "Cloud Computing & DevOps Engineering", category: "Course", path: "/courses/cloud-computing-and-devops-engineering", desc: "AWS infrastructure, Docker, Kubernetes & automated CI/CD pipelines." },
  { title: "Data Analytics", category: "Course", path: "/courses/data-analytics", desc: "SQL queries, Python analysis, Power BI & Tableau dashboards." },
  { title: "Quality Control Engineering", category: "Course", path: "/courses/quality-control-engineering", desc: "Quality assurance, Six Sigma, ISO compliance & inspection protocols." },
  { title: "Student Placements", category: "Placements", path: "/placements", desc: "Placement support, portfolio reviews & studio referrals." },
  { title: "Learning Methodology", category: "Methodology", path: "/learning-methodology", desc: "Studio-first pedagogy, mentorship & applied milestone framework." },
  { title: "Certifications & Achievements", category: "Certifications", path: "/certifications", desc: "Recognitions, registrations, Sangria Edutainment Private Limited, and quality achievements." },
  { title: "Photo Gallery", category: "Gallery", path: "/gallery", desc: "Campus facilities, creative studios, and student activities." },
  { title: "Capstone Projects", category: "Project", path: "/projects", desc: "Practical hands-on industry project deliverables." }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef(null);
  const drawerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Scroll listener for dynamic navbar reduction & backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Primary navigation order per client instructions
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Courses", to: "/courses" },
    { label: "Placements", to: "/placements" },
    { label: "Learning", to: "/learning-methodology" },
    { label: "Certifications", to: "/certifications" },
    { label: "Photo Gallery", to: "/gallery" },
    { label: "Projects", to: "/projects" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Keyboard shortcut listener for Ctrl/Cmd+K and Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        if (searchOpen) setSearchOpen(false);
        if (menuOpen) {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen, menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;
    const focusables = drawer.querySelectorAll("a, button");
    focusables[0]?.focus();

    const trapFocus = (e) => {
      if (e.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    drawer.addEventListener("keydown", trapFocus);
    return () => drawer.removeEventListener("keydown", trapFocus);
  }, [menuOpen]);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    } else {
      setSearchQuery("");
    }
  }, [searchOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const searchResults = searchQuery.trim() === ""
    ? []
    : SEARCH_DATABASE.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleSelectResult = (path) => {
    setSearchOpen(false);
    closeMenu();
    navigate(path);
  };

  const { theme } = useTheme();
  const activeLogo = theme === "dark" ? logoDark : logoLight;

  return (
    <>
      <header className={`sparrow-navbar ${isScrolled ? "scrolled" : ""}`} role="banner">
        <div className="sparrow-nav-container">

          {/* ───────────────── OFFICIAL LOGO ───────────────── */}
          <Link
            to="/"
            className="sparrow-brand-link"
            onClick={closeMenu}
            aria-label="Sparrow Creative Academy Home"
          >
            <img
              src={logoLight}
              alt="Sparrow Creative Academy"
              className="sparrow-navbar-logo sparrow-logo-light"
              width="160"
              height="49"
            />
            <img
              src={logoDark}
              alt="Sparrow Creative Academy"
              className="sparrow-navbar-logo sparrow-logo-dark"
              width="160"
              height="49"
            />
          </Link>

          {/* ───────────────── NAVIGATION LINKS ───────────────── */}
          <nav
            id="sparrow-mobile-nav"
            ref={drawerRef}
            className={`sparrow-nav-links ${menuOpen ? "open" : ""}`}
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.to || (item.to === "/gallery" && pathname === "/photo-gallery");
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`sparrow-nav-link ${isActive ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile Contact Us Button */}
            <div className="sparrow-mobile-cta">
              <Link
                to="/contact"
                className="sparrow-contact-btn mobile"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          </nav>

          {/* ───────────────── DESKTOP ACTIONS (ORDER: Contact Us -> Theme Toggle -> Search Bar) ───────────────── */}
          <div className="sparrow-nav-actions">
            {/* 1. Contact Us */}
            <Link
              to="/contact"
              className="sparrow-contact-btn desktop"
            >
              Contact Us
            </Link>

            {/* 2. Light/Dark Theme Toggle */}
            <ThemeToggle />

            {/* 3. Normal Visible Search Input Bar */}
            <div
              className="sparrow-search-bar-inline"
              onClick={() => setSearchOpen(true)}
              role="search"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                className="inline-search-icon"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                readOnly
                placeholder="Search…"
                aria-label="Search courses, projects"
                className="inline-search-input"
              />
            </div>
          </div>

          {/* ───────────────── MOBILE HAMBURGER BUTTON ───────────────── */}
          <button
            type="button"
            ref={menuButtonRef}
            className={`sparrow-menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="sparrow-mobile-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ───────────────── INTERACTIVE SEARCH MODAL ───────────────── */}
      {searchOpen && (
        <div className="sparrow-search-overlay" onClick={() => setSearchOpen(false)}>
          <div
            className="sparrow-search-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Search Sparrow Academy"
          >
            <div className="sparrow-search-header">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="search-icon">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" strokeLinecap="round" />
              </svg>

              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search courses, learning paths, projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search query"
              />

              {searchQuery && (
                <button
                  type="button"
                  className="clear-query-btn"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}

              <button
                type="button"
                className="close-dialog-btn"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                ESC
              </button>
            </div>

            <div className="sparrow-search-body">
              {searchQuery.trim() === "" ? (
                <div className="search-quick-links">
                  <p className="search-section-label">Suggested Topics</p>
                  <div className="search-tags">
                    {["Motion Design", "Generative AI", "3D Animation", "Figma UI/UX", "VFX Workflows", "Brand Design"].map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        className="search-tag-chip"
                        onClick={() => setSearchQuery(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="search-results-list" role="listbox">
                  {searchResults.map((item, idx) => (
                    <div
                      key={idx}
                      className="search-result-item"
                      onClick={() => handleSelectResult(item.path)}
                      role="option"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && handleSelectResult(item.path)}
                    >
                      <div className="result-category-badge">{item.category}</div>
                      <div className="result-info">
                        <strong>{item.title}</strong>
                        <p>{item.desc}</p>
                      </div>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="result-arrow">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="search-no-results" style={{ textAlign: "center", padding: "32px 16px" }}>
                  <p style={{ marginBottom: "8px", color: "var(--text)" }}>No results found for "<strong>{searchQuery}</strong>"</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "16px" }}>Try searching for courses, tools like "AI", or topics like "Design".</p>
                  <button
                    type="button"
                    className="btn-reusable btn-secondary btn-sm"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>

            <div className="sparrow-search-footer">
              <span>Navigate with <kbd>↑</kbd> <kbd>↓</kbd></span>
              <span>Select with <kbd>↵</kbd></span>
              <span>Close with <kbd>ESC</kbd></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}