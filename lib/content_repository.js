// Content that staff edit in Sanity. Pages read it here at build time. Without a Sanity project ID
// (see sanity_client.js), the files in content/ are used and every optional section stays switched off.
import { galleryCategories, galleryPhotos } from "@/content/gallery";
import { futurePriorities, impactFigures, programmes } from "@/content/programmes";
import { site, teamGroups } from "@/content/site";
import { imageUrl, sanityClient, squareImageUrl } from "./sanity_client";
import { youtubeVideoId } from "./youtube";

const PHOTO_WIDTH = 1600;
const THUMBNAIL_WIDTH = 800;
const PAST_EVENTS_SHOWN = 6;

export const SECTION_NAMES = ["announcement", "events", "opportunities", "reports", "faqs", "team", "partners", "testimonials"];

const SITE_SETTINGS_QUERY = `*[_id == "siteSettings"][0]{email, phone, whatsapp, location, socialLinks[]{platform, url}}`;

const SITE_SECTIONS_QUERY = `*[_id == "siteSections"][0]`;

const PROGRAMMES_QUERY = `*[_id == "programmesAndImpact"][0]{
  impactFigures[]{value, label, detail},
  programmes[]{title, "id": slug.current, summary, introduction, image, activities[]{title, text}},
  futurePriorities[]{title, text}
}`;

const GALLERY_QUERY = `*[_type == "galleryAlbum"] | order(date desc, _createdAt desc){
  title, category, date, _createdAt, photos[]{asset, crop, hotspot, caption, onHomePage}, videos[]{url, title}
}`;

const NEWS_QUERY = `*[_type == "newsPost" && defined(slug.current)] | order(date desc, _createdAt desc){
  title, "slug": slug.current, date, category, featured, summary, image, body
}`;

const EVENTS_QUERY = `*[_type == "event"] | order(start asc){title, start, end, location, summary, image, linkUrl, linkLabel}`;

const OPPORTUNITIES_QUERY = `*[_type == "opportunity"] | order(closingDate asc, title asc){
  _id, title, kind, location, closingDate, summary, details, applyEmail, applyUrl
}`;

const PUBLICATIONS_QUERY = `*[_type == "publication" && defined(file.asset)] | order(year desc, title asc){
  _id, title, kind, year, description, "fileUrl": file.asset->url, "fileSize": file.asset->size
}`;

const TEAM_QUERY = `*[_id == "team"][0]{introduction, members[]{name, role, group, photo, bio}}`;
const PARTNERS_QUERY = `*[_id == "partners"][0]{introduction, organisations[]{name, url, logo}}`;
const TESTIMONIALS_QUERY = `*[_id == "testimonials"][0].quotes[]{quote, name, context, photo}`;
const FAQS_QUERY = `*[_id == "faqs"][0].questions[]{question, answer}`;

// Pages are rendered separately but share these queries; during a build each query runs once per process.
const cachedResults = new Map();

function query(groq) {
  if (process.env.NODE_ENV !== "production") return sanityClient.fetch(groq);
  if (!cachedResults.has(groq)) cachedResults.set(groq, sanityClient.fetch(groq));
  return cachedResults.get(groq);
}

// Albums that share a date and creation time (the imported ones, created in one transaction) would
// otherwise come back in ID order; keep them in the category order of content/gallery.js instead.
function hasSameDateAndCreation(album, other) {
  return album.date === other.date && album._createdAt === other._createdAt;
}

function categoryPosition(album) {
  const position = galleryCategories.indexOf(album.category);
  return position < 0 ? galleryCategories.length : position;
}

async function fetchGalleryAlbums() {
  const runs = [];
  for (const album of await query(GALLERY_QUERY)) {
    const run = runs.at(-1);
    if (run && hasSameDateAndCreation(run[0], album)) run.push(album);
    else runs.push([album]);
  }
  return runs.flatMap((run) => run.toSorted((a, b) => categoryPosition(a) - categoryPosition(b)));
}

function toImage(image) {
  return image?.asset ? { src: imageUrl(image, PHOTO_WIDTH), alt: image.alt } : undefined;
}

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

// A missing required singleton means the content was never imported; failing the build avoids publishing a blank site.
async function fetchRequiredSingleton(groq, id) {
  const document = await query(groq);
  if (!document) throw new Error(`Sanity has no "${id}" document. Run the content import in studio/ first.`);
  return document;
}

