import React from 'react';
import style from './index.module.scss';

interface IDown {
    handleClick: () => void;
}

const Down = (props: IDown) => {
    const { handleClick } = props;

    return (
        <div className={style.iconsWrapper} onClick={handleClick}>
            <div className={style.inner}>
                <i className="font icon-down"></i>
                <i className="font icon-down"></i>
            </div>
        </div>
    );
};

export default Down;
