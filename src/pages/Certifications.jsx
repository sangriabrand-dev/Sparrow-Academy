import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { setPageSeo } from "../utils/seo.js";
import projectsHeader from "../assets/images/projects-header.svg";
import "../styles/Certifications.css";

/* ── Modern Professional SVG Icons ───────────────────────────────────── */
function IconIncorporation() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      <line x1="9" y1="9" x2="9" y2="9.01" />
      <line x1="9" y1="13" x2="9" y2="13.01" />
      <line x1="9" y1="17" x2="9" y2="17.01" />
    </svg>
  );
}

function IconTax() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="7" y1="15" x2="7.01" y2="15" />
      <line x1="11" y1="15" x2="13" y2="15" />
    </svg>
  );
}

function IconUdyam() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function IconRadar() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 12L19 5" />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    </svg>
  );
}

function IconRadio() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
    </svg>
  );
}

function IconNaval() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="8" x2="12" y2="21" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
  );
}

function IconQualityBadge() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      <path d="M9 8l2 2 4-4" />
    </svg>
  );
}

function IconFileDoc() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ── Verified Document Data for Gallery & Modals ──────────────────────── */
const CERTIFICATES_DATA = [
  {
    id: "incorporation",
    title: "Certificate of Incorporation",
    category: "Statutory Incorporation",
    company: "Sangria Edutainment Private Limited",
    type: "Company Incorporation",
    classification: "Private Limited Enterprise",
    issuance: "Registrar of Companies",
    icon: <IconIncorporation />,
    description: "Official legal charter certifying the formal constitution and incorporation of Sangria Edutainment Private Limited under statutory company regulations.",
    details: [
      { label: "Entity Name", value: "Sangria Edutainment Private Limited" },
      { label: "Document Type", value: "Certificate of Incorporation" },
      { label: "Company Structure", value: "Private Limited Enterprise" },
      { label: "Operational Status", value: "Active & In Good Standing" }
    ],
    note: "Official incorporation charter is maintained on secure corporate record. Document verification is available upon authorized inquiry."
  },
  {
    id: "gst",
    title: "GST Registration Certificate",
    category: "Taxation & Compliance",
    company: "Sangria Edutainment Private Limited",
    type: "GST Registration",
    classification: "Goods and Services Tax",
    issuance: "Government Tax Authority",
    icon: <IconTax />,
    description: "Statutory Goods and Services Tax compliance registration enabling verified nationwide business transactions, technical consulting, and creative services.",
    details: [
      { label: "Entity Name", value: "Sangria Edutainment Private Limited" },
      { label: "Registration Type", value: "GST Registration Certificate" },
      { label: "Compliance Scope", value: "Goods and Services Tax" },
      { label: "Verification Status", value: "Verified Active Taxpayer" }
    ],
    note: "GST compliance record is maintained in accordance with national statutory standards. Specific taxpayer identification details are held confidentially."
  },
  {
    id: "udyam",
    title: "Udyam Registration Certificate",
    category: "Enterprise Classification",
    company: "Sangria Edutainment Private Limited",
    type: "MSME / Udyam Certificate",
    classification: "Micro Enterprise",
    issuance: "Ministry of MSME",
    icon: <IconUdyam />,
    description: "Official registration certificate recognizing Sangria Edutainment Private Limited under the MSME classification framework as a certified Micro enterprise.",
    details: [
      { label: "Entity Name", value: "Sangria Edutainment Private Limited" },
      { label: "Registration", value: "Udyam Registration Certificate" },
      { label: "Enterprise Classification", value: "Micro Enterprise" },
      { label: "Sector Focus", value: "Education, Digital, Technical & Creative Services" }
    ],
    note: "Micro enterprise classification as shown on the supplied official Udyam certificate, affirming eligible MSME status."
  },
  {
    id: "quality",
    title: "Quality & Performance Rating Record",
    category: "Quality Assessment",
    company: "Sangria Edutainment Private Limited",
    type: "Performance Evaluation",
    classification: "59.96 / 60 Score",
    issuance: "Reported PSU / Institutional Evaluation",
    icon: <IconQualityBadge />,
    description: "Company-reported performance evaluation score of 59.96 out of 60 awarded for precision execution in technical multimedia and documentation.",
    details: [
      { label: "Achieved Benchmark", value: "59.96 / 60 (99.93%)" },
      { label: "Evaluation Scope", value: "Technical Quality & Milestone Execution" },
      { label: "Assessment Nature", value: "Reported Institutional / PSU Assessment" },
      { label: "Reporting Status", value: "Company-Reported Achievement" }
    ],
    note: "This benchmark is reported as awarded by a PSU / Government of India-related organization. Maintained as a company-reported milestone pending confirmed publication."
  },
  {
    id: "sbu-radar",
    title: "SBU Video Production: Radar Systems Recognition",
    category: "Technical Production",
    company: "Sangria Edutainment Private Limited",
    type: "Strategic Business Unit Video Film",
    classification: "Military Radar Systems",
    issuance: "Defense Systems Production Portfolio",
    icon: <IconRadar />,
    description: "Reported achievement in high-definition SBU technical video production, visualization, and multimedia documentation for military radar platforms.",
    details: [
      { label: "Domain Focus", value: "Military Radar Systems" },
      { label: "Deliverable Type", value: "SBU Technical Video Film & Multimedia" },
      { label: "Production Scope", value: "Operational Visuals & Motion Graphics" },
      { label: "Portfolio Status", value: "Reported Production Milestone" }
    ],
    note: "Reported production achievement presented without confidential military, defense, or client specifics in strict accordance with non-disclosure requirements."
  },
  {
    id: "sbu-comms",
    title: "SBU Video Production: Communications Recognition",
    category: "Technical Production",
    company: "Sangria Edutainment Private Limited",
    type: "Strategic Business Unit Video Film",
    classification: "Military Communication Systems",
    issuance: "Defense Systems Production Portfolio",
    icon: <IconRadio />,
    description: "Reported milestone in audio-visual production, technical explainer videos, and interactive system media for advanced military communication networks.",
    details: [
      { label: "Domain Focus", value: "Military Communication Systems" },
      { label: "Deliverable Type", value: "SBU Technical Audio-Visual Production" },
      { label: "Production Scope", value: "Multi-Platform Communications Media" },
      { label: "Portfolio Status", value: "Reported Production Milestone" }
    ],
    note: "Reported production achievement presented in compliance with confidentiality and national security safeguards."
  },
  {
    id: "sbu-naval",
    title: "SBU Video Production: Naval Systems Recognition",
    category: "Technical Production",
    company: "Sangria Edutainment Private Limited",
    type: "Strategic Business Unit Video Film",
    classification: "Naval Systems",
    issuance: "Defense Systems Production Portfolio",
    icon: <IconNaval />,
    description: "Reported production achievement in specialized maritime and naval systems video documentation, technical animations, and system deployment films.",
    details: [
      { label: "Domain Focus", value: "Naval Systems" },
      { label: "Deliverable Type", value: "SBU Maritime Technical Film" },
      { label: "Production Scope", value: "Naval Tactical & Sensor Media" },
      { label: "Portfolio Status", value: "Reported Production Milestone" }
    ],
    note: "Reported technical video production achievement with all proprietary and operational details safeguarded."
  }
];

