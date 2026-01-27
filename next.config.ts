import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // No basePath or assetPrefix needed for User Pages (username.github.io)
};

export default nextConfig;
