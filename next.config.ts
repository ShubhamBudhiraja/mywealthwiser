import { config } from 'dotenv';
import type { NextConfig } from 'next';

const loadEnv = process.env.NODE_ENV;
config({ path: `./.env.${loadEnv}` });

const nextConfig: NextConfig = {
    output: 'export',
    reactStrictMode: false,
    basePath: process.env.NODE_ENV === 'production' ? '/websitedemo/public_html' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/websitedemo/public_html/' : '',
};

export default nextConfig;
