import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Включает генерацию статического HTML/CSS/JS
  images: {
    unoptimized: true, // Обязательно: отключает серверную оптимизацию изображений
  },
  /* config options here */
};

export default nextConfig;
