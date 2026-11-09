import { navigation, site } from "@/content/site";
import { getNewsPosts } from "@/lib/content_repository";

export const dynamic = "force-static";

export default async function sitemap() {
  const newsPosts = await getNewsPosts();
  const pages = navigation.map((item) => ({ url: `${site.url}${item.href}` }));
  const posts = newsPosts.map((post) => ({ url: `${site.url}/news/${post.slug}/`, lastModified: post.date }));
  return [...pages, ...posts];
}
