import React from 'react';
import style from './index.module.scss';
import { IIterableItem } from 'src/interface/layout';
import SectionHeader from '@atoms/SectionHeading';

interface IWhyUs {
    heading: string;
    subHeading?: string;
    description: string;
    cta?: string;
    ctaLink?: string;
    boxData?: IIterableItem[];
}

const WhyUs = (props: IWhyUs) => {
    const { heading, subHeading, description, cta, ctaLink, boxData } = props;

    return (
        <section className="container section-top-margin section-bottom-margin">
            <div className={style.contentWrap}>
                <div>
                    <SectionHeader heading={heading} subHeading={subHeading} />
                    <p>{description}</p>
                    <a href={ctaLink}>{cta}</a>
                </div>
                <div className={style.boxes}>
                    {boxData?.map((box: any, index: number) => (
                        <ul key={`why_${index}`}>
                            {box.items.map((item: IIterableItem, subIndex: number) => (
                                <li key={`why_${index}_${subIndex}`}>
                                    {item?.icon && <i className={`font icon-${item.icon}`}></i>}
                                    <h4>{item.title}</h4>
                                    <p>{item?.description}</p>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
