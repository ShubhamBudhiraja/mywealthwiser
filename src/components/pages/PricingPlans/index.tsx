'use client';
import SectionHeading from '@atoms/SectionHeading';
import React, { useContext, useEffect } from 'react';
import style from './index.module.scss';
import { formatPrice } from 'src/lib/utils/common';
import { ModalContext } from 'src/lib/context/modal';

const PricingPlans = ({ pageData }: { pageData: any }) => {
    const { banner, plans } = pageData;

    const { toggleModal, setFormParams } = useContext(ModalContext);

    const handleSelectPackage = (selectedPackage: string) => {
        toggleModal();
        setFormParams?.({ selectedPackage });
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(style.play);
                    observer.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('.featureCard').forEach((el) => {
            observer.observe(el);
        });

        return () => {
            document.querySelectorAll('.featureCard').forEach((el) => {
                observer.unobserve(el);
            });
        };
    }, []);

    return (
        <>
            <section id="heroSection" className="section-bottom-margin">
                <div className="content container">
                    <SectionHeading heading={banner?.heading} subHeading={banner?.subHeading} centerAligned isH1 />
                    <p>{banner?.description}</p>
                </div>
            </section>
            <section className={`${style.plans} container`}>
                {plans?.items?.map(
                    (plan: { heading: string; amount: number; description: string; features: string[] }) => (
                        <div className={`${style.card} featureCard`} key={`plan_${plan?.heading}`}>
                            <div>
                                <h4>{plan?.heading}</h4>
                                <p>{plan?.description}</p>
                                <div>
                                    <span className={style.amount}>{formatPrice(plan?.amount, false)}</span>
                                    <span className={style.month}>/year</span>
                                </div>
                                <ul>
                                    {plan?.features?.map((feature: string, featureIndex: number) => (
                                        <li key={`plan_${plan?.heading}_feature_${featureIndex}`}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <button onClick={() => handleSelectPackage(plan?.heading)}>{plans?.cta}</button>
                        </div>
                    )
                )}
            </section>
        </>
    );
};

export default PricingPlans;
