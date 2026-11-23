import { useTheme } from "../../context/ThemeContext.jsx";
import "./ThemeToggle.css";

const IconSun = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <circle cx="12" cy="12" r="4.5" />
    <line x1="12" y1="2"  x2="12" y2="4.5" />
    <line x1="12" y1="19.5" x2="12" y2="22" />
    <line x1="4.22" y1="4.22"  x2="5.98" y2="5.98" />
    <line x1="18.02" y1="18.02" x2="19.78" y2="19.78" />
    <line x1="2"  y1="12" x2="4.5" y2="12" />
    <line x1="19.5" y1="12" x2="22" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.98" y2="18.02" />
    <line x1="18.02" y1="5.98" x2="19.78" y2="4.22" />
  </svg>
);

const IconMoon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
  </svg>
);

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className={`toggle-track ${isDark ? "dark" : "light"}`}>
        <span className="toggle-thumb">
          <span className="toggle-icon">
            {isDark ? <IconMoon /> : <IconSun />}
          </span>
        </span>
      </span>
    </button>
  );
}
