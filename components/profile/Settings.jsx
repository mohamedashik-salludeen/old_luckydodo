import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLeft } from 'react-icons/ai';
import { RiPencilFill } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';
import { FiDownload, FiX } from 'react-icons/fi';
import Avter from '/public/images/avter.png';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import CurrentUserService from '../../services/currentUserService';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Settings = () => {
    const router = useRouter();
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    if (!isAuthenticated) {
        router.push('/login');
    }

    const initialValues = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    };
    Yup;

    const validationSchema = Yup.object({
        oldPassword: Yup.string().required('Old password is required'),
        newPassword: Yup.string()
            .required('New password is required')
            .min(10, 'New password must be at least 10 characters'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'New password and confirm password must match')
            .required('Confirm password is required'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            CurrentUserService.updatePassword;

            const data = await CurrentUserService.updatePassword({
                currentPassword: values.oldPassword,
                newPassword: values.newPassword,
            });
            formik.resetForm();
        } catch (error) {
            setErrors({ form: 'An error occurred while updating the password.' });
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema,
    });

    return (
        <section className="profile_area">
            <div className="profile_settings">
                <div className="container">
                    <div className="backButton">
                        <Link href="/my-profile">
                            <i>
                                <AiOutlineLeft />
                            </i>
                            Account
                        </Link>
                    </div>
                    <div className="settings_area">
                        <div className="editProfileBlock">
                            <div className="avaterImageArea">
                                <div className="avaterImage">
                                    <Image
                                        src={user?.avatar || '/images/avatar/2.png'}
                                        className="avter"
                                        alt="avter"
                                        width={55}
                                        height={55}
                                    />
                                    <Link href="/my-profile/avatar" className="avaterEdit">
                                        <i>
                                            <RiPencilFill />
                                        </i>
                                    </Link>
                                </div>
                            </div>
                            <div className="edit_form">
                                <form action="">
                                    <div className="singleForm">
                                        <div className="formLabel">
                                            <label className="">Email</label>
                                        </div>
                                        <div className="formInput">
                                            <div className="inp">
                                                <input value={user?.email} type="email" className="form-control" />
                                            </div>
                                            <button type="button">
                                                <i>
                                                    <TiTick />
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="singleForm">
                                        <div className="formLabel">
                                            <label className="">Phone Number</label>
                                        </div>
                                        <div className="formInput">
                                            <div className="inp">
                                                <input className="form-control" />
                                            </div>
                                            <button type="button">
                                                <i>
                                                    <TiTick />
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="singleForm">
                                        <div className="formLabel mobHidden">
                                            <label className=""></label>
                                        </div>
                                        <div className="">
                                            {/* <button type="button" className="btn btn-save">
                                                Save
                                            </button> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="changePassword">
                                <div className="heading">Change password</div>

                                <form onSubmit={formik.handleSubmit}>
                                    {/* <div className="fieldText">Password</div> */}
                                    {Object.keys(formik.errors).length > 0 && (
                                        <div className="list-group list-group-item-danger mb-3">
                                            <ul>
                                                {Object.values(formik.errors).map((error, index) => (
                                                    <li key={index} className="list-group-item">
                                                        <small>{error}</small>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <input
                                        placeholder="Old password"
                                        type="password"
                                        className="form-control"
                                        value={formik.values.oldPassword}
                                        name="oldPassword"
                                        onChange={formik.handleChange}
                                    />
                                    <input
                                        placeholder="New password"
                                        type="password"
                                        className="form-control"
                                        value={formik.values.newPassword}
                                        name="newPassword"
                                        onChange={formik.handleChange}
                                    />
                                    <input
                                        placeholder="Confirm password"
                                        type="password"
                                        className="form-control"
                                        value={formik.values.confirmPassword}
                                        name="confirmPassword"
                                        onChange={formik.handleChange}
                                    />
                                    <button type="submit" className="btn btn-save">
                                        Save
                                    </button>
                                </form>
                            </div>
                            {/* <div className="privacySettings">
                                <div className="heading">Privacy Settings</div>

                                <div className="fieldText">Personal Data</div>
                                <a className="privecyButton" href="">
                                    {' '}
                                    <i className="down">
                                        <FiDownload />
                                    </i>{' '}
                                    Download
                                </a>

                                <div className="fieldText">Delete Account</div>
                                <a className="privecyButton" href="">
                                    {' '}
                                    <i>
                                        <FiX />
                                    </i>{' '}
                                    Submit request
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Settings;
