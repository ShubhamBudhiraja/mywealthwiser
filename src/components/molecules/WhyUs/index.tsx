import React, { useContext } from 'react';
import style from './index.module.scss';
import { IIterableItem } from 'src/interface/layout';
import SectionHeader from '@atoms/SectionHeading';
import Link from 'next/link';
import { ModalContext } from 'src/lib/context/modal';

interface IWhyUs {
    heading: string;
    subHeading?: string;
    description: string;
    cta?: string;
    ctaLink?: string;
    boxData?: IIterableItem[];
}

const WhyUs = (props: IWhyUs) => {
    const { heading, subHeading, description, cta, ctaLink = '', boxData } = props;

    const { toggleModal } = useContext(ModalContext);

    return (
        <section className="container section-top-margin">
            <div className={style.contentWrap}>
                <div>
                    <SectionHeader heading={heading} subHeading={subHeading} />
                    <div dangerouslySetInnerHTML={{ __html: description }}></div>
                    <button onClick={toggleModal}>{cta}</button>
                </div>
                <div className={style.boxes}>
                    {boxData?.map((box: any, index: number) => (
                        <ul key={`why_${index}`}>
                            {box.items.map((item: IIterableItem, subIndex: number) => (
                                <li key={`why_${index}_${subIndex}`}>
                                    {item?.icon && <img src={item.icon} alt="" />}
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
