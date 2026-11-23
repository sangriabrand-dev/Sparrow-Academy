import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { siteConfig } from "../config/siteConfig.js";
import { setPageSeo } from "../utils/seo.js";

/* REVIEW BEFORE PUBLISHING */

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageSeo({
      title: "Terms of Service | Sparrow Creative Academy",
      description: "Terms of service for Sparrow Creative Academy courses, consultations, and website use."
    });
  }, []);

  return (
    <div className="legal-page-wrapper">
      <Navbar />
      
      <PageHeader
        eyebrow="Legal & Policies"
        title="Terms of Service"
        description={`General terms and conditions for learning and training at ${siteConfig.companyName}.`}
      />

      <section className="legal-content-section" style={{ padding: "64px 0", minHeight: "50vh" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8", color: "var(--text-secondary)" }}>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", color: "var(--text)", marginBottom: "16px", fontSize: "1.5rem" }}>
            1. Acceptance of Terms
          </h2>
          <p style={{ marginBottom: "24px" }}>
            By accessing or using the services provided by {siteConfig.companyName}, you agree to adhere to these terms of service and our academic code of conduct.
          </p>

          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", color: "var(--text)", marginBottom: "16px", fontSize: "1.5rem" }}>
            2. Intellectual Property & Curriculum
          </h2>
          <p style={{ marginBottom: "24px" }}>
            All course materials, project briefs, instructional videos, and curriculum assets provided by {siteConfig.companyName} are protected by copyright and intellectual property laws. Materials are licensed strictly for personal educational use by enrolled students.
          </p>

          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", color: "var(--text)", marginBottom: "16px", fontSize: "1.5rem" }}>
            3. Code of Conduct & Academic Integrity
          </h2>
          <p style={{ marginBottom: "24px" }}>
            Learners agree to maintain professional decorum, respect mentors and peers, and submit authentic project deliverables during portfolio reviews and coursework evaluations.
          </p>

          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", color: "var(--text)", marginBottom: "16px", fontSize: "1.5rem" }}>
            4. Inquiries & Support
          </h2>
          <p style={{ marginBottom: "24px" }}>
            For questions regarding course policies, certifications, or institutional arrangements, reach out to our team at <strong style={{ color: "var(--text)" }}>{siteConfig.email}</strong>.
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to Learn with Sparrow Creative Academy?"
        subtitle="Explore our industry-oriented training programs and get personalized guidance."
        buttonText="Book Free Consultation"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
}
