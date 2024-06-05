/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDocumentPreloading: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
