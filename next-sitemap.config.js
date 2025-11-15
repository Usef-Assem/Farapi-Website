/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://farapi-website-phi.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  exclude: [
    '/icon.svg',
    '/apple-icon*',
    '/favicon.ico',
  ],
};