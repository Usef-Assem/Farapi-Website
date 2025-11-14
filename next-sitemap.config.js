/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://farapi-website-phi.vercel.app/',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: [
    '/icon.svg',
    '/apple-icon*',
    '/favicon.ico',
  ],
};

export default config;