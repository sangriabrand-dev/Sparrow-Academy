import React from "react";

/**
 * Reusable Card Component
 * Provides clean elevated white surface with soft border and subtle hover lift.
 */
export default function Card({
  children,
  className = "",
  hover = true,
  glass = false,
  onClick,
  ...props
}) {
  const classes = `sparrow-card ${hover ? "sparrow-card-hover" : ""} ${glass ? "sparrow-card-glass" : ""} ${className}`.trim();

  return (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
}
