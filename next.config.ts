import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    
        ignoreBuildErrors: true,
      },
  /* config options here */
    images: {
    remotePatterns: [new URL('https://ecommerce.routemisr.com/**/**')],
    
    
  },
};

export default nextConfig;
