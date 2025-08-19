/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://moversmove.ca',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/dashboard', '/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://moversmove.ca/server-sitemap.xml'],
  },
};
