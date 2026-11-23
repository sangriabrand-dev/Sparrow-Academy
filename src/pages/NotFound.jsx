import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import { setPageSeo } from "../utils/seo.js";
import Footer from "../components/layout/Footer.jsx";
import "../styles/NotFound.css";

export default function NotFound() {
  useEffect(() => {
       setPageSeo({
      title: "404 - Page Not Found | Sparrow Creative Academy",
      description: "This page could not be found. Return to Sparrow Creative Academy to explore courses and admissions.",
      noindex: true
    });
  }, []);

  return (
    <div className="notfound-wrapper">
      <Navbar />
      <main className="notfound-main">
        <div className="notfound-content">
          <div className="notfound-code" aria-hidden="true">404</div>
          <h1 className="notfound-title">Creative Trail Lost</h1>
          <p className="notfound-desc">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let&apos;s get you back on track.
          </p>

          <div className="notfound-actions">
            <Link to="/" className="btn-reusable btn-primary btn-md">
              Back to Home
            </Link>
            <Link to="/courses" className="btn-reusable btn-secondary btn-md">
              Explore Courses
            </Link>
          </div>

          <nav className="notfound-quick-links" aria-label="Quick links">
            <span>Popular destinations:</span>
            <Link to="/learning-methodology">Methodology</Link>
            <Link to="/testimonials">Student Stories</Link>
            <Link to="/blog">Academy Articles</Link>
            <Link to="/contact">Get in Touch</Link>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
}
