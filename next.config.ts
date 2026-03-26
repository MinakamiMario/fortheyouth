import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/contactpagina',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms-conditions',
        destination: '/voorwaarden',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
