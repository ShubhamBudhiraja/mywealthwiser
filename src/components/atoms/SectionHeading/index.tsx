import React from 'react';
import style from './index.module.scss';

interface ISectionHeader {
    heading: string;
    subHeading?: string;
    centerAligned?: boolean;
    darkBg?: boolean;
    className?: string;
}

const SectionHeader = (props: ISectionHeader) => {
    const { heading, subHeading, centerAligned, darkBg, className = '' } = props;

    return (
        <div
            className={`${style.headingWrap} ${className} ${centerAligned ? style.centerAligned : ''} ${darkBg ? style.darkBg : ''}`}
        >
            {subHeading ? <span>{subHeading}</span> : <></>}
            <h2>{heading}</h2>
        </div>
    );
};

export default SectionHeader;
