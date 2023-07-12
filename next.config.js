/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'magpiebubble.s3.us-east-1.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
