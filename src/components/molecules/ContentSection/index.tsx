import React from 'react';
import style from './index.module.scss';
import SectionHeading from '@atoms/SectionHeading';
import Link from 'next/link';

interface IContentSection {
    heading: string;
    subHeading?: string;
    description: string;
    image: string;
    mobileImage?: string;
    ctaText?: string;
    ctaClick?: () => void;
}

const ContentSection = (props: IContentSection) => {
    const { image, heading, subHeading, description, ctaClick, ctaText, mobileImage } = props;

    return (
        <div className={style.sectionWrapper}>
            <div className={style.content}>
                <SectionHeading heading={heading} subHeading={subHeading} />
                <div dangerouslySetInnerHTML={{ __html: description }} />
                <button onClick={ctaClick}>{ctaText}</button>
            </div>
            <figure>
                <img
                    src={image}
                    alt={`contentImage_${subHeading}`}
                    className={mobileImage ? 'd-lg-block' : undefined}
                />
                <img
                    src={mobileImage}
                    alt={`contentImage_${subHeading}`}
                    className={mobileImage ? 'd-lg-none' : undefined}
                />
            </figure>
        </div>
    );
};

export default ContentSection;
