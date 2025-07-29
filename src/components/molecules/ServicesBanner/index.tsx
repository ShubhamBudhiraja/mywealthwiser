import React from 'react';
import style from './index.module.scss';
import SectionHeading from '@atoms/SectionHeading';
import ServiceCard from '@molecules/ServiceCard';
import { IIterableItem } from 'src/interface/layout';

interface IServicesBanner {
    services: IIterableItem[];
    heading: string;
    subHeading: string;
    btnText: string;
    btnIcon: string;
}

const ServicesBanner = (props: IServicesBanner) => {
    const { services, btnIcon, btnText, heading, subHeading } = props;

    return (
        <section className={style.servicesWrapper}>
            <div className="container">
                <SectionHeading heading={heading} darkBg centerAligned />
                <div className={style.innerWrap}>
                    {services?.map((service: IIterableItem, index: number) => (
                        <ServiceCard
                            key={`serviceCard_${index}`}
                            title={service?.title}
                            description={service?.description}
                            cta={btnText}
                            ctaIcon={btnIcon}
                            ctaLink={service?.link}
                            icon={service?.icon}
                            className={style.singleCard}
                        />
                    ))}
                </div>
            </div>
            <span className={style.bgText}>{subHeading}</span>
        </section>
    );
};

export default ServicesBanner;
