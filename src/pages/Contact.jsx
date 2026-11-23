import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import { siteConfig, isPlaceholder, getSafePhoneLink, getSafeWhatsAppLink } from "../config/siteConfig.js";
import { COURSES_DATA } from "../data/courses.js";
import PageHeader from "../components/common/PageHeader.jsx";
import FormField from "../components/common/FormField.jsx";
import { setPageSeo } from "../utils/seo.js";
import contactHeroImg from "../assets/images/contact-us-hero.png";
import "../styles/Contact.css";


const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  course: "",
  preferredTime: "Morning",
  message: "",
  website_hp: ""
};

function buildFormWhatsAppMessage(formData) {
  return [
    "Hi Sparrow Creative Academy, I would like to enquire about a course.",
    `Name: ${formData.fullName || "—"}`,
    `Email: ${formData.email || "—"}`,
    `Phone: ${formData.phone || "—"}`,
    `Course: ${formData.course || "—"}`,
    `Preferred time: ${formData.preferredTime || "—"}`,
    `Message: ${formData.message || "—"}`
  ].join("\n");
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedCourse = searchParams.get("course") || "";

  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState(null);
  const errorRef = useRef(null);
  const successRef = useRef(null);

  useEffect(() => {
    if (isSuccess && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (serverError && errorRef.current) {
      errorRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [serverError]);

  useEffect(() => {
    window.scrollTo(0, 0);
        setPageSeo({
      title: "Book a Free Consultation | Sparrow Creative Academy, Bengaluru",
      description: "Book a free consultation with Sparrow Creative Academy in Kodigehalli, Bengaluru. Talk to admissions about AI design, video creation, VFX and animation courses."
    });
  }, []);

  useEffect(() => {
    if (preselectedCourse) {
      const found = COURSES_DATA.find(
        (c) => c.slug === preselectedCourse || c.title.toLowerCase() === preselectedCourse.toLowerCase()
      );
      if (found) {
        setFormData((prev) => ({ ...prev, course: found.title }));
      } else {
        setFormData((prev) => ({ ...prev, course: preselectedCourse }));
      }
    }
  }, [preselectedCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (serverError) setServerError(null);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (formData.fullName.trim().length > 120) newErrors.fullName = "Name is too long.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.replace(/\D/g, "").length < 7) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.course) newErrors.course = "Please select a course of interest.";
    if (formData.message.trim().length > 4000) newErrors.message = "Message is too long.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) {
      setTimeout(() => {
        const firstInvalid = document.querySelector(
          ".form-field-group.has-error input, .form-field-group.has-error select, .form-field-group.has-error textarea"
        );
        if (firstInvalid) {
          firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
          if (firstInvalid.focus) firstInvalid.focus();
        }
      }, 50);
      return;
    }

    if (formData.website_hp) {
      setIsSuccess(true);
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          course: formData.course,
          preferredTime: formData.preferredTime,
          message: formData.message.trim() || "General course and admissions enquiry",
          website_hp: formData.website_hp
        })
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result && result.success) {
        setIsSuccess(true);
        return;
      }

      setServerError(
        (result && result.message) ||
          "Something went wrong while sending your request. Please try again or chat with us on WhatsApp."
      );
    } catch (err) {
      console.warn("Contact submission failed:", err);
      setServerError("Network error. Please try again or connect directly via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const phoneLink = getSafePhoneLink();
  const directWaLink = getSafeWhatsAppLink("Hi Sparrow Creative Academy, I would like to inquire about admissions and courses.");
  const formWaLink = getSafeWhatsAppLink(buildFormWhatsAppMessage(formData));
  const addressIsPlaceholder = isPlaceholder(siteConfig.address);
  const mapEmbedSrc = !isPlaceholder(siteConfig.mapsEmbedUrl)
    ? siteConfig.mapsEmbedUrl
    : !addressIsPlaceholder
      ? `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`
      : null;

  const EMAIL_SUBJECT = "Enquiry about courses at Sparrow Creative Academy";
  const EMAIL_BODY =
    "Hi Sparrow Creative Academy,\n\nI would like to know more about your courses.\n\nName:\nPhone:\nCourse interested in:\n\nThank you.";

  const emailMailtoLink = !isPlaceholder(siteConfig.email)
    ? `mailto:${siteConfig.email.trim()}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`
    : null;

  const emailGmailUrl = !isPlaceholder(siteConfig.email)
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        siteConfig.email.trim()
      )}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`
    : null;

  const handleEmailClick = (e) => {
    if (isPlaceholder(siteConfig.email)) {
      e.preventDefault();
      return;
    }
    const isMobile =
      typeof navigator !== "undefined" &&
      (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent || "") ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));

    if (!isMobile) {
      e.preventDefault();
      if (emailGmailUrl) {
        window.open(emailGmailUrl, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <div className="contact-page">
      <Navbar />

      <PageHeader
        eyebrow="Connect With Faculty & Mentors"
        title="Get in Touch & Book a Consultation"
        description="Have questions about our AI design and animation programs? Speak directly with our admissions team or request a personalized 1-on-1 portfolio consultation."
        backgroundImage={contactHeroImg}
        imageAlt="Futuristic purple tech workspace for Sparrow Creative Academy admissions"
        className="contact-hero-header"
      />

      <div className="container mt-12">
        <div className="contact-grid">
          <div className="contact-sidebar">
            <div className="contact-info-card">
              <div className="contact-info-header">
                <h3 className="contact-info-title">Quick Contact</h3>
                <p className="contact-info-subtitle">Reach our admissions team directly anytime</p>
              </div>

              <div className="direct-contact-list">
                {/* 1. Phone row */}
                <div className="direct-contact-row">
                  <div className="direct-contact-left">
                    <div className="contact-icon-box" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className="contact-detail-text">
                      <span className="contact-detail-label">Phone</span>
                      {phoneLink ? (
                        <a href={phoneLink} className="contact-detail-val">{siteConfig.phone}</a>
                      ) : (
                        <span className="contact-detail-val">{siteConfig.phone}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. Email row */}
                <div className="direct-contact-row">
                  <div className="direct-contact-left">
                    <div className="contact-icon-box" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0 1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div className="contact-detail-text">
                      <span className="contact-detail-label">Email</span>
                      {emailMailtoLink ? (
                        <a
                          href={emailMailtoLink}
                          onClick={handleEmailClick}
                          className="contact-detail-val"
                        >
                          {siteConfig.email}
                        </a>
                      ) : (
                        <span className="contact-detail-val">{siteConfig.email}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 3. Location row */}
                <div className="direct-contact-row">
                  <div className="direct-contact-left">
                    <div className="contact-icon-box" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="contact-detail-text">
                      <span className="contact-detail-label">LOCATION</span>
                      {siteConfig.mapsLink ? (
                        <a
                          href={siteConfig.mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-detail-val"
                          title="Open location in Google Maps"
                        >
                          {siteConfig.address}
                        </a>
                      ) : (
                        <span className="contact-detail-val">{siteConfig.address}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="consultation-form-card">
            <div className="consultation-form-header">
              <div className="consultation-header-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <div>
                <h2 className="consultation-form-title">Book Free Consultation</h2>
                <p className="consultation-form-desc">Tell us about your learning goals and background</p>
              </div>
            </div>

            {isSuccess ? (
              <div ref={successRef} className="consultation-success-banner consultation-success-screen" role="status">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "#16a34a" }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <strong style={{ fontSize: "1.1rem" }}>Consultation Request Submitted!</strong>
                </div>
                <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  Thank you, <strong>{formData.fullName}</strong>. Your enquiry for <strong>{formData.course}</strong> has been received by the Sparrow Creative Academy admissions desk. Our counselors will review your details and connect with you shortly.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
                  <button
                    type="button"
                    className="btn-reusable btn-secondary btn-sm"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ ...emptyForm });
                    }}
                  >
                    Submit Another Request
                  </button>
                  {directWaLink && (
                    <a
                      href={directWaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-reusable btn-primary btn-sm"
                      style={{ textDecoration: "none" }}
                    >
                      Chat on WhatsApp Now →
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="hp-field" aria-hidden="true">
                  <label htmlFor="website_hp">Leave this field blank</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website_hp}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row-2col">
                  <FormField
                    label="Full Name"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    error={errors.fullName}
                  />

                  <FormField
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    error={errors.email}
                  />
                </div>

                <div className="form-row-2col">
                  <FormField
                    label="Phone Number"
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    error={errors.phone}
                  />

                  <FormField
                    label="Preferred Consultation Time"
                    id="preferredTime"
                    name="preferredTime"
                    type="select"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    options={[
                      { value: "Morning", label: "Morning (9:00 AM – 12:00 PM)" },
                      { value: "Afternoon", label: "Afternoon (12:00 PM – 4:00 PM)" },
                      { value: "Evening", label: "Evening (4:00 PM – 8:00 PM)" }
                    ]}
                  />
                </div>

                <FormField
                  label="Course Interested In"
                  id="course"
                  name="course"
                  type="select"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  error={errors.course}
                  options={[
                    { value: "", label: "Select a course..." },
                    ...COURSES_DATA.map((c) => ({ value: c.title, label: c.title })),
                    { value: "Not sure yet / General Counseling", label: "Not sure yet / General Counseling" }
                  ]}
                />

                <FormField
                  label="Message / Learning Goals (Optional)"
                  id="message"
                  name="message"
                  type="textarea"
                  rows={4}
                  placeholder="Tell us about your background, tools you want to master, or specific questions..."
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                />

                {serverError && (
                  <div ref={errorRef} className="form-error-banner" role="alert" style={{ marginBottom: "16px" }}>
                    <p>{serverError}</p>
                    {(formWaLink || directWaLink) && (
                      <p className="form-error-wa">
                        Prefer a direct chat?{" "}
                        <a href={formWaLink || directWaLink} target="_blank" rel="noopener noreferrer">
                          Message us on WhatsApp
                        </a>
                      </p>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-reusable btn-primary btn-block contact-submit-btn"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="contact-btn-spinner" aria-hidden="true" />
                      <span>Sending Consultation Request...</span>
                    </>
                  ) : (
                    <span>Book Free Consultation →</span>
                  )}
                </button>

                {formWaLink && (
                  <a
                    href={formWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-reusable btn-secondary btn-block wa-alt-btn"
                  >
                    Send via WhatsApp instead
                  </a>
                )}

                {directWaLink && (
                  <p className="submit-note-text">
                    Prefer an instant chat?{" "}
                    <a href={directWaLink} target="_blank" rel="noopener noreferrer" style={{ color: "#15803d", fontWeight: 700 }}>
                      Connect directly on WhatsApp ↗
                    </a>
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
