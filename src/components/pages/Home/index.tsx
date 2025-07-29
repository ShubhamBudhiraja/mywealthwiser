'use client';
import React, { useState } from 'react';
import style from './index.module.scss';
import ProcessStepper from '@molecules/ProcessStepper';
import WhyUs from '@molecules/WhyUs';
import NewsLetter from '@molecules/NewsLetter';
import Accordion from '@atoms/Accordion';
import Input from '@atoms/Input';
import Carousel from '@molecules/Carousel';
import TestimonialCard from '@molecules/TestimonialCard';
import ServicesBanner from '@molecules/ServicesBanner';
import SectionHeading from '@atoms/SectionHeading';

const Home = ({ pageData }: { pageData: any }) => {
    const { banner } = pageData;

    const [email, setEmail] = useState('');

    return (
        <>
            <section className={style.banner} id="heroSection">
                <div className="container position-relative content">
                    <SectionHeading
                        heading={banner?.heading}
                        subHeading={banner?.subHeading}
                        className={style.heading}
                        centerAligned
                        isH1
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
                    {/* <div className={`${style.incomeFloater} ${style.floater}`}>
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
                    /> */}
                </div>
            </section>

            {/* <section className={style.counterWrapper}>
                <div className="container">
                    <ul>
                        {stats?.items?.map(
                            (
                                item: { count: number; prefix?: string; suffix?: string; title: string },
                                index: number
                            ) => (
                                <li key={`stat_${index}`}>
                                    <Counter
                                        count={item.count}
                                        suffix={item?.suffix}
                                        prefix={item?.prefix}
                                        title={item.title}
                                        className={style.item}
                                    />
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </section> */}

            <WhyUs {...pageData?.whyUs} />

            <ServicesBanner
                heading={pageData?.services?.heading}
                services={pageData?.services?.items}
                btnText={pageData?.services?.btnText}
                btnIcon={pageData?.services?.btnIcon}
                subHeading={pageData?.services?.subHeading}
            />

            <section className="container section-bottom-margin">
                <SectionHeading
                    heading={pageData?.stepsData?.heading}
                    subHeading={pageData?.stepsData?.subHeading}
                    centerAligned
                />
                <ProcessStepper list={pageData?.stepsData?.items} />
            </section>

            <section className={style.newsLetterWrapper}>
                <NewsLetter {...pageData?.newsLetter} />
            </section>

            {pageData?.testimonials && (
                <section className={`${style.testimonials} section-bottom-margin`}>
                    <div className="container">
                        <SectionHeading
                            heading={pageData?.testimonials?.heading}
                            subHeading={pageData?.testimonials?.subHeading}
                            centerAligned
                            className="mb-0"
                        />
                    </div>
                    <Carousel settings={{ slidesToShow: 1 }}>
                        {pageData?.testimonials?.items?.map((item: any, index: number) => (
                            <div key={`carouselItem_${index}`}>
                                <TestimonialCard {...item} />
                            </div>
                        ))}
                    </Carousel>
                </section>
            )}

            <section className={style.faqWrapper}>
                <SectionHeading heading={pageData?.faq?.heading} subHeading={pageData?.faq?.subHeading} centerAligned />
                <Accordion items={pageData?.faq?.items} />
            </section>
        </>
    );
};

export default Home;
