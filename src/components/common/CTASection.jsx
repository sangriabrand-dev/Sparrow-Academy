import React from "react";
import Button from "./Button.jsx";

/**
 * Reusable CTASection Component
 * Placed at the bottom of pages leading to consultation booking.
 */
export default function CTASection({
  title = "Ready to Start Your AI Creative Journey?",
  subtitle = "Discuss your goals with our faculty, find the right course path, and build a competitive portfolio.",
  buttonText = "Book Free Consultation",
  buttonLink = "/contact",
  note = "Personalized 1-on-1 guidance • Zero obligation",
  className = ""
}) {
  return (
    <section className={`unified-cta-section ${className}`}>
      <div className="container">
        <div className="unified-cta-card">
          <h2 className="unified-cta-title">{title}</h2>
          <p className="unified-cta-subtitle">{subtitle}</p>
          <div className="unified-cta-actions">
            <Button to={buttonLink} variant="secondary" size="lg" className="cta-action-btn">
              {buttonText} →
            </Button>
          </div>
          {note && <div className="unified-cta-note">{note}</div>}
        </div>
      </div>
    </section>
  );
}
