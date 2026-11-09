// Content that staff edit in Sanity: contact details, programmes and impact, gallery and news.
// Pages read it here at build time. Until a Sanity project is configured, the files in content/ are used.
import { galleryPhotos } from "@/content/gallery";
import { futurePriorities, impactFigures, programmes } from "@/content/programmes";
import { site } from "@/content/site";
import { imageUrl, sanityClient } from "./sanity_client";

const PHOTO_WIDTH = 1600;
const THUMBNAIL_WIDTH = 800;

const SITE_SETTINGS_QUERY = `*[_id == "siteSettings"][0]{email, phone, whatsapp, location, socialLinks[]{platform, url}}`;

const PROGRAMMES_QUERY = `*[_id == "programmesAndImpact"][0]{
  impactFigures[]{value, label, detail},
  programmes[]{title, "id": slug.current, summary, introduction, image, activities[]{title, text}},
  futurePriorities[]{title, text}
}`;

const GALLERY_QUERY = `*[_type == "galleryAlbum"] | order(date desc, _createdAt desc){
  title, category, photos[]{asset, crop, hotspot, caption, onHomePage}
}`;

const NEWS_QUERY = `*[_type == "newsPost" && defined(slug.current)] | order(date desc, _createdAt desc){
  title, "slug": slug.current, date, category, featured, summary, image, body
}`;

function toImage(image) {
  return image?.asset ? { src: imageUrl(image, PHOTO_WIDTH), alt: image.alt } : undefined;
}

// A missing singleton means the content was never imported; failing the build avoids publishing a blank site.
async function fetchSingleton(query, id) {
  const document = await sanityClient.fetch(query);
  if (!document) throw new Error(`Sanity has no "${id}" document. Run the content import in studio/ first.`);
  return document;
}

export async function getSiteSettings() {
  if (!sanityClient) return site;
  const settings = await fetchSingleton(SITE_SETTINGS_QUERY, "siteSettings");
  return { ...site, ...settings, socialLinks: settings.socialLinks ?? [] };
}

export async function getProgrammesAndImpact() {
  if (!sanityClient) return { programmes, impactFigures, futurePriorities };
  const document = await fetchSingleton(PROGRAMMES_QUERY, "programmesAndImpact");
  return {
    programmes: (document.programmes ?? []).map((programme) => ({ ...programme, image: toImage(programme.image) })),
    impactFigures: document.impactFigures ?? [],
    futurePriorities: document.futurePriorities ?? [],
  };
}

// Every photograph across all albums, newest album first, each tagged with its album's category.
export async function getGalleryPhotos() {
  if (!sanityClient) return galleryPhotos.map((photo) => ({ ...photo, thumbnailSrc: photo.src }));
  const albums = await sanityClient.fetch(GALLERY_QUERY);
  return albums.flatMap((album) =>
    (album.photos ?? []).filter((photo) => photo.asset).map((photo) => ({
      src: imageUrl(photo, PHOTO_WIDTH),
      thumbnailSrc: imageUrl(photo, THUMBNAIL_WIDTH),
      category: album.category,
      caption: photo.caption || album.title,
      onHomePage: Boolean(photo.onHomePage),
    })),
  );
}

// News posts, newest first. The body is Portable Text, rendered by the post page.
export async function getNewsPosts() {
  if (!sanityClient) return [];
  const posts = await sanityClient.fetch(NEWS_QUERY);
  return posts.map((post) => ({ ...post, featured: Boolean(post.featured), image: toImage(post.image) }));
}
