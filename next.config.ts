import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // 404 vera, renderizzata sul server, per gli indirizzi che non corrispondono a nessuna rotta:
    // il layout radice sta in app/[lang], quindi serve src/app/global-not-found.tsx
    globalNotFound: true,
    // solo sviluppo locale: disco del Mac quasi pieno, la cache di Turbopack in .next/dev arriva a ~500 MB
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
