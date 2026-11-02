import type { NextConfig } from "next";

// Static export so the site can be hosted on GitHub Pages
// (umairfarooq44.github.io is a user site, so no basePath is needed).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
