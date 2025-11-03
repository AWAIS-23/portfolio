/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure Next.js only looks for pages in src/pages
  pageExtensions: ['jsx', 'js'],
  experimental: {
    appDir: false,
  }
}

module.exports = nextConfig
