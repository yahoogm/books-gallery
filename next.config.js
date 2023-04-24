/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['books.google.com'],
  },
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
};

module.exports = nextConfig;
