/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Gzip compress all responses
  compress: true,

  // Remove X-Powered-By header (minor security hygiene)
  poweredByHeader: false,

  // CSS is minified by Next.js/SWC in production by default.
  // swcMinify is always-on in Next.js 13+ — no flag needed.

  // Modern image formats
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
