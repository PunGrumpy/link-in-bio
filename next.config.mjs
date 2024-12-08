/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_LOGLIB_ID: process.env.NEXT_PUBLIC_LOGLIB_ID,
    NEXT_PUBLIC_METADATA_BASE: process.env.NEXT_PUBLIC_METADATA_BASE
  }
}

export default nextConfig
