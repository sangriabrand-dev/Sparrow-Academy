import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { setPageSeo } from "../utils/seo.js";
import "../styles/PhotoGallery.css";

const IconCamera = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const GALLERY_CATEGORIES = [
  "All",
  "Campus & Studios",
  "Training Labs",
  "Workshops & Events"
];

const GALLERY_PLACEHOLDERS = [
  {
    category: "Campus & Studios",
    title: "Main Creative Studios",
    desc: "Collaborative studio suites configured with dual displays, ergonomic seating, and creative workstations."
  },
  {
    category: "Training Labs",
    title: "Applied AI & High-End Lab",
    desc: "GPU-accelerated lab setups dedicated to generative art, neural rendering, and real-time 3D pipelines."
  },
  {
    category: "Workshops & Events",
    title: "Masterclass & Guest Critique Room",
    desc: "Dedicated presentation space for industry guest reviews, student showreel critiques, and workshops."
  },
  {
    category: "Campus & Studios",
    title: "Discussion & Ideation Lounge",
    desc: "Informal breakout zone for storyboarding, team brainstorming, and portfolio consultations."
  },
  {
    category: "Training Labs",
    title: "Post-Production & Grading Suite",
    desc: "Acoustically treated editing and colour grading bays equipped for professional video post-production."
  },
  {
    category: "Workshops & Events",
    title: "Student Showcase & Graduation Day",
    desc: "Exhibition gallery celebrating completed capstone projects and diploma awards."
  }
];

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageSeo({
      title: "Campus & Studio Photo Gallery | Sparrow Creative Academy",
      description: "Explore photos of the Sparrow Creative Academy campus in Bengaluru, state-of-the-art workstations, student workshops, and creative studios."
    });
  }, []);

  const filteredItems = selectedCategory === "All"
    ? GALLERY_PLACEHOLDERS
    : GALLERY_PLACEHOLDERS.filter((item) => item.category === selectedCategory);

  return (
    <div className="gallery-page">
      <Navbar />

      <PageHeader
        eyebrow="Campus & Studio Life"
        title="Photo Gallery"
        description="A visual glimpse into life at Sparrow Creative Academy — studios, live labs, collaborative workspaces, and student activities. Official gallery photographs will be uploaded here."
      />

      {/* ── FILTER TOOLBAR ── */}
      <section className="gallery-toolbar-section">
        <div className="container">
          <div className="category-pills" role="tablist">
            {GALLERY_CATEGORIES.map((cat) => (
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
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-notice-box">
            <h3 className="gallery-notice-title">
              Official Photography Showcase
            </h3>
            <p className="gallery-notice-desc">
              Academy photographs, student training sessions, campus facilities, and studio events are currently being cataloged and will be displayed in this gallery.
            </p>
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <article className="gallery-card-placeholder" key={item.title}>
                <div className="gallery-frame-box" aria-hidden="true">
                  <div className="gallery-frame-icon">
                    <IconCamera />
                  </div>
                  <span className="gallery-frame-label">Official Photo Placeholder</span>
                </div>

                <div className="gallery-card-info">
                  <span className="gallery-card-category">{item.category}</span>
                  <h4 className="gallery-card-title">{item.title}</h4>
                  <p className="gallery-card-desc">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Visit Sparrow Creative Academy in Person"
        subtitle="Book a guided tour of our Bengaluru campus, meet academic advisors, and explore our studio facilities."
        buttonText="Schedule Campus Tour"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
}
