import React from 'react';
import style from './index.module.scss';

interface IStep {
    icon: string;
    title: string;
    description?: string;
}

interface IProcessStepper {
    list: IStep[];
}

const ProcessStepper = (props: IProcessStepper) => {
    const { list } = props;

    return (
        <div className={style.stepperWrapper}>
            {list.map((step: IStep, index: number) => (
                <div className={style.step} key={`step_${index}`}>
                    {index !== 0 ? <span className={`${style.dot} ${style.connectStart}`}></span> : <></>}
                    <div>
                        <figure className={style.iconWrap}>
                            <img src={step.icon} alt={step.title} />
                        </figure>
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                    </div>
                    {index !== list.length - 1 ? <span className={`${style.dot} ${style.connectEnd}`}></span> : <></>}
                </div>
            ))}
        </div>
    );
};

export default ProcessStepper;
