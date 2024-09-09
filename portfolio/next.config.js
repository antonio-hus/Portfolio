/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES;
const nextConfig = {
  basePath: isGithubPages ? '/<repository-name>' : '',
  assetPrefix: isGithubPages ? '/<repository-name>/' : '',
  output: 'export',
};

module.exports = {
    // Use the target as 'serverless' for static export
    target: 'serverless',
    trailingSlash: true,
  }

module.exports = nextConfig;

