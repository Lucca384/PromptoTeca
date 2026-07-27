import type { NextConfig } from 'next';
import { join } from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
