import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

   import { setPageSeo } from "../utils/seo.js";
import "../styles/Login.css";

/* DEMO DATA — Mock Authentication & Account Portal (no live backend) */
export default function Login() {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  
  useEffect(() => {
    setPageSeo({
      title: "Student Login | Sparrow Creative Academy",
      description: "Student login for Sparrow Creative Academy.",
      noindex: true
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Student & Mentor Portal | Sparrow Creative Academy";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Demo student portal for Sparrow Creative Academy. Accounts are not yet connected to a live backend.");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      /* DEMO DATA — simulated delay; no accounts are stored */
      await new Promise((resolve) => setTimeout(resolve, 700));

      if (mode === "login") {
        setStatus({
          type: "success",
          message: "Demo portal only — sign-in is simulated. No student accounts exist yet.",
        });
        setTimeout(() => {
          navigate("/");
        }, 1200);
      } else {
        setStatus({
          type: "success",
          message: "Demo portal only — account creation is simulated. Switching to sign in...",
        });
        setTimeout(() => {
          setMode("login");
          setStatus({ type: "success", message: "Please sign in with your demo credentials (not stored)." });
        }, 1500);
      }
    } catch (error) {
      console.warn("Demo auth failed:", error.message);
      setStatus({
        type: "error",
        message: error.message || "Unable to complete the demo sign-in. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      {/* ── LEFT SHOWCASE PANEL ── */}
      <div className="auth-showcase-panel">
        <Link to="/" className="auth-brand-link" aria-label="Sparrow Academy Home">
          <span className="auth-brand-mark">
            <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
              <path
                d="M19 6C17 4 14 3.5 11 4.5C8 5.5 6 8 6 11C6 15 16 14 16 18C16 20.5 13.5 21.5 11 21C8 20.5 6.5 18.5 6.5 17"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="auth-brand-title">
            <strong>Sparrow</strong>
            <small>Academy</small>
          </span>
        </Link>

        <div className="auth-showcase-content">
          <span className="auth-showcase-eyebrow">PRACTICAL EDTECH PLATFORM</span>
          <h2>Build Skills That Advance Your Career</h2>
          <p>
            Join an international community of creative professionals, digital marketers, and developers building industry-calibrated portfolios.
          </p>

          <div className="auth-perks-list">
            <div className="auth-perk-item">
              <span className="auth-perk-icon">✓</span>
              <span>Hands-on practical briefs & live projects</span>
            </div>
            <div className="auth-perk-item">
              <span className="auth-perk-icon">✓</span>
              <span>1-on-1 feedback from industry practitioners</span>
            </div>
            <div className="auth-perk-item">
              <span className="auth-perk-icon">✓</span>
              <span>Recognized credentials and career portfolio</span>
            </div>
          </div>
        </div>

        <div className="auth-showcase-quote">
          {/* DEMO DATA — sample graduate quote */}
          <blockquote>
            "Sparrow Creative Academy completely transformed my skill set. The practical workflows landed me my dream clients within weeks."
          </blockquote>
          <span>— Priya S., Graduate</span>
        </div>
      </div>

      {/* ── RIGHT FORM PANEL ── */}
      <div className="auth-form-panel">
        <Link to="/" className="auth-back-link">
          ← Back to Academy
        </Link>

        <div className="auth-card">
          {/* Tabs */}
          <div className="auth-tabs" role="tablist">
            <button
              type="button"
              className={`auth-tab-btn ${mode === "login" ? "active" : ""}`}
              onClick={() => {
                setMode("login");
                setStatus({ type: "", message: "" });
              }}
              role="tab"
              aria-selected={mode === "login"}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`auth-tab-btn ${mode === "register" ? "active" : ""}`}
              onClick={() => {
                setMode("register");
                setStatus({ type: "", message: "" });
              }}
              role="tab"
              aria-selected={mode === "register"}
            >
              Create Account
            </button>
          </div>

          <div className="auth-header">
            <h1>{mode === "login" ? "Welcome Back" : "Join Sparrow Academy"}</h1>
            <p>
              {mode === "login"
                ? "Enter your credentials to access your courses & projects"
                : "Start your practical learning journey today"}
            </p>
          </div>

          {/* Status Message */}
          {status.message && (
            <div className={`auth-message-banner ${status.type}`} role="alert">
              <span>{status.type === "success" ? "✓" : "⚠"}</span>
              <span>{status.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            {mode === "register" && (
              <div className="form-group">
                <label htmlFor="auth-name">Full Name</label>
                <div className="input-with-icon">
                  <input
                    id="auth-name"
                    type="text"
                    name="name"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="auth-email">Email Address</label>
              <div className="input-with-icon">
                <input
                  id="auth-email"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="auth-password">Password</label>
              <div className="input-with-icon">
                <input
                  id="auth-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  className="toggle-pwd-btn"
                  onClick={() => setShowPassword((p) => !p)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {mode === "login" && (
              <div className="form-row-between">
                <label className="remember-label">
                  <input type="checkbox" defaultChecked />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="forgot-link" onClick={(e) => { e.preventDefault(); alert("Password reset link will be sent to your registered email address."); }}>
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="auth-submit-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner" />
                  <span>{mode === "login" ? "Signing In..." : "Creating Account..."}</span>
                </>
              ) : (
                <span>{mode === "login" ? "Sign In to Sparrow" : "Create Account"}</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}