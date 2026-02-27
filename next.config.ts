import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Allow all HTTPS image sources
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Allow embedding in AIWA builder iframe from localhost + production domains
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Content-Security-Policy",
            value: [
              "frame-ancestors",
              "'self'",
              "localhost:*",
              "*.aiwa.build",
              "aiwa.build",
              "*.vercel.app",
            ].join(" "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
