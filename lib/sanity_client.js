import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

// The Sanity project behind the site; studio/sanity_project.js holds the same values for the Studio.
// Without a project ID the site builds from the files in content/ instead.
const projectId = process.env.SANITY_PROJECT_ID || "";
const dataset = process.env.SANITY_DATASET || "production";

export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion: "2026-11-01", useCdn: false, perspective: "published" })
  : null;

const imageBuilder = sanityClient && createImageUrlBuilder(sanityClient);

// Images are served from Sanity's image CDN, resized and converted to modern formats on request.
export function imageUrl(image, width) {
  return imageBuilder.image(image).width(width).fit("max").auto("format").url();
}

// A square crop centred on the editor's chosen focal point, for portraits.
export function squareImageUrl(image, size) {
  return imageBuilder.image(image).width(size).height(size).fit("crop").auto("format").url();
}
