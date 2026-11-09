import { event } from "./event.js";
import { galleryAlbum } from "./gallery_album.js";
import { imageWithAlt } from "./image_with_alt.js";
import { newsPost } from "./news_post.js";
import { opportunity } from "./opportunity.js";
import { faqs, partners, team, testimonials } from "./people_and_partners.js";
import { programmesAndImpact } from "./programmes_and_impact.js";
import { publication } from "./publication.js";
import { siteSections } from "./site_sections.js";
import { siteSettings } from "./site_settings.js";

export const schemaTypes = [
  siteSettings,
  siteSections,
  programmesAndImpact,
  team,
  partners,
  testimonials,
  faqs,
  newsPost,
  galleryAlbum,
  event,
  opportunity,
  publication,
  imageWithAlt,
];

export const singletonTypes = new Set(["siteSettings", "siteSections", "programmesAndImpact", "team", "partners", "testimonials", "faqs"]);
