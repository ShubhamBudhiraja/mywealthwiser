'use client';
import React, { useState } from 'react';
import style from './index.module.scss';
import Counter from '@atoms/Counter';
import ProcessStepper from '@molecules/ProcessStepper';
import SectionHeader from '@atoms/SectionHeading';
import WhyUs from '@molecules/WhyUs';
import ServiceCard from '@molecules/ServiceCard';
import { IIterableItem } from 'src/interface/layout';
import NewsLetter from '@molecules/NewsLetter';
import Accordion from '@atoms/Accordion';
import Lottie from 'lottie-react';
import animation from '../../../../public/animations/banner-animation.json';
import Input from '@atoms/Input';
import Carousel from '@molecules/Carousel';
import TestimonialCard from '@molecules/TestimonialCard';

const Home = ({ pageData }: { pageData: any }) => {
    const { banner, stats } = pageData;

    const [email, setEmail] = useState('');

    return (
        <>
            <section className={style.banner}>
                <div className="container position-relative">
                    <SectionHeader
                        heading={banner?.heading}
                        subHeading={banner?.subHeading}
                        className={style.heading}
                        centerAligned
                    />
                    <p className={style.description}>{banner?.description}</p>
                    <div className={style.form}>
                        <Input
                            placeHolder={banner?.placeHolder}
                            id={banner?.fieldId}
                            onChange={(e: any) => setEmail(e?.target?.value)}
                            value={email}
                        />
                        <button>{banner?.btnText}</button>
                    </div>
                    <div className={`${style.incomeFloater} ${style.floater}`}>
                        <div className="d-flex jc-between ai-center mb-12">
                            <h5>{banner?.incomeFloater?.title}</h5>
                            <span className={style.stat}>
                                <i className="font icon-arrow-up"></i>
                                {banner?.incomeFloater?.stat}
                            </span>
                        </div>
                        <p>{banner?.incomeFloater?.value}</p>
                    </div>
                    <div className={`${style.assetsFloater} ${style.floater}`}>
                        <h5 className="mb-12">{banner?.assetsFloater?.title}</h5>
                        <p className="mb-20">{banner?.assetsFloater?.stat}</p>
                        <div className={style.chart}>
                            {[...Array(10)].map((_, index: number) => (
                                <span key={`graphBar_${index}`} />
                            ))}
                        </div>
                    </div>
                    <Lottie
                        animationData={animation}
                        loop
                        autoplay
                        style={{ height: 450, width: 450 }}
                        className={style.animation}
                    />
                </div>
            </section>

            <section className={style.counterWrapper}>
                <div className="container">
                    <div className="row">
                        {stats?.items?.map(
                            (
                                item: { count: number; prefix?: string; suffix?: string; title: string },
                                index: number
                            ) => (
                                <div className="col" key={`stat_${index}`}>
                                    <Counter
                                        count={item.count}
                                        suffix={item?.suffix}
                                        prefix={item?.prefix}
                                        title={item.title}
                                        className={style.item}
                                    />
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            <WhyUs {...pageData?.whyUs} />

            <section className={style.servicesWrapper}>
                <div className="container">
                    <SectionHeader heading={pageData?.services?.heading} darkBg centerAligned />
                    <div className="d-flex jc-center gap-24 wrap">
                        {pageData?.services?.items?.map((service: IIterableItem, index: number) => (
                            <ServiceCard
                                key={`serviceCard_${index}`}
                                title={service?.title}
                                description={service?.description}
                                cta={pageData?.services?.btnText}
                                ctaIcon={pageData?.services?.btnIcon}
                                ctaLink={service?.link}
                                icon={service?.icon}
                                className={style.singleCard}
                            />
                        ))}
                    </div>
                </div>
                <span className={style.bgText}>{pageData?.services?.subHeading}</span>
            </section>

            <section className="container section-top-margin section-bottom-margin">
                <SectionHeader
                    heading={pageData?.stepsData?.heading}
                    subHeading={pageData?.stepsData?.subHeading}
                    centerAligned
                />
                <ProcessStepper list={pageData?.stepsData?.items} />
            </section>

            <section className={style.newsLetterWrapper}>
                <NewsLetter {...pageData?.newsLetter} />
            </section>

            <section className={`${style.testimonials} section-bottom-margin`}>
                <div className="container">
                    <SectionHeader
                        heading={pageData?.testimonials?.heading}
                        subHeading={pageData?.testimonials?.subHeading}
                        centerAligned
                    />
                </div>
                <Carousel settings={{ slidesToShow: 1 }}>
                    {pageData?.testimonials?.items?.map((item: any, index: number) => (
                        <>
                            <TestimonialCard {...item} />
                        </>
                    ))}
                </Carousel>
            </section>

            <section className={style.faqWrapper}>
                <SectionHeader heading={pageData?.faq?.heading} subHeading={pageData?.faq?.subHeading} centerAligned />
                <Accordion items={pageData?.faq?.items} />
            </section>
        </>
    );
};

export default Home;
