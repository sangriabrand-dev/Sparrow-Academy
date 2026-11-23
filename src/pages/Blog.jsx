import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { BLOG_CATEGORIES, BLOG_POSTS } from "../data/blog.js";
import { setPageSeo } from "../utils/seo.js";
import blogHeader from "../assets/images/blog-header.svg";
import "../styles/Blog.css";

/* ── Icons ────────────────────────────────────────────────────────── */
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" strokeLinecap="round" />
  </svg>
);

const IconTag = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13" aria-hidden="true">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [readingPost, setReadingPost] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
        setPageSeo({
      title: "AI Design, VFX & Animation Blog | Sparrow Creative Academy Bengaluru",
      description: "Tutorials, tool guides and career insights on AI design, AI video creation, VFX and animation from Sparrow Creative Academy, Bengaluru."
    });
  }, []);

  const featured = BLOG_POSTS.find((p) => p.featured);
  const filtered = BLOG_POSTS
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "All" || p.category === activeCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setNewsletterError("");

    if (!newsletterEmail.trim()) {
      setNewsletterError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail.trim())) {
      setNewsletterError("Please enter a valid email address.");
      return;
    }

    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      setSubscribed(true);
      setNewsletterEmail("");
    }, 600);
  };

  return (
    <div className="blog-wrapper">
      {/* ── UNIFIED NAVBAR ── */}
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <PageHeader
        eyebrow="The Sparrow Journal"
        title="Insights on Design, Tech & Careers"
        description="Practical tutorials, industry breakdowns, and career frameworks written by our instructors and working practitioners."
        backgroundImage={blogHeader}
        imageAlt="Abstract flowing digital ribbon currents and creative insights stream"
      />

      {/* Category filter pills */}
      <section className="blog-filters-section">
        <div className="container">
          <div className="blog-filters" role="tablist">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-pill ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      {activeCategory === "All" && featured && (
        <section className="blog-featured-section">
          <div className="container">
            <article className="blog-featured-card">
              <div className="blog-featured-banner">
                <span className="featured-banner-icon">{featured.icon}</span>
                <span className="featured-pill-badge">✦ Featured Insight</span>
              </div>

              <div className="blog-featured-body">
                <div className="blog-featured-meta">
                  <span className="blog-cat-badge">
                    <IconTag /> {featured.tag}
                  </span>
                  <span className="blog-meta-item"><IconClock /> {featured.read}</span>
                </div>

                <h2 className="blog-featured-title">{featured.title}</h2>
                <p className="blog-featured-excerpt">{featured.excerpt}</p>

                <div className="blog-author-strip">
                  <div className="blog-author-chip">
                    <div className="blog-author-avatar">{featured.author[0]}</div>
                    <div>
                      <strong>{featured.author}</strong>
                      <small>{featured.date}</small>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn-reusable btn-primary btn-md"
                    onClick={() => setReadingPost(featured)}
                  >
                    Read Article <IconArrow />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* ── POSTS GRID ── */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid-heading">
            <h2>{activeCategory === "All" ? "Latest Articles" : `${activeCategory} Articles`}</h2>
            <p>Showing {filtered.length} publication{filtered.length === 1 ? "" : "s"}</p>
          </div>

          {filtered.length === 0 ? (
            <div className="blog-empty-state" style={{ textAlign: "center", padding: "48px 24px", background: "var(--surface)", border: "1px dashed var(--border)", borderRadius: "var(--radius-lg)", margin: "24px 0" }}>
              <p style={{ fontSize: "1.1rem", marginBottom: "16px", color: "var(--text)" }}>No results found in this category.</p>
              <button
                type="button"
                className="btn-reusable btn-secondary btn-md"
                onClick={() => setActiveCategory("All")}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="blog-grid">
              {filtered.map((post) => (
                <article className="blog-card" key={post.id}>
                  <div className="blog-card-banner">
                    <span className="blog-card-icon">{post.icon}</span>
                    <span className="blog-cat-badge">
                      <IconTag /> {post.tag}
                    </span>
                  </div>

                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span className="blog-meta-item"><IconClock /> {post.read}</span>
                      <span className="blog-meta-item">{post.date}</span>
                    </div>

                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>

                    <div className="blog-card-footer">
                      <div className="blog-author-chip-sm">
                        <div className="blog-author-avatar-sm">{post.author[0]}</div>
                        <span>{post.author}</span>
                      </div>

                      <button
                        type="button"
                        className="blog-read-button"
                        onClick={() => setReadingPost(post)}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── ARTICLE MODAL READER ── */}
      {readingPost && (
        <div className="article-modal-overlay" onClick={() => setReadingPost(null)}>
          <div
            className="article-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={readingPost.title}
          >
            <div className="article-modal-header">
              <span className="blog-cat-badge">
                <IconTag /> {readingPost.tag}
              </span>
              <button
                type="button"
                className="close-article-btn"
                onClick={() => setReadingPost(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="article-modal-body">
              <h1>{readingPost.title}</h1>
              <div className="article-author-row">
                <div className="blog-author-avatar">{readingPost.author[0]}</div>
                <div>
                  <strong>{readingPost.author}</strong>
                  <p>{readingPost.date} · {readingPost.read}</p>
                </div>
              </div>

              <div className="article-full-content">
                <p className="lead-paragraph">{readingPost.excerpt}</p>
                <hr className="article-divider" />
                <p>{readingPost.content}</p>
                <div className="article-takeaway-box">
                  <strong>Key Takeaway</strong>
                  <p>
                    Practical application and structured iteration are what turn conceptual AI tools into reliable professional superpowers. Explore our related courses at Sparrow Creative Academy to practice these workflows directly.
                  </p>
                </div>
              </div>
            </div>

            <div className="article-modal-footer">
              <button
                type="button"
                className="btn-reusable btn-secondary btn-md"
                onClick={() => setReadingPost(null)}
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── NEWSLETTER CTA ── */}
      <section className="blog-cta-section">
        <div className="container blog-cta-inner">
          <span className="section-eyebrow">STAY AHEAD</span>
          <h2 className="blog-cta-title">
            Get Practical <span className="gradient-text">Creative Insights</span> Weekly
          </h2>
          <p className="blog-cta-sub">
            Subscribe and receive practical tutorials, tool breakdowns, and career strategies straight to your inbox.
          </p>

          {subscribed ? (
            <div className="newsletter-success" role="alert">
              ✓ Thank you for subscribing! We've sent a welcome note to your email.
            </div>
          ) : (
            <form className="blog-cta-form" onSubmit={handleSubscribe} noValidate>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%", maxWidth: "420px" }}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="cta-input"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (newsletterError) setNewsletterError("");
                  }}
                  aria-label="Email address for newsletter"
                />
                {newsletterError && (
                  <span style={{ color: "#ef4444", fontSize: "0.82rem", textAlign: "left", fontWeight: 600 }}>
                    {newsletterError}
                  </span>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubscribing}
                className="btn-reusable btn-primary btn-md"
                style={{ cursor: isSubscribing ? "not-allowed" : "pointer", whiteSpace: "nowrap" }}
              >
                {isSubscribing ? "Subscribing..." : <>Subscribe <IconArrow /></>}
              </button>
            </form>
          )}

          <p className="cta-note">No spam · Unsubscribe anytime · Join our community</p>
        </div>
      </section>

      {/* ── UNIFIED FOOTER ── */}
      <Footer />
    </div>
  );
}