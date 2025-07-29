'use client';
import React, { createContext, useState } from 'react';

export const ModalContext = createContext<{
    showEnquiryModal: boolean;
    toggleModal: () => void;
    formParams?: any;
    setFormParams?: React.Dispatch<React.SetStateAction<any>>;
}>({
    showEnquiryModal: false,
    toggleModal: () => null,
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [showEnquiryModal, setShowEnquiryModal] = useState(false);
    const [formParams, setFormParams] = useState({});

    const toggleModal = () => {
        const body = document.getElementsByTagName('body')[0];
        if (!showEnquiryModal) body.classList.add('overflow-hidden');
        else body.classList.remove('overflow-hidden');

        setShowEnquiryModal(!showEnquiryModal);
    };

    return (
        <ModalContext.Provider value={{ showEnquiryModal, toggleModal, formParams, setFormParams }}>
            {children}
        </ModalContext.Provider>
    );
};
