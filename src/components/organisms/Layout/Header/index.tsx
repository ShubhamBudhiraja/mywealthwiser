import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import { IHeaderData, IIterableItem } from 'src/interface/layout';
import { usePathname } from 'next/navigation';

const SiteHeader = ({ data }: { data: IHeaderData }) => {
    const { menu, cta } = data;

    const [isSticky, setISticky] = useState(false);
    const [active, setActive] = useState('');

    const pathName = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const heroSectionHeight = document.getElementById('heroSection');
            if (window.scrollY > (heroSectionHeight?.clientHeight || 0)) {
                if (!isSticky) setISticky(true);
            } else setISticky(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${style.headerWrapper} ${isSticky ? style.sticky : ''}`}>
            <div className={style.innerWrap}>
                <div className={`container ${style.content}`}>
                    <a href="/" className={style.siteLogo}>
                        <img
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logo-${isSticky ? 'light' : 'dark'}.png`}
                            alt=""
                        />
                    </a>
                    <ul>
                        {menu.map((item: IIterableItem, index: number) => (
                            <li key={`${item.title}_${index}`}>
                                <a
                                    href={item.link}
                                    className={item?.link && pathName.includes(item.link) ? style.active : undefined}
                                >
                                    {item.title} {item.items?.length && <i className="font icon-down"></i>}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button>{cta}</button>
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;
