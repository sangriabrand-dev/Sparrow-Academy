import { useEffect } from "react";
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

export default function Courses() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageSeo({
      title: "AI Design & Video Creation Courses in Bengaluru | Sparrow Creative Academy",
      description: "Explore AI design, AI video creation, VFX, motion graphics, 3D animation and UI/UX courses at Sparrow Creative Academy, Bengaluru. Hands-on, project-based training."
    });
  }, []);

  const handleEnquireClick = (courseTitle) => {
    navigate(`/contact?course=${encodeURIComponent(courseTitle)}`);
  };

  const renderCourseCard = (c) => (
    <article className="course-card course-card-detailed" key={c.id}>
      {/* Course Thumbnail */}
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
        <h3 className="course-title">{c.title}</h3>

        {/* Short course overview */}
        {c.overview && (
          <p className="course-overview-text">{c.overview}</p>
        )}

        {/* Key learning areas */}
        {c.whatYouLearn && c.whatYouLearn.length > 0 && (
          <div className="course-learning-areas">
            <p className="course-learning-label">Key Learning Areas</p>
            <ul className="course-learning-list">
              {c.whatYouLearn.slice(0, 4).map((item, i) => (
                <li key={i} className="course-learning-item">
                  <span className="course-learning-dot" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="course-card-actions">
          <button
            type="button"
            className="btn-reusable btn-primary btn-md enquire-button"
            onClick={() => handleEnquireClick(c.title)}
          >
            Enquire Now <IconArrow />
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

      {/* ── COURSES GRID ── */}
      <section className="courses-section">
        <div className="container">
          {COURSES_DATA.length === 0 ? (
            <div className="courses-empty">
              <p>No courses available at the moment.</p>
            </div>
          ) : (
            <div className="courses-grid">
              {COURSES_DATA.map((c) => renderCourseCard(c))}
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
