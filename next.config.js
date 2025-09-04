/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,   // disable image optimization for static export
  },
  // Remove unsupported output option for Next.js 13.0.2. Use `next export` after build instead.
  eslint: {
    // Prevent ESLint from running during production builds to avoid OOM on limited environments
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
