import style from './index.module.scss';
import React from 'react';

interface IServiceCard {
    icon?: string;
    title?: string;
    description?: string;
    cta?: string;
    ctaLink?: string;
    ctaIcon?: string;
    className?: string;
}

const ServiceCard = (props: IServiceCard) => {
    const { title, description, cta, ctaLink, ctaIcon, className = '', icon } = props;
    return (
        <div className={`${style.cardWrapper} ${className}`}>
            {icon && (
                <span className="d-flex jc-center ai-center">
                    <i className={`font icon-${icon}`}></i>
                </span>
            )}
            <h5>{title}</h5>
            <p>{description}</p>
            <a href={ctaLink}>
                {cta}
                {ctaIcon ? (
                    <>
                        {' '}
                        <i className={`font icon-${ctaIcon}`}></i>
                    </>
                ) : (
                    <></>
                )}
            </a>
        </div>
    );
};

export default ServiceCard;
