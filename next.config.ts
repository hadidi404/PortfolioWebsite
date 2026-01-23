import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    basePath: "/PortfolioWebsite",
    assetPrefix: "/PortfolioWebsite",
    trailingSlash: true,
    images: {
      unoptimized: true
    }
  })
};

export default nextConfig;
