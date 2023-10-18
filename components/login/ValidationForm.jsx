import { useState, useRef, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

import Logo from '/public/images/logo.png';

import 'react-phone-number-input/style.css';

import { validateOtp } from '../../services/userService';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { setUser } from '../../store/registerSlice';

const ValidationForm = () => {
    const registration = useSelector((state) => state.registration);

    const router = useRouter();
    const dispatcher = useDispatch();

    // Function to handle paste event in the first input field
    const handlePaste = (e) => {
        const pasteData = e.clipboardData.getData('text/plain');
        const digits = pasteData.slice(0, 6).split('');

        formik.setValues({
            digit1: digits[0] || '',
            digit2: digits[1] || '',
            digit3: digits[2] || '',
            digit4: digits[3] || '',
            digit5: digits[4] || '',
            digit6: digits[5] || '',
        });
    };

    const initialValues = {
        digit1: registration.otp ? registration.otp[0] : '',
        digit2: registration.otp ? registration.otp[1] : '',
        digit3: registration.otp ? registration.otp[2] : '',
        digit4: registration.otp ? registration.otp[3] : '',
        digit5: registration.otp ? registration.otp[4] : '',
        digit6: registration.otp ? registration.otp[5] : '',
    };

    // Create refs for each input field
    const digit1Ref = useRef(null);
    const digit2Ref = useRef(null);
    const digit3Ref = useRef(null);
    const digit4Ref = useRef(null);
    const digit5Ref = useRef(null);
    const digit6Ref = useRef(null);
    const submitButtonRef = useRef(null);

    // Function to focus on the next input field
    const focusNextField = (currentField, nextFieldRef) => {
        if (currentField.length === 1) {
            nextFieldRef.current.focus();
        }
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        setSubmitting(false);

        const otp = `${values.digit1}${values.digit2}${values.digit3}${values.digit4}${values.digit5}${values.digit6}`;
        try {
            const response = await validateOtp({
                otp,
                accessToken: registration.accessToken,
                loginType: registration.loginType,
            });

            response?.data && dispatcher(setUser(response));
            router.push('/registar-profile');
            setSubmitting(false);
        } catch (error) {
            console.log(error);
        }
    };
    const validationSchema = Yup.object({
        digit1: Yup.string().required('Required'),
        digit2: Yup.string().required('Required'),
        digit3: Yup.string().required('Required'),
        digit4: Yup.string().required('Required'),
        digit5: Yup.string().required('Required'),
        digit6: Yup.string().required('Required'),
    });

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema,
    });

    // Set focus on the submit button when the last field is filled
    useEffect(() => {
        if (formik.values.digit6 !== '') {
            submitButtonRef.current.focus();
        }
    }, [formik.values.digit6]);

    useEffect(() => {
        if (!registration.phoneNumber) {
            router.push('/registration');
        }
    }, []);

    return (
        <section className="vh-100 log-reg-area register_sc signupform regi_21">
            <div className="register-area">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="text-center logoregister d-flex justify-content-center">
                            <Link href="/">
                                <Image src={Logo} className="logo" alt="logo" />
                            </Link>
                        </div>

                        <form onSubmit={formik.handleSubmit}>
                            <div className="otpModalArea">
                                <div className="text-center">
                                    <h2 className="optTitle">Enter your code</h2>
                                </div>

                                <div className="otpInputArea">
                                    <div className="info">
                                        <div className="mobileNoShow">{registration.phoneNumber}</div>
                                        <div className="resendButton">
                                            <a href="#">Resend</a>
                                        </div>
                                    </div>
                                    <div className="otpInputs">
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="digit1"
                                            name="digit1"
                                            maxLength={1}
                                            value={formik.values.digit1}
                                            onChange={(e) => {
                                                formik.handleChange(e);
                                                focusNextField(e.target.value, digit2Ref);
                                            }}
                                            ref={digit1Ref}
                                            onPaste={handlePaste} // Handle paste event
                                        />
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="digit2"
                                            name="digit2"
                                            maxLength={1}
                                            value={formik.values.digit2}
                                            onChange={(e) => {
                                                formik.handleChange(e);
                                                focusNextField(e.target.value, digit3Ref);
                                            }}
                                            ref={digit2Ref}
                                        />
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="digit3"
                                            name="digit3"
                                            maxLength={1}
                                            value={formik.values.digit3}
                                            onChange={(e) => {
                                                formik.handleChange(e);
                                                focusNextField(e.target.value, digit4Ref);
                                            }}
                                            ref={digit3Ref}
                                        />
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="digit4"
                                            name="digit4"
                                            maxLength={1}
                                            ref={digit4Ref}
                                            value={formik.values.digit4}
                                            onChange={(e) => {
                                                formik.handleChange(e);
                                                focusNextField(e.target.value, digit5Ref);
                                            }}
                                        />
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="digit5"
                                            name="digit5"
                                            maxLength={1}
                                            ref={digit5Ref}
                                            value={formik.values.digit5}
                                            onChange={(e) => {
                                                formik.handleChange(e);
                                                focusNextField(e.target.value, digit6Ref);
                                            }}
                                        />
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="digit6"
                                            name="digit6"
                                            maxLength={1}
                                            ref={digit6Ref}
                                            value={formik.values.digit6}
                                            onChange={formik.handleChange}
                                        />
                                    </div>
                                    <div className="updateInfoLink">
                                        <Link href="/registration">Update contact info</Link>
                                    </div>
                                    <div className="continueButton">
                                        <div className="pt-1 mb-4 d-grid gap-3">
                                            <button className="btn btn-blue btn-lg" type="submit" ref={submitButtonRef}>
                                                <span>Continue</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValidationForm;
