import Link from 'next/link';
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
    const { title, description, cta, ctaLink = '', ctaIcon, className = '', icon } = props;
    return (
        <div className={`${style.cardWrapper} ${className}`}>
            {icon && (
                <figure className="d-flex jc-center ai-center">
                    <img src={icon} alt="" />
                </figure>
            )}
            <h5>{title}</h5>
            <p>{description}</p>
            {cta && (
                <Link href={ctaLink}>
                    {cta}
                    {ctaIcon ? (
                        <>
                            {' '}
                            <i className={`font icon-${ctaIcon}`}></i>
                        </>
                    ) : (
                        <></>
                    )}
                </Link>
            )}
        </div>
    );
};

export default ServiceCard;
