import type { NextConfig } from "next";

const { withContentlayer } = require('next-contentlayer')


const nextConfig: NextConfig = {
  reactStrictMode: true, swcMinify: true
};

module.exports = withContentlayer(nextConfig)

export default nextConfig;