export async function getSiteSettings() {
  if (!sanityClient) return site;
  const settings = await fetchRequiredSingleton(SITE_SETTINGS_QUERY, "siteSettings");
  return { ...site, ...settings, socialLinks: settings.socialLinks ?? [] };
}

// Which optional pages and sections are switched on, and the announcement banner when it is.
export async function getSiteSections() {
  const document = (sanityClient && (await query(SITE_SECTIONS_QUERY))) || {};
  const sections = Object.fromEntries(SECTION_NAMES.map((name) => [name, document[name] === true]));
  const showAnnouncement = sections.announcement && Boolean(document.announcementMessage);
  return {
    ...sections,
    announcement: showAnnouncement
      ? { message: document.announcementMessage, linkLabel: document.announcementLinkLabel, linkUrl: document.announcementLinkUrl }
      : null,
  };
}

export async function getProgrammesAndImpact() {
  if (!sanityClient) return { programmes, impactFigures, futurePriorities };
  const document = await fetchRequiredSingleton(PROGRAMMES_QUERY, "programmesAndImpact");
  return {
    programmes: (document.programmes ?? []).map((programme) => ({ ...programme, image: toImage(programme.image) })),
    impactFigures: document.impactFigures ?? [],
    futurePriorities: document.futurePriorities ?? [],
  };
}

// Every photograph across all albums, newest album first, each tagged with its album's category.
export async function getGalleryPhotos() {
  if (!sanityClient) return galleryPhotos.map((photo) => ({ ...photo, thumbnailSrc: photo.src }));
  const albums = await fetchGalleryAlbums();
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

// YouTube videos across all albums, newest album first.
export async function getGalleryVideos() {
  if (!sanityClient) return [];
  const albums = await fetchGalleryAlbums();
  return albums
    .flatMap((album) => (album.videos ?? []).map((video) => ({ id: youtubeVideoId(video.url), title: video.title })))
    .filter((video) => video.id);
}

// News posts, newest first. The body is Portable Text, rendered by the post page.
export async function getNewsPosts() {
  if (!sanityClient) return [];
  const posts = await query(NEWS_QUERY);
  return posts.map((post) => ({ ...post, featured: Boolean(post.featured), image: toImage(post.image) }));
}

// Events still to finish (soonest first) and the most recent past events (latest first), as of the build.
export async function getEvents() {
  if (!sanityClient) return { upcoming: [], past: [] };
  const now = new Date().toISOString();
  const events = (await query(EVENTS_QUERY)).map((item) => ({ ...item, image: toImage(item.image) }));
  const hasFinished = (item) => (item.end ?? item.start) < now;
  return {
    upcoming: events.filter((item) => !hasFinished(item)),
    past: events.filter(hasFinished).reverse().slice(0, PAST_EVENTS_SHOWN),
  };
}

// Opportunities without a closing date, or closing today or later.
export async function getOpenOpportunities() {
  if (!sanityClient) return [];
  const today = todayIsoDate();
  return (await query(OPPORTUNITIES_QUERY)).filter((item) => !item.closingDate || item.closingDate >= today);
}

export async function getPublications() {
  if (!sanityClient) return [];
  return query(PUBLICATIONS_QUERY);
}

// Team members grouped in display order: [{ group, members }], leaving out empty groups.
export async function getTeam() {
  const document = sanityClient && (await query(TEAM_QUERY));
  const members = (document?.members ?? []).map((member) => ({
    ...member,
    photoSrc: member.photo?.asset ? squareImageUrl(member.photo, 480) : null,
  }));
  const groups = teamGroups
    .map((group) => ({ group, members: members.filter((member) => member.group === group) }))
    .filter(({ members: groupMembers }) => groupMembers.length > 0);
  return { introduction: document?.introduction ?? null, groups };
}

export async function getPartners() {
  const document = sanityClient && (await query(PARTNERS_QUERY));
  const organisations = (document?.organisations ?? []).map((organisation) => ({
    ...organisation,
    logoSrc: organisation.logo?.asset ? imageUrl(organisation.logo, 400) : null,
  }));
  return { introduction: document?.introduction ?? null, organisations };
}

export async function getTestimonials() {
  const quotes = (sanityClient && (await query(TESTIMONIALS_QUERY))) || [];
  return quotes.map((item) => ({ ...item, photoSrc: item.photo?.asset ? squareImageUrl(item.photo, 160) : null }));
}

export async function getFaqs() {
  return (sanityClient && (await query(FAQS_QUERY))) || [];
}
