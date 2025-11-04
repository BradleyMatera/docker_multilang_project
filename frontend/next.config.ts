import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/docker_multilang_project",
  assetPrefix: "/docker_multilang_project/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
