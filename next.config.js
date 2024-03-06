/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: '/images/14gp8bl9/production/**',
          },
        ],
    },
}

module.exports = nextConfig
