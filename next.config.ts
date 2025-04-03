// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Add other config options here
};

const createConfig = async () => {
  const { default: withBundleAnalyzer } = await import('@next/bundle-analyzer');
  return withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  })(nextConfig);
};

export default createConfig;
