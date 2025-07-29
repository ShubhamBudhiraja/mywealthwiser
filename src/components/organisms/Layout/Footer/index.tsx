import React from 'react';
import style from './index.module.scss';
import { IIterableItem } from 'src/interface/layout';
import Link from 'next/link';

const SiteFooter = ({ data }: { data: any }) => {
    const { logo, menuItems, contactDetails, description } = data;

    return (
        <footer className={style.footerWrapper}>
            <div className="container">
                <div className={style.columnsWrap}>
                    <div className={style.column}>
                        <Link href="/" className="mb-20 d-inline-block">
                            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logo-dark.png`} alt="" />
                        </Link>
                        <p>{description}</p>
                    </div>
                    {menuItems.slice(1).map((item: any, index: number) => (
                        <div className={style.column} key={`${item.title}_${index}`}>
                            <h3>{item.heading}</h3>
                            <ul>
                                {item.menu.map((subItem: IIterableItem, subIndex: number) => (
                                    <li key={`${subItem.title}_${index}_${subIndex}`}>
                                        <Link href={subItem.link || ''}>{subItem.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className={style.column}>
                        <h3>{contactDetails.heading}</h3>
                        <ul>
                            {contactDetails.menu.map((item: any, index: number) => (
                                <li key={`${item.title}_${index}`} className={index === 1 ? 'd-flex' : undefined}>
                                    {index < 1 ? (
                                        <Link href={item.link} target="_blank">
                                            {item.title}
                                        </Link>
                                    ) : (
                                        item.items.map((subItem: IIterableItem, subIndex: number) => (
                                            <Link
                                                href={subItem?.link || ''}
                                                key={`${subItem.title}_${index}_${subIndex}`}
                                                target="_blank"
                                                className={style.socialIcon}
                                            >
                                                <i className={`font icon-${subItem?.title}`}></i>
                                            </Link>
                                        ))
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
