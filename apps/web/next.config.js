/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    remotePatterns: [
        {
            protocol: 'http', 
            hostname: 'localhost', 
            pathname: '/public/**'
        }
    ],
    
    images: {
        domains: [
            'www.yonex.com','upload.wikimedia.org','randomuser.me', 'wp.eventhub.net','flowbite.s3.amazonaws.com',
            'images.unsplash.com'
        ]
    }
}
