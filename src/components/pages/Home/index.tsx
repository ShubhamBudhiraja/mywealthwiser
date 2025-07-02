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

const Home = ({ pageData }: { pageData: any }) => {
    const [email, setEmail] = useState('');

    return (
        <>
            <section className={style.banner}>
                <div className="container position-relative">
                    <SectionHeader
                        heading="Smarter Investing, Brilliantly Spending"
                        subHeading="Consultants"
                        className={style.heading}
                        centerAligned
                    />
                    <p className={style.description}>
                        Establish your vision and value proposition and turn them into testable prototypes.
                    </p>
                    <div className={style.form}>
                        <Input
                            placeHolder="Enter your email"
                            id="emailId"
                            onChange={(e: any) => setEmail(e?.target?.value)}
                            value={email}
                        />
                        <button>Connect Now</button>
                    </div>
                    <div className={`${style.incomeFloater} ${style.floater}`}>
                        <div className="d-flex jc-between ai-center mb-12">
                            <h5>Total Income</h5>
                            <span className={style.stat}>
                                <i className="font icon-arrow-up"></i>18%
                            </span>
                        </div>
                        <p>₹235305</p>
                    </div>
                    <div className={`${style.assetsFloater} ${style.floater}`}>
                        <h5 className="mb-12">Assets Owned</h5>
                        <p className="mb-20">₹3.5Cr</p>
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
                        <div className="col">
                            <Counter count={70} suffix="%" title="Recurring Clients" className={style.item} />
                        </div>
                        <div className="col">
                            <Counter count={100} suffix="+" title="Clients onboarded" className={style.item} />
                        </div>
                        <div className="col">
                            <Counter
                                count={30}
                                prefix="₹"
                                suffix="L+"
                                title="Portfolio under management"
                                className={style.item}
                            />
                        </div>
                        <div className="col">
                            <Counter count={5} suffix="+" title="Years of Experience" className={style.item} />
                        </div>
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
                                cta="Know More"
                                ctaIcon="forward"
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
            <section className={style.faqWrapper}>
                <SectionHeader heading={pageData?.faq?.heading} subHeading={pageData?.faq?.subHeading} centerAligned />
                <Accordion items={pageData?.faq?.items} />
            </section>
        </>
    );
};

export default Home;
