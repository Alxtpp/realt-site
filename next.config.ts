import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/realt-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
