import React from "react";
import { Link } from "react-router-dom";
import { siteConfig, isPlaceholder, getSafePhoneLink, getSafeWhatsAppLink } from "../../config/siteConfig.js";

/**
 * Mobile Sticky Bottom Action Bar (< 768px)
 * Provides quick access to Call, WhatsApp, and Enquire (/contact) without blocking content.
 */
export default function MobileActionBar() {
  const phoneLink = getSafePhoneLink();
  const waLink = getSafeWhatsAppLink("Hi Sparrow Creative Academy, I'd like to enquire about courses and admissions.");
  const isCustomPlaceholder = isPlaceholder(siteConfig.whatsappNumber);

  return (
    <aside className="mobile-bottom-action-bar" aria-label="Mobile quick actions">
      {/* Call Action */}
      <a
        href={phoneLink || "#"}
        onClick={(e) => { if (!phoneLink) e.preventDefault(); }}
        className="mobile-bar-btn call"
        aria-label="Call admissions"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>Call</span>
      </a>

      {/* WhatsApp Action */}
      <a
        href={waLink || "#"}
        onClick={(e) => { if (isCustomPlaceholder || !waLink) e.preventDefault(); }}
        target={isCustomPlaceholder ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className="mobile-bar-btn whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.64 7.89 8 8.49 8 9.72C8 10.95 8.89 12.13 9.02 12.3C9.14 12.47 10.77 14.97 13.25 16.05C13.84 16.31 14.3 16.46 14.66 16.57C15.26 16.76 15.79 16.73 16.22 16.67C16.7 16.6 17.7 16.07 17.91 15.49C18.12 14.9 18.12 14.4 18.06 14.3C18 14.19 17.83 14.13 17.57 14C17.32 13.88 16.09 13.27 15.86 13.19C15.63 13.11 15.47 13.07 15.3 13.31C15.14 13.56 14.66 14.13 14.52 14.3C14.37 14.46 14.22 14.48 13.97 14.36C13.72 14.23 12.91 13.97 11.95 13.11C11.2 12.45 10.7 11.62 10.55 11.37C10.41 11.13 10.54 10.99 10.66 10.87C10.77 10.76 10.91 10.58 11.04 10.43C11.17 10.28 11.21 10.18 11.3 9.99C11.38 9.81 11.34 9.64 11.27 9.52C11.21 9.4 10.64 8 10.4 7.45C10.18 6.91 9.95 6.98 9.79 6.98L9.53 7.34Z" />
        </svg>
        <span>WhatsApp</span>
      </a>

      {/* Enquire Action */}
      <Link
        to="/contact"
        className="mobile-bar-btn enquire"
        aria-label="Enquire now and book consultation"
      >
        <span>Enquire</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </aside>
  );
}
