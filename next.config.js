/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image.tmdb.org',"firebasestorage.googleapis.com"],
  },
}

module.exports = nextConfig
