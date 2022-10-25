/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gravatar.loli.net']
  }
}

const withTM = require('next-transpile-modules')(['@vespaiach/axios-fetch-adapter']);

module.exports = withTM(nextConfig)
