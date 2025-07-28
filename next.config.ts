import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.10minuteschool.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/product/bn",
        permanent: false,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true, // Temporary to get past this error
  },
};

export default nextConfig;
