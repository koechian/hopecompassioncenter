// Resizes and re-encodes photos for the web.
//
//   node scripts/compress_images.mjs <image> [<image> ...]
//
// JPEGs are rewritten in place. PNG photos are written next to the source as
// .webp (keeping transparency) and the source PNG is deleted, so references to
// the .png must be updated. A file is only replaced when the result is smaller.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const MAX_DIMENSION = 1600;
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 82;

function encoderFor(file) {
  const extension = path.extname(file).toLowerCase();
  if (extension === ".png") {
    return { output: file.slice(0, -extension.length) + ".webp", encode: (img) => img.webp({ quality: WEBP_QUALITY }) };
  }
  return { output: file, encode: (img) => img.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }) };
}

async function compress(file) {
  const { output, encode } = encoderFor(file);
  const resized = sharp(file).rotate().resize(MAX_DIMENSION, MAX_DIMENSION, { fit: "inside", withoutEnlargement: true });
  const result = await encode(resized).toBuffer();
  const before = fs.statSync(file).size;

  if (output === file && result.length >= before) {
    return `${file}: kept (${Math.round(before / 1024)}K already smaller)`;
  }
  fs.writeFileSync(output, result);
  if (output !== file) fs.unlinkSync(file);
  return `${file} -> ${output}: ${Math.round(before / 1024)}K -> ${Math.round(result.length / 1024)}K`;
}

for (const file of process.argv.slice(2)) {
  console.log(await compress(file));
}
