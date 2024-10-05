/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/1', // TODO: try to redirect dynamically
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
