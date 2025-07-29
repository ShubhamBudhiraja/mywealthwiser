import Input from '@atoms/Input';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { VALIDATIONS } from 'src/lib/constants/validations';
import style from './index.module.scss';
import Loader from '@atoms/Loader';
import { handleSubmitEntry } from 'src/lib/utils/api-managers';

interface IEnquiryForm {
    onSecondaryClick: () => void;
    formParams?: any;
}

const EnquiryForm = (props: IEnquiryForm) => {
    const { onSecondaryClick, formParams } = props;
    const { control, handleSubmit, reset, formState, setError } = useForm();
    const [isSuccess, setIsSuccess] = useState(false);

    const handleFormSubmit = async (formData: any) => {
        await handleSubmitEntry({
            formData: { ...formData, ...formParams },
            onSuccess: () => setIsSuccess(true),
            onError: () => setError('number', { message: 'Something went wrong. Please try again.' }),
        });
    };

    return (
        <>
            {isSuccess ? (
                <div className={style.successMsg}>
                    <p>Great! We have received your details. Our team will get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{
                            pattern: { value: VALIDATIONS.NAME, message: 'Please enter valid name' },
                            required: 'This field is required',
                        }}
                        render={({ field: { name, value, onChange }, fieldState: { error } }) => (
                            <div className="mb-24">
                                <Input
                                    id={name}
                                    placeHolder="Enter your name"
                                    value={value}
                                    onChange={onChange}
                                    error={error?.message}
                                    className={style.customInput}
                                />
                            </div>
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            pattern: { value: VALIDATIONS.EMAIL, message: 'Please enter valid email' },
                            required: 'This field is required',
                        }}
                        render={({ field: { name, value, onChange }, fieldState: { error } }) => (
                            <div className="mb-24">
                                <Input
                                    id={name}
                                    placeHolder="Enter your email"
                                    value={value}
                                    onChange={onChange}
                                    error={error?.message}
                                    className={style.customInput}
                                />
                            </div>
                        )}
                    />
                    <Controller
                        name="number"
                        control={control}
                        rules={{ pattern: { value: VALIDATIONS.PHONE, message: 'Please enter valid mobile number' } }}
                        render={({ field: { name, value, onChange }, fieldState: { error } }) => (
                            <div className="mb-24">
                                <Input
                                    id={name}
                                    placeHolder="Enter your mobile number"
                                    value={value}
                                    onChange={onChange}
                                    error={error?.message}
                                    className={style.customInput}
                                />
                            </div>
                        )}
                    />
                    <div className={style.buttons}>
                        <button
                            type="button"
                            className={style.secondaryBtn}
                            onClick={() => {
                                onSecondaryClick();
                                reset();
                            }}
                        >
                            Cancel
                        </button>
                        <button className={style.primaryBtn} type="submit">
                            {formState?.isSubmitting ? <Loader /> : 'Submit'}
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};

export default EnquiryForm;
