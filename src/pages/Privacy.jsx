import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { siteConfig } from "../config/siteConfig.js";
import { setPageSeo } from "../utils/seo.js";

/* REVIEW BEFORE PUBLISHING */

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageSeo({
      title: "Privacy Policy | Sparrow Creative Academy",
      description: "How Sparrow Creative Academy collects, uses, and protects enquiry and student information."
    });
  }, []);

  return (
    <div className="legal-page-wrapper">
      <Navbar />
      
      <PageHeader
        eyebrow="Legal & Policies"
        title="Privacy Policy"
        description={`How ${siteConfig.companyName} collects, protects, and handles your information.`}
      />

      <section className="legal-content-section" style={{ padding: "64px 0", minHeight: "50vh" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8", color: "var(--text-secondary)" }}>
          <div style={{ background: "rgba(79, 70, 229, 0.06)", border: "1px solid rgba(79, 70, 229, 0.2)", borderRadius: "var(--radius-md)", padding: "16px 20px", marginBottom: "28px" }}>
            <strong style={{ color: "var(--text)", display: "block", marginBottom: "6px" }}>About Our Contact & Consultation Form:</strong>
            <p style={{ margin: 0, fontSize: "0.95rem" }}>
              When you submit a consultation request, your full name, email address, phone number, course of interest, and message are collected solely to respond to your inquiry and provide program information. We never use this information for unsolicited third-party marketing or share it outside Sparrow Creative Academy.
            </p>
          </div>

          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", color: "var(--text)", marginBottom: "16px", fontSize: "1.5rem" }}>
            1. Information We Collect
          </h2>
          <p style={{ marginBottom: "24px" }}>
            When you inquire about programs, submit a consultation request, or enroll at {siteConfig.companyName}, we collect basic personal contact details including your name, email address, phone number, and learning interests.
          </p>

          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", color: "var(--text)", marginBottom: "16px", fontSize: "1.5rem" }}>
            2. How We Use Your Information
          </h2>
          <p style={{ marginBottom: "24px" }}>
            Your information is used solely for academic counseling, course onboarding, providing educational materials, and responding directly to your inquiries via WhatsApp, email, or telephone.
          </p>

          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", color: "var(--text)", marginBottom: "16px", fontSize: "1.5rem" }}>
            3. Data Protection & Security
          </h2>
          <p style={{ marginBottom: "24px" }}>
            We implement standard organizational and technical safeguards to keep your personal data secure. We never sell, lease, or distribute your private contact details to third-party marketing entities.
          </p>

          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", color: "var(--text)", marginBottom: "16px", fontSize: "1.5rem" }}>
            4. Contact Us Regarding Your Data
          </h2>
          <p style={{ marginBottom: "24px" }}>
            If you have questions about our privacy practices, wish to update your records, or request data removal, please contact our academic office at <strong style={{ color: "var(--text)" }}>{siteConfig.email}</strong>.
          </p>
        </div>
      </section>

      <CTASection
        title="Have Questions About Our Academy?"
        subtitle="Speak directly with our academic team for admissions and course counseling."
        buttonText="Book Free Consultation"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
}
