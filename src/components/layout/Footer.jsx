import { Link } from "react-router-dom";
import { siteConfig, isPlaceholder, getSafePhoneLink, getSafeEmailLink } from "../../config/siteConfig.js";
import logoImg from "../../assets/images/logo-darkbg.png";
import "../../styles/Footer.css";

export default function Footer() {
  const phoneLink = getSafePhoneLink();
  const emailLink = getSafeEmailLink();

  return (
    <footer className="sparrow-footer" role="contentinfo">
      <div className="container footer-inner">

        {/* BRAND & MISSION */}
        <div className="footer-brand-col">
          <Link
            to="/"
            className="footer-brand-logo-wrap"
            aria-label="Sparrow Creative Academy Home"
          >
            <img
              src={logoImg}
              alt="Sparrow Creative Academy"
              className="footer-brand-logo-img"
              width="160"
              height="44"
              loading="lazy"
            />
          </Link>

          <p className="footer-mission-text">
            {siteConfig.description}
          </p>

          {(
            (!isPlaceholder(siteConfig.socialLinks.instagram))
            || (!isPlaceholder(siteConfig.socialLinks.facebook))
            || (!isPlaceholder(siteConfig.socialLinks.linkedin))
            || (!isPlaceholder(siteConfig.socialLinks.youtube))
          ) && (
          <div className="footer-social-links" aria-label="Social media channels">
            {siteConfig.socialLinks.instagram && !isPlaceholder(siteConfig.socialLinks.instagram) && (
              <a
                href={siteConfig.socialLinks.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            )}

            {siteConfig.socialLinks.facebook && !isPlaceholder(siteConfig.socialLinks.facebook) && (
              <a
                href={siteConfig.socialLinks.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            )}

            {siteConfig.socialLinks.linkedin && !isPlaceholder(siteConfig.socialLinks.linkedin) && (
              <a
                href={siteConfig.socialLinks.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            )}

            {siteConfig.socialLinks.youtube && !isPlaceholder(siteConfig.socialLinks.youtube) && (
              <a
                href={siteConfig.socialLinks.youtube}
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            )}
          </div>
          )}
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/placements">Placements</Link></li>
            <li><Link to="/learning-methodology">Learning Methodology</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
            <li><Link to="/gallery">Photo Gallery</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* EXPLORE */}
        <div className="footer-links-col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/courses">Browse All Courses</Link></li>
            <li><Link to="/projects">Capstone Projects</Link></li>
            <li><Link to="/placements">Career Support</Link></li>
            <li><Link to="/certifications">Verified Credentials</Link></li>
            <li><Link to="/gallery">Campus Life</Link></li>
            <li><Link to="/contact">Book Consultation</Link></li>
          </ul>
        </div>

        {/* CONTACT COLUMN */}
        <div className="footer-contact-col">
          <h4>Contact Us</h4>
          <p className="contact-item">
            <span className="contact-icon" aria-hidden="true">✉</span>
            {emailLink ? (
              <a href={emailLink}>{siteConfig.email}</a>
            ) : (
              <span>{siteConfig.email}</span>
            )}
          </p>
          <p className="contact-item">
            <span className="contact-icon" aria-hidden="true">✆</span>
            {phoneLink ? (
              <a href={phoneLink}>{siteConfig.phone}</a>
            ) : (
              <span>{siteConfig.phone}</span>
            )}
          </p>
          <p className="contact-item">
            <span className="contact-icon" aria-hidden="true">📍</span>
            <a href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer">
              Bengaluru Campus
            </a>
          </p>
          <p className="footer-support-note">
            Admissions and consultation support available Monday–Saturday.
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="footer-sep">·</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}