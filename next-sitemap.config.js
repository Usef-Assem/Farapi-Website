/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://farapi-website-phi.vercel.app', // Remove trailing slash
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: false, // Add this - prevents sitemap index
  exclude: [
    '/icon.svg',
    '/apple-icon*',
    '/favicon.ico',
  ],
};

export default config;