import { galleryAlbum } from "./gallery_album.js";
import { imageWithAlt } from "./image_with_alt.js";
import { newsPost } from "./news_post.js";
import { programmesAndImpact } from "./programmes_and_impact.js";
import { siteSettings } from "./site_settings.js";

export const schemaTypes = [siteSettings, programmesAndImpact, newsPost, galleryAlbum, imageWithAlt];

export const singletonTypes = new Set(["siteSettings", "programmesAndImpact"]);
