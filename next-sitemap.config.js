/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://btcbank24.ru', // Указать URL сайта
    generateRobotsTxt: true, // Создание robots.txt
    sitemapSize: 5000, // Максимальное количество URL в одном файле
    exclude: ['/admin', '/dashboard'], // Исключенные страницы
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: ['/admin', '/dashboard'] }, // Закрытые страницы
        ],
    },
};
