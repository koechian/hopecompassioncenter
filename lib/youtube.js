// The 11-character video ID from the YouTube link formats editors are likely to paste.
const VIDEO_ID_PATTERNS = [/youtu\.be\/([\w-]{11})/, /[?&]v=([\w-]{11})/, /\/(?:embed|shorts|live)\/([\w-]{11})/];

export function youtubeVideoId(url) {
  for (const pattern of VIDEO_ID_PATTERNS) {
    const match = url?.match(pattern);
    if (match) return match[1];
  }
  return null;
}
