/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'files.catbox.moe',
                port: '',
                pathname: '/sis1yu.jpeg',
            }
        ]
    }
}

module.exports = nextConfig
