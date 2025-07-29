import React, { useContext, useEffect, useState } from 'react';
import style from './index.module.scss';
import { IHeaderData, IIterableItem } from 'src/interface/layout';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HamburgerMenu from '../HamburgerMenu';
import Modal from '@molecules/Modal';
import { ModalContext } from 'src/lib/context/modal';
import EnquiryForm from '@molecules/EnquiryForm';

const SiteHeader = ({ data }: { data: IHeaderData }) => {
    const { menu, cta, hamburgerMenu } = data;

    const [isSticky, setISticky] = useState(false);
    const [showHamburger, setShowHamburger] = useState(false);
    const { showEnquiryModal, toggleModal, formParams } = useContext(ModalContext);

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

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        if (showHamburger) body.classList.add('overflow-hidden');
        else body.classList.remove('overflow-hidden');
    }, [showHamburger]);

    return (
        <>
            <header
                className={`${style.headerWrapper} ${isSticky ? style.sticky : ''} ${showHamburger ? style.hamburgerOpen : ''}`}
            >
                <div className={style.innerWrap}>
                    <div className={`container ${style.content}`}>
                        <Link href="/" className={style.siteLogo}>
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logo-${isSticky ? 'light' : 'dark'}.png`}
                                alt=""
                            />
                        </Link>
                        <ul className={style.navBar}>
                            {menu.map((item: IIterableItem, index: number) => (
                                <li key={`${item.title}_${index}`} className={style.navItem}>
                                    <Link
                                        href={item.link || ''}
                                        className={`${style.navLink} ${item?.link && pathName === item.link ? style.active : ''}`}
                                    >
                                        {item.title} {item.items?.length && <i className="font icon-down"></i>}
                                    </Link>
                                    {item?.items?.length && (
                                        <div className={style.dropdown}>
                                            <ul>
                                                {item?.items?.map((subItem: IIterableItem, subIndex: number) => (
                                                    <li key={`subItem_${subIndex}`}>
                                                        <a href={subItem?.link}>{subItem?.title}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <button onClick={toggleModal}>{cta}</button>
                        <div
                            className={`${style.hamburger} ${showHamburger ? style.open : ''}`}
                            onClick={() => {
                                setShowHamburger(!showHamburger);
                            }}
                        >
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </header>
            <HamburgerMenu
                show={showHamburger}
                items={hamburgerMenu}
                dark={!isSticky}
                onHide={() => setShowHamburger(false)}
            />
            <Modal show={showEnquiryModal} title="Enquire Now">
                <EnquiryForm onSecondaryClick={toggleModal} formParams={formParams} />
            </Modal>
        </>
    );
};

export default SiteHeader;
