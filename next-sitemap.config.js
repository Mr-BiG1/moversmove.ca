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
  // Custom priority for homepage
  transform: async (config, path) => {
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
};
