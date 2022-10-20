/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withTM = require('next-transpile-modules')(['@vespaiach/axios-fetch-adapter']);

module.exports = withTM(nextConfig)
