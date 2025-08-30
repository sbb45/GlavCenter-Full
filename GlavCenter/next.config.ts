import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    compiler: {
      styledComponents: true,
    },
    images: {
        domains: ['localhost'], // добавляем домен Keystone
    },
};

export default nextConfig;
