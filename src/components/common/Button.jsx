import React from "react";
import { Link } from "react-router-dom";

/**
 * Reusable Button Component
 * Supports primary (gradient), secondary (outline), and ghost variants.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  to,
  href,
  icon,
  ...props
}) {
  const baseClasses = `btn-reusable btn-${variant} btn-${size} ${className}`.trim();

  const content = (
    <>
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
