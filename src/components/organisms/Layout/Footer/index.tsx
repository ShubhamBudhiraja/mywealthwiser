import React from 'react';
import style from './index.module.scss';
import { IIterableItem } from 'src/interface/layout';

const SiteFooter = ({ data }: { data: any }) => {
    const { logo, menuItems, contactDetails, description } = data;

    return (
        <footer className={style.footerWrapper}>
            <div className={style.innerWrap}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href="/" className="mb-20 d-inline-block">
                                <img src={logo} alt="" />
                            </a>
                            <p>{description}</p>
                        </div>
                        {menuItems.map((item: any, index: number) => (
                            <div className="col" key={`${item.title}_${index}`}>
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
                        <div className="col">
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
            </div>
        </footer>
    );
};

export default SiteFooter;
