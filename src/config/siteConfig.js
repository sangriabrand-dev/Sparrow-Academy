/**
 * SPARROW CREATIVE ACADEMY — Central Site Configuration
 * Single source of truth for all client details, contact information, and social links.
 * Do not hard-code these values in any component.
 */

export const siteConfig = {
  companyName: "Sparrow Creative Academy",
  tagline: "Master the Future of AI-Driven Creativity",
  description: "Learn design, animation, and AI-powered creative tools through practical, project-based learning. Explore Midjourney, Runway ML, Stable Diffusion, Adobe Firefly, and more.",

  // Client-specific contact details
  phone: "+91 81233 66153",
  email: "enquiry@sparrowacademy.online",
  whatsappNumber: "918123366153",
  address: "No. 04, Amco Layout, Near Impact College, Sahakar Nagar, Kodigehalli, Bengaluru, Karnataka – 560092.",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=No.+04,+Amco+Layout,+Near+Impact+College,+Sahakar+Nagar,+Kodigehalli,+Bengaluru,+Karnataka+560092",
  websiteUrl: "https://sparrowacademy.online/",
  mapsEmbedUrl: "https://www.google.com/maps?q=No.+04,+Amco+Layout,+Near+Impact+College,+Sahakar+Nagar,+Kodigehalli,+Bengaluru,+Karnataka+560092&output=embed",

  socialLinks: {
    instagram: "",
    youtube: "",
    linkedin: "",
    facebook: "",
    whatsapp: ""
  },

  defaultWhatsAppMessage: "Hi Sparrow Creative Academy, I'd like to inquire about your courses and admissions.",

  whySparrowPoints: [
    {
      title: "AI-First Practical Curriculum",
      description: "Every module is designed around production-ready generative workflows with top creative tools."
    },
    {
      title: "Active Industry Mentors",
      description: "Direct mentorship and project critiques from working art directors and AI specialists."
    },
    {
      title: "Commercial-Grade Project Labs",
      description: "Graduate with an agency-ready portfolio demonstrating real commercial applications."
    },
    {
      title: "Lifetime Community & Updates",
      description: "Ongoing access to updated lessons, masterclasses, and an active creator network."
    }
  ]
};

// Helper: Check if a value is still an unfilled placeholder
export const isPlaceholder = (val) => {
  if (!val || typeof val !== "string") return true;
  return val.trim().startsWith("[") || val.trim() === "";
};

// Safe Phone Link (Returns null or # if placeholder to prevent broken browser actions)
export const getSafePhoneLink = () => {
  if (isPlaceholder(siteConfig.phone)) return null;
  const digitsOnly = siteConfig.phone.replace(/[^0-9+]/g, "");
  return `tel:${digitsOnly}`;
};

// Safe Email Link
export const getSafeEmailLink = () => {
  if (isPlaceholder(siteConfig.email)) return null;
  return `mailto:${siteConfig.email.trim()}`;
};

// Safe WhatsApp Link
export const getSafeWhatsAppLink = (customMessage) => {
  if (isPlaceholder(siteConfig.whatsappNumber)) return null;
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const msg = encodeURIComponent(customMessage || siteConfig.defaultWhatsAppMessage);
  return `https://wa.me/${cleanNumber}?text=${msg}`;
};

// Safe Google Maps Link
export const getSafeMapsLink = () => {
  if (isPlaceholder(siteConfig.mapsLink)) return null;
  return siteConfig.mapsLink;
};

// Console Warning for Developer Awareness
(function checkPlaceholders() {
  if (typeof window === "undefined") return;
  const placeholders = [];
  if (isPlaceholder(siteConfig.phone)) placeholders.push("phone");
  if (isPlaceholder(siteConfig.email)) placeholders.push("email");
  if (isPlaceholder(siteConfig.whatsappNumber)) placeholders.push("whatsappNumber");
  if (isPlaceholder(siteConfig.address)) placeholders.push("address");
  if (isPlaceholder(siteConfig.mapsLink)) placeholders.push("mapsLink");

  if (placeholders.length > 0) {
    console.warn(
      `[Sparrow Creative Academy Configuration Warning] The following placeholders require client values in src/config/siteConfig.js: ${placeholders.join(", ")}`
    );
  }
})();

export default siteConfig;
