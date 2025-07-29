import React from 'react';
import style from './index.module.scss';

interface IInput {
    id: string;
    placeHolder: string;
    className?: string;
    onChange: (e: any) => void;
    value?: string;
    error?: string;
}

const Input = (props: IInput) => {
    const { id, placeHolder, className = '', onChange, value = '', error } = props;

    return (
        <>
            <input
                className={`${style.inputWrapper} ${className}`}
                type="text"
                id={id}
                autoComplete="off"
                placeholder={placeHolder}
                onChange={onChange}
                value={value}
            />
            <div className="position-relative">{error && <span className={style.error}>{error}</span>}</div>
        </>
    );
};

export default Input;
