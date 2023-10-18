/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['lucky.codrv.in', 'lucky.ondrv.com'],
    },
    async rewrites() {
        return [
            {
                source: '/product/:slug*',
                destination: '/',
            },
            {
                source: '/category/:slug*',
                destination: '/',
            },
            {
                source: '/social-auth/:provider',
                destination: '/social-auth',
            },
            {
                source: '/industries/:industry',
                destination: '/',
            },
        ];
    },
};

module.exports = nextConfig;
