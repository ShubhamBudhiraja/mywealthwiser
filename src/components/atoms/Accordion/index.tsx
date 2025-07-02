import React, { useRef, useState } from 'react';
import style from './index.module.scss';

interface ISingleItem {
    id: string;
    title: string;
    body: string;
}

interface IAccordion {
    items: ISingleItem[];
    activeId?: string;
    showFirstActive?: boolean;
}

const Accordion = (props: IAccordion) => {
    const { items, activeId = '' } = props;

    const [activeItem, setActiveItem] = useState(activeId);
    const contentRef = useRef<any>(null);

    const handleItemClick = (id: string) => {
        if (activeItem === id) setActiveItem('');
        else setActiveItem(id);
    };

    return (
        <ul className={style.listWrapper}>
            {items.map((item: ISingleItem, index: number) => (
                <li key={`accordionItem_${index}`} className={item.id === activeItem ? style.active : undefined}>
                    <button onClick={() => handleItemClick(item.id)}>
                        {item.title} <i className="font icon-down"></i>
                    </button>
                    <div
                        ref={contentRef}
                        style={{
                            height: item.id === activeItem ? `${contentRef.current?.scrollHeight}px` : '0px',
                        }}
                        className={style.body}
                    >
                        <p>{item.body}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Accordion;
