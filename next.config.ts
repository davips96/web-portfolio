import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'davidbechara--web-portfolio.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Allow cross-origin requests from devices on your local network
  allowedDevOrigins: ['10.0.0.22'],
};

export default nextConfig;
