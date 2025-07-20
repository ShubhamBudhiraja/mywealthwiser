import React from 'react';
import style from './index.module.scss';
import { IIterableItem } from 'src/interface/layout';

const SiteFooter = ({ data }: { data: any }) => {
    const { logo, menuItems, contactDetails, description } = data;

    return (
        <footer className={style.footerWrapper}>
            <div className="container">
                <div className={style.columnsWrap}>
                    <div className={style.column}>
                        <a href="/" className="mb-20 d-inline-block">
                            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logo-dark.png`} alt="" />
                        </a>
                        <p>{description}</p>
                    </div>
                    {menuItems.map((item: any, index: number) => (
                        <div className={style.column} key={`${item.title}_${index}`}>
                            <h3>{item.heading}</h3>
                            <ul>
                                {item.menu.map((subItem: IIterableItem, subIndex: number) => (
                                    <li key={`${subItem.title}_${index}_${subIndex}`}>
                                        <a href={subItem.link}>{subItem.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className={style.column}>
                        <h3>{contactDetails.heading}</h3>
                        <ul>
                            {contactDetails.menu.map((item: any, index: number) => (
                                <li key={`${item.title}_${index}`} className={index === 3 ? 'd-flex' : undefined}>
                                    {index < 3 ? (
                                        <a href={item.link} target="_blank">
                                            {item.title}
                                        </a>
                                    ) : (
                                        item.items.map((subItem: IIterableItem, subIndex: number) => (
                                            <a
                                                href={subItem?.link}
                                                key={`${subItem.title}_${index}_${subIndex}`}
                                                target="_blank"
                                                className={style.socialIcon}
                                            >
                                                <i className={`font icon-${subItem?.title}`}></i>
                                            </a>
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
