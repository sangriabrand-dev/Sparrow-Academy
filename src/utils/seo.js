const SITE = "https://sparrowacademy.online";
const DEFAULT_DESCRIPTION =
  "Learn AI-powered design, video creation, VFX and animation at Sparrow Creative Academy, Bengaluru. Hands-on, project-based training in graphic design, animation, visual effects and AI-assisted creative workflows. Book a free consultation.";

function setTag(selector, attr, value, create) {
  let el = document.querySelector(selector);
  if (!el && create) {
    el = document.createElement(create.tag);
    Object.entries(create.attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  if (el) el.setAttribute(attr, value);
}

/**
 * Sets per-page SEO tags (title, description, canonical, Open Graph, Twitter, robots).
 * Pass noindex: true for pages that should not appear in search (login, 404).
 */
export function setPageSeo({ title, description, noindex = false }) {
  const desc = description || DEFAULT_DESCRIPTION;
  const path = window.location.pathname.replace(/\/+$/, "");
  const url = SITE + (path || "/");

  if (title) document.title = title;

  setTag('meta[name="description"]', "content", desc, { tag: "meta", attrs: { name: "description" } });
  setTag('link[rel="canonical"]', "href", url, { tag: "link", attrs: { rel: "canonical" } });
  setTag('meta[property="og:url"]', "content", url);
  setTag('meta[name="twitter:url"]', "content", url);
  if (title) {
    setTag('meta[property="og:title"]', "content", title);
    setTag('meta[name="twitter:title"]', "content", title);
  }
  setTag('meta[property="og:description"]', "content", desc);
  setTag('meta[name="twitter:description"]', "content", desc);
  setTag('meta[name="robots"]', "content", noindex ? "noindex, nofollow" : "index, follow", {
    tag: "meta",
    attrs: { name: "robots" },
  });
}

export default setPageSeo;