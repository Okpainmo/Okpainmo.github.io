import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // No basePath or assetPrefix needed for User Pages (username.github.io)
};

export default nextConfig;
