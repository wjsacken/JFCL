/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  // Use output: 'export' for static HTML export
  output: 'export',
};
