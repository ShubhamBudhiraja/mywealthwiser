'use client';
import React from 'react';
import style from './index.module.scss';
import SectionHeading from '@atoms/SectionHeading';
import Accordion from '@atoms/Accordion';
import AnimatedList from '@atoms/AnimatedList';
import ProcessStepper from '@molecules/ProcessStepper';
import Lottie from 'lottie-react';
import faqAnimation from '../../../../public/animations/banner-animation.json';
import arrowAnimation from '../../../../public/animations/arrow.json';

const ServiceDetail = ({ pageData }: { pageData: any }) => {
    const { banner, about, bgSection, stepsData, faq } = pageData;

    return (
        <>
            <section id="heroSection" className="section-bottom-margin">
                <div className={`content container ${style.serviceHero}`}>
                    <div className={style.content}>
                        <SectionHeading heading={banner?.heading} subHeading={banner?.subHeading} isH1 />
                        <p>{banner?.description}</p>
                    </div>
                    <div className={`${style.images} d-lg-block`}>
                        <figure className={style.primaryImg}>
                            <img src={banner?.primaryImage} alt="" />
                        </figure>
                        <figure className={style.secondaryImg}>
                            <img src={banner?.secondaryImage} alt="" />
                        </figure>
                        <Lottie
                            animationData={arrowAnimation}
                            loop
                            autoplay
                            style={{ height: 150, width: 150 }}
                            className={style.animation}
                        />
                    </div>
                </div>
            </section>
            <section className={`${style.aboutService} container section-bottom-margin`}>
                <div className="mb-32">
                    <SectionHeading heading={about?.[0]?.title} />
                    <div dangerouslySetInnerHTML={{ __html: about?.[0]?.description }}></div>
                </div>
                <div>
                    <SectionHeading heading={about?.[1]?.title} />
                    <div dangerouslySetInnerHTML={{ __html: about?.[1]?.description }}></div>
                </div>
            </section>
            <section className={style.usp}>
                <div>
                    <SectionHeading heading={bgSection?.heading} darkBg />
                    <AnimatedList items={bgSection?.items} />
                </div>
                <figure>
                    <img src={bgSection?.image} alt={banner?.heading} />
                </figure>
            </section>
            <section className="container section-bottom-margin">
                <SectionHeading
                    heading={pageData?.stepsData?.heading}
                    subHeading={pageData?.stepsData?.subHeading}
                    centerAligned
                />
                <ProcessStepper list={stepsData?.items} />
            </section>
            <section className={`container ${style.faqWrapper}`}>
                <div className={style.content}>
                    <SectionHeading heading={faq?.heading} subHeading={faq?.subHeading} />
                    <Accordion items={faq?.items} activeId={faq?.items?.[0]?.id} />
                </div>
                <Lottie
                    animationData={faqAnimation}
                    loop
                    autoplay
                    style={{ height: 450, width: 450 }}
                    className={`${style.animation} d-lg-block`}
                />
            </section>
        </>
    );
};

export default ServiceDetail;
