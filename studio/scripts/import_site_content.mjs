// Copies the content that staff now edit in Sanity out of the website's content/ files: contact details,
// programmes and impact figures, and the gallery (one album per category), and creates the Site Sections
// document with every optional section switched off. Photographs are uploaded from public/photos.
// Documents have fixed IDs and are only created if missing, so running the import again never overwrites
// edits made in the Studio.
//
// Usage, from studio/:
//   SANITY_STUDIO_PROJECT_ID=<id> SANITY_WRITE_TOKEN_FILE=<path to token> yarn import-content
// The token needs Editor access; create it under API → Tokens at https://www.sanity.io/manage.
import { createReadStream, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createClient } from "@sanity/client";
import { dataset, projectId } from "../sanity_project.js";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const UPLOAD_CONCURRENCY = 4;

function readToken() {
  if (process.env.SANITY_WRITE_TOKEN_FILE) return readFileSync(process.env.SANITY_WRITE_TOKEN_FILE, "utf8").trim();
  return process.env.SANITY_WRITE_TOKEN;
}

function loadContent(name) {
  return import(pathToFileURL(path.join(repositoryRoot, "content", `${name}.js`)).href);
}

function toKey(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function imageReference(assetId) {
  return { _type: "reference", _ref: assetId };
}

// Uploads each distinct photograph once and returns a map of site path (e.g. /photos/x.jpg) to asset ID.
async function uploadPhotographs(client, sitePaths) {
  const pending = [...new Set(sitePaths)];
  const assetIds = new Map();
  async function uploadNext() {
    const sitePath = pending.shift();
    if (!sitePath) return;
    const file = path.join(repositoryRoot, "public", sitePath);
    const asset = await client.assets.upload("image", createReadStream(file), { filename: path.basename(file) });
    assetIds.set(sitePath, asset._id);
    console.log(`uploaded ${sitePath}`);
    await uploadNext();
  }
  await Promise.all(Array.from({ length: UPLOAD_CONCURRENCY }, uploadNext));
  return assetIds;
}

function siteSettingsDocument({ site }) {
  return {
    _id: "siteSettings",
    _type: "siteSettings",
    email: site.email,
    phone: site.phone ?? undefined,
    whatsapp: site.whatsapp ?? undefined,
    location: site.location,
    socialLinks: site.socialLinks.map((link) => ({ _key: toKey(link.platform), _type: "socialLink", ...link })),
  };
}

function siteSectionsDocument() {
  return { _id: "siteSections", _type: "siteSections" };
}

function programmesDocument({ programmes, impactFigures, futurePriorities }, assetIds) {
  return {
    _id: "programmesAndImpact",
    _type: "programmesAndImpact",
    impactFigures: impactFigures.map((figure) => ({ _key: toKey(figure.label), _type: "impactFigure", ...figure })),
    programmes: programmes.map((programme) => ({
      _key: programme.id,
      _type: "programme",
      title: programme.title,
      slug: { _type: "slug", current: programme.id },
      summary: programme.summary,
      introduction: programme.introduction,
      image: { _type: "imageWithAlt", asset: imageReference(assetIds.get(programme.image.src)), alt: programme.image.alt },
      activities: programme.activities.map((activity) => ({ _key: toKey(activity.title), _type: "activity", ...activity })),
    })),
    futurePriorities: futurePriorities.map((priority) => ({ _key: toKey(priority.title), _type: "futurePriority", ...priority })),
  };
}

function galleryAlbumDocuments({ galleryCategories, galleryPhotos }, assetIds) {
  return galleryCategories
    .map((category) => ({ category, photos: galleryPhotos.filter((photo) => photo.category === category) }))
    .filter(({ photos }) => photos.length > 0)
    .map(({ category, photos }) => ({
      _id: `galleryAlbum-${toKey(category)}`,
      _type: "galleryAlbum",
      title: category,
      category,
      photos: photos.map((photo) => ({
        _key: toKey(path.basename(photo.src, path.extname(photo.src))),
        _type: "galleryPhoto",
        asset: imageReference(assetIds.get(photo.src)),
        caption: photo.caption,
        onHomePage: Boolean(photo.onHomePage),
      })),
    }));
}

async function main() {
  const token = readToken();
  if (!projectId || !token) {
    throw new Error("Set SANITY_STUDIO_PROJECT_ID and SANITY_WRITE_TOKEN_FILE (or SANITY_WRITE_TOKEN).");
  }
  const client = createClient({ projectId, dataset, token, apiVersion: "2026-11-01", useCdn: false });

  const [site, programmes, gallery] = await Promise.all([loadContent("site"), loadContent("programmes"), loadContent("gallery")]);
  const assetIds = await uploadPhotographs(client, [
    ...programmes.programmes.map((programme) => programme.image.src),
    ...gallery.galleryPhotos.map((photo) => photo.src),
  ]);

  const documents = [
    siteSettingsDocument(site),
    siteSectionsDocument(),
    programmesDocument(programmes, assetIds),
    ...galleryAlbumDocuments(gallery, assetIds),
  ];
  const transaction = client.transaction();
  documents.forEach((document) => transaction.createIfNotExists(document));
  await transaction.commit();
  console.log(`imported ${documents.length} documents into ${projectId}/${dataset}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
