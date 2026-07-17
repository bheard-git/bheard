import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/cat",
        destination: "/mba",
        permanent: true,
      },
      {
        source: "/cat/:path*",
        destination: "/mba/:path*",
        permanent: true,
      },
      {
        source: "/gdpi",
        destination: "/mba",
        permanent: true,
      },
      {
        source: "/gdpi/:path*",
        destination: "/mba/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
