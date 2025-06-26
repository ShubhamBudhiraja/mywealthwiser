import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import '@styles/base.scss';
import '@styles/common.scss';
import '@styles/icons.scss';
import Layout from '@organisms/Layout';
import layoutData from '@static/layout.json';

const urbanistFont = Urbanist({
    weight: ['400', '600'],
    variable: '--font-urbanist',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'MyWealthWiser',
    description: 'Created by Shubham Budhiraja',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={urbanistFont.className}>
                <Layout pageData={layoutData}>{children}</Layout>
            </body>
        </html>
    );
}
