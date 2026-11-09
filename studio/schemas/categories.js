// Category lists, in display order. The website keeps the same lists in content/gallery.js and
// content/news.js to order its sections; change both together.
export const galleryCategories = [
  "Children & Education",
  "Feeding Programme",
  "Women Empowerment",
  "Youth Activities",
  "Support for Elderly Women",
  "Community Outreach",
  "Events & Celebrations",
  "Construction & Development",
];

export const newsCategories = ["News & Updates", "Community Stories", "Events & Activities"];

export const socialPlatforms = ["Facebook", "Instagram", "YouTube", "LinkedIn"];

export function asOptions(values) {
  return values.map((value) => ({ title: value, value }));
}
