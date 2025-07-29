import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import '@styles/base.scss';
import Layout from '@organisms/Layout';
import layoutData from '@static/layout.json';
import { ModalProvider } from 'src/lib/context/modal';

const urbanistFont = Urbanist({
    weight: ['300', '400', '600'],
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
                <ModalProvider>
                    <Layout pageData={layoutData}>{children}</Layout>
                </ModalProvider>
                {/* <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive"></Script> */}
            </body>
        </html>
    );
}
