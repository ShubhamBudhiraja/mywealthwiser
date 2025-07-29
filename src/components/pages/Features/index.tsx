'use client';
import SectionHeading from '@atoms/SectionHeading';
import React, { useContext, useRef } from 'react';
import style from './index.module.scss';
import ServicesBanner from '@molecules/ServicesBanner';
import ContentSection from '@molecules/ContentSection';
import Accordion from '@atoms/Accordion';
import Lottie from 'lottie-react';
import animation from '../../../../public/animations/banner-animation.json';
import Down from '@atoms/Down';
import { ModalContext } from 'src/lib/context/modal';

const Features = ({ pageData }: { pageData: any }) => {
    const { banner, services, intro, faq } = pageData;

    const sectionRef = useRef<HTMLElement>(null);
    const { toggleModal, setFormParams } = useContext(ModalContext);

    const handleDownClick = () => {
        const topPosition = document.getElementById('heroSection')?.clientHeight || 0;

        window?.scrollTo({
            behavior: 'smooth',
            top: topPosition,
        });
    };

    const handleCtaClick = () => {
        toggleModal();
        setFormParams?.({ service: banner?.heading });
    };

    return (
        <>
            <section id="heroSection" className="section-bottom-margin">
                <div className="content container">
                    <SectionHeading
                        heading={banner?.heading}
                        subHeading={banner?.subHeading}
                        centerAligned
                        className={style.heading}
                        isH1
                    />
                    <p className={style.description}>{banner?.description}</p>
                    <Down handleClick={handleDownClick} />
                </div>
            </section>
            <section className="container" ref={sectionRef}>
                <ContentSection
                    image={intro?.image}
                    mobileImage={intro?.mobileImage}
                    heading={intro?.heading}
                    subHeading={intro?.subHeading}
                    description={intro?.description}
                    ctaText={intro?.ctaText}
                    ctaClick={handleCtaClick}
                />
            </section>
            <ServicesBanner {...services} services={services?.items} />
            <section className={`container ${style.faqWrapper}`}>
                <div className={style.content}>
                    <SectionHeading heading={faq?.heading} subHeading={faq?.subHeading} />
                    <Accordion items={faq?.items} />
                </div>
                <Lottie
                    animationData={animation}
                    loop
                    autoplay
                    style={{ height: 450, width: 450 }}
                    className={`${style.animation} d-lg-block`}
                />
            </section>
        </>
    );
};

export default Features;
