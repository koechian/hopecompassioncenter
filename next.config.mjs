/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is served as static files from cPanel (Apache), so the build is
  // a plain export: every route becomes <route>/index.html, which Apache
  // serves without rewrites, and images are copied as-is.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
