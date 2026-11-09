// Organisation details shown in the header, footer and contact page.
// Leave a value as null until the organisation approves it; empty values are not rendered.
export const site = {
  name: "Hope Compassion Center",
  tagline: "A faith-inspired, community-based organisation.",
  url: "https://hopecompassioncenter.com",
  location: "Nairobi, Kenya",
  email: "info@hopecompassioncenter.com",
  phone: "+254 725 256570",
  whatsapp: "+254 725 256570",
  // Only accounts officially managed by Hope Compassion Center, e.g. { platform: "Facebook", url: "https://..." }.
  socialLinks: [],
  founderVideoId: "vBDMQhZv8UI",
};

// Main menu. An entry with a `section` appears only while that section is switched on in Sanity
// (Site Sections); see lib/navigation.js.
export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/programmes/", label: "Our Programmes" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/partner-with-us/", label: "Partner With Us" },
  { href: "/news/", label: "News & Stories" },
  { href: "/events/", label: "Events", section: "events" },
  { href: "/contact/", label: "Contact" },
];

// Further pages, listed in the footer only.
export const footerLinks = [
  { href: "/opportunities/", label: "Opportunities", section: "opportunities" },
  { href: "/reports/", label: "Reports & Publications", section: "reports" },
  { href: "/faqs/", label: "FAQs", section: "faqs" },
];

// Groups on the Our Team section, in display order. studio/schemas/categories.js holds the same list.
export const teamGroups = ["Leadership", "Board", "Staff", "Volunteers"];
