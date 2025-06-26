'use client';
import React from 'react';
import style from './index.module.scss';
import Counter from '@atoms/Counter';
import ProcessStepper from '@molecules/ProcessStepper';
import SectionHeader from '@atoms/SectionHeading';
import WhyUs from '@molecules/WhyUs';

const Home = ({ pageData }: { pageData: any }) => {
    return (
        <>
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
            <section className="container section-top-margin section-bottom-margin">
                <SectionHeader
                    heading={pageData?.stepsData?.heading}
                    subHeading={pageData?.stepsData?.subHeading}
                    centerAligned
                />
                <ProcessStepper list={pageData?.stepsData?.items} />
            </section>
        </>
    );
};

export default Home;
