import Image from 'next/image';
import { AiFillApple } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';
import Logo from '/public/images/logo.png';
import GoogleIcon from '/public/images/icon/google.png';
import LoginBg from '/public/images/login/loginBg.jpg';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { login } from '../../services/userService';
import { useDispatch } from 'react-redux';
import { useFeatures } from '../../hooks/useFeatures';
import useAuthActions from '../../hooks/useAuthActions';

const LoginForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { setUserAction } = useAuthActions();
    const features = useFeatures();

    const buttons = [
        { key: 'google', text: <Image className="googleIcon mr-2" alt="google" src={GoogleIcon} /> },
        {
            key: 'facebook',
            text: (
                <i>
                    <FaFacebookF />
                </i>
            ),
        },
        {
            key: 'apple',
            text: (
                <i>
                    <AiFillApple />
                </i>
            ),
        },
    ];

    const initialValues = {
        email: '',
        password: '',
    };
    const validationSchema = Yup.object({
        email: Yup.string().email().required('Required'),
        password: Yup.string().required('Required'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const data = await login({ username: values.email, password: values.password, grant_type: 'password' });
            setUserAction(data);
            router.push('/');
        } catch (error) {
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
        <section className="vh-100 log-reg-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black">
                        <div className="px-5 ms-xl-4">
                            <div className="logo">
                                <Link href="/">
                                    <Image src={Logo} className="logo mt-3" alt="logo" />
                                </Link>
                            </div>
                        </div>

                        <div className="left_area d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 mt-xl-n5 justify-content-md-center">
                            <form className="login_form" onSubmit={formik.handleSubmit}>
                                <div className="welcome_text v1">
                                    <h3 className="login1_heading">Welcome</h3>
                                    <p>Please enter your contact details to connect.</p>
                                </div>

                                <div className="form-outline mb-3">
                                    <label className="form-label">Email address</label>
                                    <input
                                        placeholder="name@compagny.com"
                                        type="email"
                                        className="form-control form-control-lg"
                                        value={formik.values.email}
                                        name="email"
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="form-outline mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        placeholder="*********"
                                        type="password"
                                        value={formik.values.password}
                                        name="password"
                                        onChange={formik.handleChange}
                                        className="form-control form-control-lg"
                                    />
                                </div>
                                {/* 
                                <div className="remember_forget_area d-flex justify-content-between">
                                    <div className="remember">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                            />
                                            <label className="form-check-label">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="forget_link">
                                        <Link href="/">Forgot password?</Link>
                                    </div>
                                </div> */}

                                <div className="pt-1 mb-4 d-grid gap-2">
                                    <button className="btn btn-info btn-lg" type="submit">
                                        Login
                                    </button>

                                    <div className="login_bottom_social">
                                        {buttons.map(
                                            (button) =>
                                                features[button.key] && (
                                                    <Link
                                                        key={button.key}
                                                        className={`btn btn-light btn-lg d-flex align-items-center justify-content-center ${button.key}`}
                                                        href={`/social-auth/${button.key}`}
                                                    >
                                                        {button.text}
                                                    </Link>
                                                ),
                                        )}
                                        {/*                                         
                                        <Link
                                            className="btn btn-light btn-lg d-flex align-items-center justify-content-center facebook"
                                            href="/login-with"
                                        >
                                            <i>
                                                <FaFacebookF />
                                            </i>
                                        </Link>

                                        <Link
                                            className="btn btn-light btn-lg d-flex align-items-center justify-content-center apple"
                                            href="/login-with"
                                        >
                                            <i>
                                                <AiFillApple />
                                            </i>
                                        </Link>

                                        <Link
                                            className="btn btn-light btn-lg d-flex align-items-center justify-content-center"
                                            href="/login-with"
                                        >
                                            <Image className="googleIcon mr-2" alt="google" src={GoogleIcon} />
                                        </Link> */}
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className="bottom_text">
                                        Don't have an account?{' '}
                                        <Link href="/registration" className="link-info">
                                            Sign up here
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <Image src={LoginBg} className="login-bg-light w-100 vh-100" alt="login bg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
