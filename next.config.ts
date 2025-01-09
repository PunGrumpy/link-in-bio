import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons']
  },
  env: {
    NEXT_PUBLIC_LOGLIB_ID: process.env.NEXT_PUBLIC_LOGLIB_ID,
    NEXT_PUBLIC_METADATA_BASE: process.env.NEXT_PUBLIC_METADATA_BASE
  }
}
