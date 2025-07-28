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
};

export default nextConfig;
