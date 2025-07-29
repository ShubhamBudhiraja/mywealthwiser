import React, { useEffect } from 'react';
import { IIterableItem } from 'src/interface/layout';
import './index.scss';

interface IAnimatedList {
    items: IIterableItem[];
}

const AnimatedList = (props: IAnimatedList) => {
    const { items } = props;

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('.fade-in').forEach((el) => {
            observer.observe(el);
        });

        return () => {
            document.querySelectorAll('.fade-in').forEach((el) => {
                observer.unobserve(el);
            });
        };
    }, []);

    return (
        <ul>
            {items?.map((item: IIterableItem, index: number) => (
                <li key={`animatedListItem_${index}`} className="fade-in">
                    <h5>{item?.title}</h5>
                    <p>{item?.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default AnimatedList;
