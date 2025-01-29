/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://btcbank24.ru',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    exclude: ['/admin', '/dashboard'],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: ['/admin', '/dashboard'] },
        ],
    },
};

export default config;
