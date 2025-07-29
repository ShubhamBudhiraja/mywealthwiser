import React from 'react';
import style from './index.module.scss';

interface ISectionHeading {
    heading: string;
    subHeading?: string;
    centerAligned?: boolean;
    darkBg?: boolean;
    className?: string;
    isH1?: boolean;
}

const SectionHeading = (props: ISectionHeading) => {
    const { heading, subHeading, centerAligned, darkBg, className = '', isH1 } = props;

    return (
        <div
            className={`${style.headingWrap} ${className} ${centerAligned ? style.centerAligned : ''} ${darkBg ? style.darkBg : ''}`}
        >
            {subHeading ? <span>{subHeading}</span> : <></>}
            {isH1 ? <h1>{heading}</h1> : <h2>{heading}</h2>}
        </div>
    );
};

export default SectionHeading;
