export const dynamic = "force-static";

const routes = ["", "/pages/about", "/pages/projects", "/pages/gallery", "/pages/donate", "/pages/contact"];

export default function sitemap() {
  return routes.map((route) => ({
    url: `https://hopecompassioncenter.com${route}/`,
  }));
}
