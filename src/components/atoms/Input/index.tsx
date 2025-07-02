import React from 'react';
import style from './index.module.scss';

interface IInput {
    id: string;
    placeHolder: string;
    className?: string;
    onChange: (e: any) => void;
    value?: string;
}

const Input = (props: IInput) => {
    const { id, placeHolder, className = '', onChange, value = '' } = props;

    return (
        <input
            className={`${style.inputWrapper} ${className}`}
            type="text"
            id={id}
            autoComplete="off"
            placeholder={placeHolder}
            onChange={onChange}
            value={value}
        />
    );
};

export default Input;
