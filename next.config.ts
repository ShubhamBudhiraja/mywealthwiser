import { config } from 'dotenv';
import type { NextConfig } from 'next';

const loadEnv = process.env.NODE_ENV;
config({ path: `./.env.${loadEnv}` });

const nextConfig: NextConfig = {
    output: 'export',
    reactStrictMode: false,
    basePath: '',
    assetPrefix: '',
};

export default nextConfig;
