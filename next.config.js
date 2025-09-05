
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.abacus.ai',
      },
      {
        protocol: 'https',
        hostname: 'media.architecturaldigest.com',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      }
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  // Enable webpack 5
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
}

module.exports = nextConfig
