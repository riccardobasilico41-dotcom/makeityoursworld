import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 50 solo per le filigrane (decorative, quasi trasparenti); 75 è il valore di sempre
    qualities: [50, 75],
  },
  experimental: {
    // 404 vera, renderizzata sul server, per gli indirizzi che non corrispondono a nessuna rotta:
    // il layout radice sta in app/[lang], quindi serve src/app/global-not-found.tsx
    globalNotFound: true,
    // solo sviluppo locale: disco del Mac quasi pieno, la cache di Turbopack in .next/dev arriva a ~500 MB
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
