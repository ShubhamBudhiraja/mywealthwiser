'use client';
import React from 'react';
import SiteHeader from './Header';
import SiteFooter from './Footer';
import { ILayoutData } from 'src/interface/layout';

const Layout = (props: { children: React.ReactNode; pageData: ILayoutData }) => {
    const { children, pageData } = props;

    return (
        <>
            <SiteHeader data={pageData.headerData} />
            {children}
            <SiteFooter data={pageData.footerData} />
        </>
    );
};

export default Layout;
