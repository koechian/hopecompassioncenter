// The Sanity project behind the site. The project ID is public; it identifies the project but grants no access.
// The website reads the same values from lib/sanity_client.js.
export const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "bhosprud";
export const dataset = process.env.SANITY_STUDIO_DATASET || "production";
