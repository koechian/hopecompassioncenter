import { footerLinks, navigation, site } from "@/content/site";
import { enabledLinks } from "@/lib/navigation";
import { getNewsPosts, getSiteSections } from "@/lib/content_repository";

export const dynamic = "force-static";

export default async function sitemap() {
  const [newsPosts, sections] = await Promise.all([getNewsPosts(), getSiteSections()]);
  const pages = enabledLinks([...navigation, ...footerLinks], sections).map((item) => ({ url: `${site.url}${item.href}` }));
  const posts = newsPosts.map((post) => ({ url: `${site.url}/news/${post.slug}/`, lastModified: post.date }));
  return [...pages, ...posts];
}
