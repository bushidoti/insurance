/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
  reactStrictMode: true,
  transpilePackages: [ 'antd', '@ant-design', 'rc-util', 'rc-pagination', 'rc-picker', 'rc-tree', "rc-table",
    'rc-notification', 'rc-tooltip', 'rc-tooltip' ]

};

export default nextConfig;
