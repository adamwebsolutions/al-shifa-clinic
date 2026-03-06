/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Gzip compress all responses
  compress: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // Modern image formats — avif first (smaller), webp fallback
  images: {
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    // Critical CSS inlining via critters.
    // Extracts above-fold CSS and inlines it in <head>,
    // deferring the full stylesheet load — improves FCP on mobile.
    optimizeCss: true,
  },
};

export default nextConfig;
