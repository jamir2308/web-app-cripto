/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coinicons-api.vercel.app",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard/products',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
