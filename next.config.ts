import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    useCache: true,
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'mpgmvssq-3000.inc1.devtunnels.ms',
      ],
    },
  },
}

export default nextConfig