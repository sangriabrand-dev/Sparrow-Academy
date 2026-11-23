import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
import BackToTop from "./components/common/BackToTop.jsx";
import WhatsAppButton from "./components/layout/WhatsAppButton.jsx";
import MobileActionBar from "./components/layout/MobileActionBar.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Courses = lazy(() => import("./pages/Courses.jsx"));
const CourseDetail = lazy(() => import("./pages/CourseDetail.jsx"));
const Instructors = lazy(() => import("./pages/Instructors.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Placements = lazy(() => import("./pages/Placements.jsx"));
const LearningMethodology = lazy(() => import("./pages/LearningMethodology.jsx"));
const Certifications = lazy(() => import("./pages/Certifications.jsx"));
const PhotoGallery = lazy(() => import("./pages/PhotoGallery.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Privacy = lazy(() => import("./pages/Privacy.jsx"));
const Terms = lazy(() => import("./pages/Terms.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const Testimonials = lazy(() => import("./pages/Testimonials.jsx"));

function RouteFallback() {
  return (
    <div className="route-fallback" role="status" aria-live="polite">
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <WhatsAppButton />
        <MobileActionBar />
        <BackToTop />

        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/learning-methodology" element={<LearningMethodology />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/gallery" element={<PhotoGallery />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
