import React from "react";

/**
 * Reusable SectionHeading Component
 * Standardizes section titles, gradient keyword highlights, eyebrows, and subtext.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  centered = true,
  className = ""
}) {
  return (
    <div className={`section-heading-wrap ${centered ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && <span className="section-eyebrow-pill">{eyebrow}</span>}
      <h2 className="section-main-title">
        {title}{" "}
        {highlight && <span className="grad-text-brand">{highlight}</span>}
      </h2>
      {subtitle && <p className="section-main-subtitle">{subtitle}</p>}
    </div>
  );
}
