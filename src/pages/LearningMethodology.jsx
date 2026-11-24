import { useEffect } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { setPageSeo } from "../utils/seo.js";
import "../styles/LearningMethodology.css";

export default function LearningMethodology() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageSeo({
      title: "Learning Methodology | Sparrow Creative Academy",
      description: "Discover our structured, studio-first learning methodology blending creative foundations with advanced digital and AI production workflows."
    });
  }, []);

  return (
    <div className="methodology-page">
      <Navbar />

      <CTASection
        title="Experience the Sparrow Studio Workflow"
        subtitle="Schedule a free consultation or campus visit to see our learning environment firsthand."
        buttonText="Book Free Consultation"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
}
