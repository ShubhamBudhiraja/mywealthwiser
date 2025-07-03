import React from 'react';
import style from './index.module.scss';

interface ITestimonialCard {
    testimonial: string;
    name: string;
    photo: string;
}

const TestimonialCard = (props: ITestimonialCard) => {
    const { testimonial, name, photo } = props;

    return (
        <div className={style.cardWrapper}>
            <p>"{testimonial}"</p>
            <div className="d-flex ai-center jc-center">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}${photo}`} alt="" />
                <span>{name}</span>
            </div>
        </div>
    );
};

export default TestimonialCard;
