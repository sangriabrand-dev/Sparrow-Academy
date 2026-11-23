import React from "react";

/**
 * Reusable PageHeader Component
 * Optional backgroundImage: full-bleed photo with contrast overlay (both themes).
 */
export default function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
  children,
  className = "",
  showVideoVisual = false,
  backgroundImage,
  imageAlt = "",
  overlay = true
}) {
  const hasPhoto = Boolean(backgroundImage);

  return (
    <header className={`page-header-unified ${hasPhoto ? "has-photo" : ""} ${className}`.trim()}>
      {hasPhoto && (
        <img
          className="page-header-bg-img"
          src={backgroundImage}
          alt={imageAlt}
          width={1920}
          height={800}
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      )}
      {(hasPhoto || showVideoVisual) && (
        <div className="page-header-video-visual" aria-hidden="true">
          {hasPhoto && overlay !== false && <div className="page-header-photo-overlay" />}
          <div className="page-header-ambient-mesh" />
          {!hasPhoto && <div className="page-header-video-overlay" />}
        </div>
      )}
      <div className="container page-header-inner">
        {eyebrow && <span className="section-eyebrow-pill">{eyebrow}</span>}
        <h1 className="page-header-title">
          {title}{" "}
          {highlight && <span className="grad-text-brand">{highlight}</span>}
        </h1>
        {description && <p className="page-header-desc">{description}</p>}
        {children && <div className="page-header-extra">{children}</div>}
      </div>
    </header>
  );
}
