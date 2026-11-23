import React, { useEffect } from "react";

/**
 * Reusable Modal Dialog Component
 * Handles overlay, escape key press, backdrop click, and clean accessible dialog.
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className = ""
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="sparrow-modal-backdrop" onClick={onClose}>
      <div
        className={`sparrow-modal-dialog ${className}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="sparrow-modal-header">
          {title && <h3 className="sparrow-modal-title">{title}</h3>}
          <button
            type="button"
            className="sparrow-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div className="sparrow-modal-body">{children}</div>
      </div>
    </div>
  );
}
