/** @type {import('next').NextConfig} */
const nextConfig = {

    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images-na.ssl-images-amazon.com',
            },
        ],
    },
}

module.exports = nextConfig
