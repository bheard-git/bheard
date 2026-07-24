import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
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
