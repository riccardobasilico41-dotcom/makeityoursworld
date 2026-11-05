import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // solo sviluppo locale: disco del Mac quasi pieno, la cache di Turbopack in .next/dev arriva a ~500 MB
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
