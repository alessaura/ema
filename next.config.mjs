/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    allowedDevOrigins: ['905ed18bd6994aef9e84ad52524e6938-9197bd34d5eb49a6989e1b660.fly.dev']
  },
}

export default nextConfig