export default function Certifications() {
  const [activeModalCert, setActiveModalCert] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageSeo({
      title: "Certifications & Achievements | Sparrow Creative Academy",
      description: "Recognitions, registrations, and achievements of Sparrow Creative Academy and parent company Sangria Edutainment Private Limited."
    });
  }, []);

  return (
    <div className="certifications-page">
      <Navbar />

      {/* ── 2. HERO SECTION ── */}
      <PageHeader
        eyebrow="Credentials & Milestones"
        title="Certifications & Achievements"
        description="Recognitions, registrations, and achievements that reflect our commitment to quality, professionalism, and continuous growth."
        backgroundImage={projectsHeader}
        imageAlt="Certifications & Achievements Grid"
      />

      {/* ── 3. PARENT COMPANY INTRODUCTION ── */}
      <section className="certifications-parent-section" id="parent-company">
        <div className="container">
          <div className="parent-company-card">
            <div className="parent-company-header">
              <span className="cert-eyebrow-pill">Parent Organization</span>
              <h2 className="parent-company-title">Sangria Edutainment Private Limited</h2>
              <p className="parent-company-subtitle">
                <strong>Sangria Edutainment Private Limited</strong> is the parent company of Sparrow Creative Academy. 
                The organization engages in specialized educational, technical, digital, and creative activities, 
                powering professional learning programs, high-fidelity technical publications, multimedia productions, 
                and enterprise digital solutions.
              </p>
            </div>

            <div className="parent-activity-grid">
              <div className="activity-item">
                <div className="activity-icon-box">
                  <IconIncorporation />
                </div>
                <div>
                  <h3 className="activity-item-title">Educational Programs</h3>
                  <p className="activity-item-desc">
                    Comprehensive skill-building curricula in creative technology, multimedia, and digital design.
                  </p>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-icon-box">
                  <IconFileDoc />
                </div>
                <div>
                  <h3 className="activity-item-title">Technical Documentation</h3>
                  <p className="activity-item-desc">
                    Engineering operating manuals, system specifications, and standard operating procedures.
                  </p>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-icon-box">
                  <IconRadio />
                </div>
                <div>
                  <h3 className="activity-item-title">Digital Solutions</h3>
                  <p className="activity-item-desc">
                    Interactive testing platforms, computer-based training modules, and software media.
                  </p>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-icon-box">
                  <IconRadar />
                </div>
                <div>
                  <h3 className="activity-item-title">Creative Production</h3>
                  <p className="activity-item-desc">
                    High-end technical video films, large-format graphic layouts, and broadcast-grade media.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. COMPANY REGISTRATIONS & CERTIFICATIONS ── */}
      <section className="certifications-section registrations-section" id="company-registrations">
        <div className="container">
          <div className="cert-section-head">
            <span className="cert-badge-pill">Statutory Compliance</span>
            <h2 className="cert-section-heading">Company Registrations &amp; Certifications</h2>
            <p className="cert-section-desc">
              Sangria Edutainment Private Limited operates in full adherence to statutory, corporate, and tax governance frameworks.
            </p>
          </div>

          <div className="certifications-grid-3">
            {/* Card 1: Incorporation */}
            <article className="cert-card">
              <div className="cert-card-top">
                <div className="cert-card-icon">
                  <IconIncorporation />
                </div>
                <span className="cert-status-badge">
                  <IconCheck /> Verified
                </span>
              </div>
              <span className="cert-card-cat">Corporate Incorporation</span>
              <h3 className="cert-card-title">Certificate of Incorporation</h3>
              <p className="cert-card-entity">
                <strong>Company:</strong> Sangria Edutainment Private Limited
              </p>
              <p className="cert-card-desc">
                Duly constituted and incorporated under the provisions of the Companies Act as a recognized private limited enterprise.
              </p>
              <div className="cert-card-footer">
                <button
                  type="button"
                  className="btn-cert-view"
                  onClick={() => setActiveModalCert(CERTIFICATES_DATA[0])}
                >
                  <span>View Certificate</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </article>

            {/* Card 2: GST Registration */}
            <article className="cert-card">
              <div className="cert-card-top">
                <div className="cert-card-icon">
                  <IconTax />
                </div>
                <span className="cert-status-badge">
                  <IconCheck /> Verified
                </span>
              </div>
              <span className="cert-card-cat">Taxation &amp; Commerce</span>
              <h3 className="cert-card-title">GST Registration Certificate</h3>
              <p className="cert-card-entity">
                <strong>Company:</strong> Sangria Edutainment Private Limited
              </p>
              <p className="cert-card-desc">
                Active registration for statutory Goods and Services Tax compliance, fulfilling all commercial tax obligations.
              </p>
              <div className="cert-card-footer">
                <button
                  type="button"
                  className="btn-cert-view"
                  onClick={() => setActiveModalCert(CERTIFICATES_DATA[1])}
                >
                  <span>View Certificate</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </article>

            {/* Card 3: MSME / Udyam */}
            <article className="cert-card">
              <div className="cert-card-top">
                <div className="cert-card-icon">
                  <IconUdyam />
                </div>
                <span className="cert-status-badge">
                  <IconCheck /> Micro Enterprise
                </span>
              </div>
              <span className="cert-card-cat">MSME Registration</span>
              <h3 className="cert-card-title">Udyam Registration Certificate</h3>
              <p className="cert-card-entity">
                <strong>Company:</strong> Sangria Edutainment Private Limited
              </p>
              <p className="cert-card-desc">
                Officially classified as a <strong>Micro enterprise</strong> under the Ministry of Micro, Small and Medium Enterprises framework.
              </p>
              <div className="cert-card-footer">
                <button
                  type="button"
                  className="btn-cert-view"
                  onClick={() => setActiveModalCert(CERTIFICATES_DATA[2])}
                >
                  <span>View Certificate</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── 5. AWARDS & RECOGNITION ── */}
      <section className="certifications-section awards-section" id="awards-recognition">
        <div className="container">
          <div className="cert-section-head">
            <span className="cert-badge-pill">Production Milestones</span>
            <h2 className="cert-section-heading">Awards &amp; Recognition</h2>
            <p className="cert-section-desc">
              Highlights of reported achievements in Strategic Business Unit (SBU) video production and high-precision technical multimedia.
            </p>
          </div>

          <div className="certifications-grid-3">
            {/* Achievement 1: Military Radar Systems */}
            <article className="award-card">
              <div className="award-card-header">
                <div className="award-icon-box">
                  <IconRadar />
                </div>
                <span className="award-status-pill">Reported Achievement</span>
              </div>
              <span className="award-category-tag">Strategic SBU Video Production</span>
              <h3 className="award-card-title">Military Radar Systems</h3>
              <p className="award-card-desc">
                Reported production achievement in technical video films, multi-spectral system visualizations, 
                and high-precision operational demonstrations for advanced radar platforms.
              </p>
              <div className="award-highlights">
                <span className="award-tag">Technical Video Film</span>
                <span className="award-tag">3D Visualization</span>
                <span className="award-tag">SBU Deliverables</span>
              </div>
              <div className="award-card-footer">
                <button
                  type="button"
                  className="btn-cert-view"
                  onClick={() => setActiveModalCert(CERTIFICATES_DATA[4])}
                >
                  <span>View Details</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </article>

            {/* Achievement 2: Military Communication Systems */}
            <article className="award-card">
              <div className="award-card-header">
                <div className="award-icon-box">
                  <IconRadio />
                </div>
                <span className="award-status-pill">Reported Achievement</span>
              </div>
              <span className="award-category-tag">Strategic SBU Video Production</span>
              <h3 className="award-card-title">Military Communication Systems</h3>
              <p className="award-card-desc">
                Reported production accomplishment for multi-platform communication systems, tactical data 
                transceiver media, and specialized audio-visual operational guides.
              </p>
              <div className="award-highlights">
                <span className="award-tag">Tactical Comms Media</span>
                <span className="award-tag">AV Documentation</span>
                <span className="award-tag">Motion Graphics</span>
              </div>
              <div className="award-card-footer">
                <button
                  type="button"
                  className="btn-cert-view"
                  onClick={() => setActiveModalCert(CERTIFICATES_DATA[5])}
                >
                  <span>View Details</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </article>

            {/* Achievement 3: Naval Systems */}
            <article className="award-card">
              <div className="award-card-header">
                <div className="award-icon-box">
                  <IconNaval />
                </div>
                <span className="award-status-pill">Reported Achievement</span>
              </div>
              <span className="award-category-tag">Strategic SBU Video Production</span>
              <h3 className="award-card-title">Naval Systems</h3>
              <p className="award-card-desc">
                Reported achievement in maritime system overview films, naval tactical tracking 
                media, and technical multimedia documentation for defense applications.
              </p>
              <div className="award-highlights">
                <span className="award-tag">Naval Media</span>
                <span className="award-tag">Tactical Systems</span>
                <span className="award-tag">Cinematic 4K</span>
              </div>
              <div className="award-card-footer">
                <button
                  type="button"
                  className="btn-cert-view"
                  onClick={() => setActiveModalCert(CERTIFICATES_DATA[6])}
                >
                  <span>View Details</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── 6. QUALITY & EXCELLENCE ── */}
      <section className="certifications-section quality-section" id="quality-excellence">
        <div className="container">
          <div className="cert-section-head">
            <span className="cert-badge-pill">Quality Evaluation</span>
            <h2 className="cert-section-heading">Quality &amp; Excellence</h2>
            <p className="cert-section-desc">
              Demonstrated commitment to rigorous execution standards, structured audits, and verifiable delivery quality.
            </p>
          </div>

          <div className="quality-benchmark-card">
            <div className="quality-score-column">
              <div className="quality-score-circle">
                <span className="score-number">59.96</span>
                <span className="score-total">/ 60</span>
              </div>
              <span className="score-percentage">99.93% Quality Score</span>
            </div>

            <div className="quality-content-column">
              <span className="cert-badge-pill" style={{ marginBottom: "12px" }}>
                Company-Reported Benchmark
              </span>
              <h3 className="quality-card-heading">
                Reported Performance Rating: 59.96 / 60
              </h3>
              <p className="quality-card-text">
                The company highlights an outstanding reported performance score of <strong>59.96 out of 60</strong>. 
                This rating was reported as being awarded by a PSU / Government of India-related organization for 
                technical multimedia production and quality adherence.
              </p>
              <p className="quality-card-subtext">
                <em>Notice:</em> This score is maintained and published as a company-reported achievement 
                reflecting delivery precision, while the specific issuing PSU organization name is held confidential 
                pending final confirmed public release.
              </p>

              <div className="quality-metrics-row">
                <div className="q-metric-box">
                  <span className="q-metric-val">59.96</span>
                  <span className="q-metric-lbl">Achieved Score</span>
                </div>
                <div className="q-metric-box">
                  <span className="q-metric-val">60.00</span>
                  <span className="q-metric-lbl">Total Possible</span>
                </div>
                <div className="q-metric-box">
                  <span className="q-metric-val">Top Tier</span>
                  <span className="q-metric-lbl">Performance Grade</span>
                </div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <button
                  type="button"
                  className="btn-cert-view"
                  onClick={() => setActiveModalCert(CERTIFICATES_DATA[3])}
                >
                  <span>View Rating Record</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CERTIFICATE GALLERY ── */}
      <section className="certifications-section gallery-section" id="certificate-gallery">
        <div className="container">
          <div className="cert-section-head">
            <span className="cert-badge-pill">Document Repository</span>
            <h2 className="cert-section-heading">Our Certificates</h2>
            <p className="cert-section-desc">
              Browse approved statutory registrations and achievement documentation for Sangria Edutainment Private Limited and Sparrow Creative Academy.
            </p>
          </div>

          <div className="certificate-gallery-grid">
            {CERTIFICATES_DATA.map((cert) => (
              <div className="cert-gallery-item" key={cert.id}>
                <div className="cert-doc-preview-top">
                  <div className="cert-doc-badge">
                    {cert.icon}
                  </div>
                  <span className="cert-doc-badge-txt">{cert.category}</span>
                </div>

                <div className="cert-doc-body">
                  <h3 className="cert-doc-title">{cert.title}</h3>
                  <p className="cert-doc-company">{cert.company}</p>
                  <p className="cert-doc-type">
                    <strong>Type:</strong> {cert.classification}
                  </p>
                </div>

                <div className="cert-doc-footer">
                  <button
                    type="button"
                    className="btn-cert-view"
                    onClick={() => setActiveModalCert(cert)}
                  >
                    <span>View Certificate</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CONTACT CTA SECTION ── */}
      <CTASection
        title="Want to Know More About Our Achievements?"
        subtitle="Contact us to learn more about our company, registrations, and achievements."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* ── 9. CERTIFICATE DETAILS MODAL / LIGHTBOX ── */}
      {activeModalCert && (
        <div className="cert-modal-backdrop" onClick={() => setActiveModalCert(null)} role="dialog" aria-modal="true">
          <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div className="cert-modal-title-row">
                <div className="cert-modal-icon-wrap">
                  {activeModalCert.icon}
                </div>
                <div>
                  <span className="cert-modal-sub">{activeModalCert.category}</span>
                  <h3 className="cert-modal-title">{activeModalCert.title}</h3>
                </div>
              </div>
              <button
                type="button"
                className="cert-modal-close"
                onClick={() => setActiveModalCert(null)}
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="cert-modal-body">
              <div className="cert-modal-status-box">
                <span className="status-indicator-dot" />
                <span>Verified Corporate Record on File</span>
              </div>

              <p className="cert-modal-desc">{activeModalCert.description}</p>

              <div className="cert-modal-specs-table">
                {activeModalCert.details.map((item) => (
                  <div className="spec-row" key={item.label}>
                    <span className="spec-key">{item.label}</span>
                    <strong className="spec-val">{item.value}</strong>
                  </div>
                ))}
              </div>

              <div className="cert-modal-notice-box">
                <strong>Confidentiality &amp; Privacy Notice</strong>
                <p>
                  {activeModalCert.note} In compliance with data privacy policies and statutory guidelines, 
                  sensitive identifiers, registration numbers, and QR codes are safeguarded and made available 
                  upon authorized verification request.
                </p>
              </div>
            </div>

            <div className="cert-modal-footer">
              <button
                type="button"
                className="btn-reusable btn-secondary btn-sm"
                onClick={() => setActiveModalCert(null)}
              >
                Close
              </button>
              <Link
                to="/contact"
                className="btn-reusable btn-primary btn-sm"
                onClick={() => setActiveModalCert(null)}
              >
                Inquire via Contact Us →
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
