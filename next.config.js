/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  target: 'experimental-serverless-trace',
  // Use output: 'export' for static HTML export
  output: 'export',
};