// Runs before every build. Next.js stores fetched Sanity content in .next/cache/fetch-cache and reuses it
// in later builds, which would republish stale content; a static export cannot opt those fetches out.
import { rmSync } from "node:fs";

rmSync(".next/cache/fetch-cache", { recursive: true, force: true });
