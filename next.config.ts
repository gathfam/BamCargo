import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/admin/dashboard",
        destination: "/admin/artikel",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
