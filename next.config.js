/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Characters',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
