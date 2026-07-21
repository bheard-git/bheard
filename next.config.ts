import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
  async redirects() {
    return [
      { source: "/success-stories", destination: "/work", permanent: true },
      { source: "/success-stories/:slug", destination: "/work/:slug", permanent: true },
      { source: "/work/gp30-goa-portuguesa", destination: "/work/radisson-blu-goa", permanent: true },
      { source: "/work/dakshin-culture-curry", destination: "/work/goa-tourism", permanent: true },
      { source: "/work/mickey-mehta-wellness-lab", destination: "/work/dr-mickey-mehta", permanent: true },
      { source: "/work/radisson-candolim-arrival", destination: "/work/radisson-blu-goa", permanent: true },
      { source: "/work/chef-deepa-signature-series", destination: "/work/curly-tales-app", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
};

export default nextConfig;
