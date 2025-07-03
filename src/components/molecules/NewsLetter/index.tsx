import React, { useState } from 'react';
import style from './index.module.scss';
import SectionHeader from '@atoms/SectionHeading';
import Input from '@atoms/Input';

interface INewsLetter {
    heading: string;
    description: string;
    btnText: string;
    placeHolder: string;
}

const NewsLetter = (props: INewsLetter) => {
    const { heading, description, btnText, placeHolder } = props;

    const [email, setEmail] = useState('');

    return (
        <div
            className={style.wrapper}
            style={{ backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH}/images/banner-bg.png")` }}
        >
            <div className="container">
                <div className={style.content}>
                    <SectionHeader heading={heading} />
                    <p>{description}</p>
                    <div className={style.formWrap}>
                        <Input
                            placeHolder={placeHolder}
                            id="emailId"
                            onChange={(e: any) => setEmail(e?.target?.value)}
                            value={email}
                        />
                        <button>{btnText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
