/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment basePath when deploying to GitHub Pages
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  trailingSlash: true,
};

module.exports = nextConfig;
