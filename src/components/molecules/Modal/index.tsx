import React, { useContext, useEffect } from 'react';
import style from './index.module.scss';
import { ModalContext } from 'src/lib/context/modal';

interface IModal {
    show: boolean;
    title: string;
    children: React.ReactNode;
}

const Modal = (props: IModal) => {
    const { show, title, children } = props;
    const { toggleModal } = useContext(ModalContext);

    return (
        <div className={`${style.modalWrapper} ${show ? style.show : ''}`}>
            <div className={style.backdrop} onClick={toggleModal}></div>
            <div className={style.content}>
                <h5 className={style.modalTitle}>{title}</h5>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
