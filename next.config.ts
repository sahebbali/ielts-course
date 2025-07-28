import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/product/bn",
        permanent: false, // Set to true if you want a 301 permanent redirect
      },
    ];
  },
};

export default nextConfig;
