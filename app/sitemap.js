import { navigation, site } from "@/content/site";
import { newsPosts } from "@/content/news";

export const dynamic = "force-static";

export default function sitemap() {
  const pages = navigation.map((item) => ({ url: `${site.url}${item.href}` }));
  const posts = newsPosts.map((post) => ({ url: `${site.url}/news/${post.slug}/`, lastModified: post.date }));
  return [...pages, ...posts];
}
