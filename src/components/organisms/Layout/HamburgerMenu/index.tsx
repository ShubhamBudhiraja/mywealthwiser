import React from 'react';
import style from './index.module.scss';
import { IIterableItem } from 'src/interface/layout';
import Link from 'next/link';

interface IHamburgerMenu {
    show: boolean;
    items: IIterableItem[];
    dark?: boolean;
    onHide: () => void;
}

const HamburgerMenu = (props: IHamburgerMenu) => {
    const { show, dark, items, onHide } = props;

    return (
        <div className={`${style.wrapper} ${show ? style.show : ''} ${dark ? style.dark : ''}`}>
            <ul>
                {items?.map((item: IIterableItem, index: number) => (
                    <li key={`hamburgerMenuItem_${index}`}>
                        <Link href={item.link || ''} onClick={onHide}>
                            {item?.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HamburgerMenu;
