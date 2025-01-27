
module.exports = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    experimental: {
        optimizeCss: false,
    },
    output: 'standalone', // Убедитесь, что не 'export'
};