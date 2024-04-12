/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: 'experimental-serverless-trace', // This is needed for Next.js 13
  output: {
    export: true,
  },
};

module.exports = nextConfig;
