import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/images/logo.png';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { setCountries } from '../../store/countrySlice';
import { getCities, getCountries } from '../../services/algoliaService';
import { setCities } from '../../store/citySlice';
import { createProfile } from '../../services/userService';
import { resetToInitial } from '../../store/registerSlice';
import useAuthActions from '../../hooks/useAuthActions';

const ProfileForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const { setUserAction } = useAuthActions();

    const countries = useSelector((state) => state.countries.countries);
    const cities = useSelector((state) => state.cities.cities);
    const registration = useSelector((state) => state.registration);

    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleSubmit = async (values, { setSubmitting }) => {
        const data = await createProfile({ ...values, accessToken: registration.accessToken });
        if (data.access_token) {
            dispatch(resetToInitial());
            setUserAction(data);
            router.push('/');
        }
        setSubmitting(false);
    };

    const initialValues = {
        firstName: registration?.user?.firstName || '',
        lastName: registration?.user?.lastName || '',
        email: registration?.user?.email || '',
        password: '',
        country: '',
        city: '',
        avatar: '',
        loginType: 0,
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email().required('Required'),
        password: Yup.string().required('Required'),
        country: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
    });

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema,
    });
    useEffect(() => {
        getCountries().then((countries) => dispatch(setCountries({ countries })));
        getCities().then((cities) => dispatch(setCities({ cities })));
    }, []);

    const handleChangeCountry = (event) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <section className="vh-100 log-reg-area register_sc regi_2 ">
            <div className="register-area">
                <div className="row justify-content-center pb-5">
                    <div className="col-lg-5">
                        <div className="text-center logoregister d-flex justify-content-center">
                            <Link href="/">
                                <Image src={Logo} className="logo" alt="logo" />
                            </Link>
                        </div>
                        <div className="signup-text text-center">
                            <h3>Sign up</h3>
                            <p>Fill in your details below and Sign up</p>
                        </div>
                        <div className="register-form-area-2">
                            <form className="register-form" onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-outline mb-3">
                                            <label className="form-label">First name</label>
                                            <input
                                                placeholder="First name"
                                                type="text"
                                                className="form-control form-control-lg"
                                                value={formik.values.firstName}
                                                name="firstName"
                                                onChange={formik.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-outline mb-3">
                                            <label className="form-label">Last name</label>
                                            <input
                                                placeholder="Last name"
                                                type="text"
                                                className="form-control form-control-lg"
                                                value={formik.values.lastName}
                                                onChange={formik.handleChange}
                                                name="lastName"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-outline mb-3">
                                            <label className="form-label">Gender</label>
                                            <select
                                                className="form-control form-control-lg lucky-select"
                                                value={formik.values.gender}
                                                onChange={formik.handleChang}
                                                name="gender"
                                            >
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-outline mb-3">
                                            <div className="form-outline mb-3">
                                                <label className="form-label">Date of Birth</label>
                                                <input
                                                    placeholder="dd / mm / yr"
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-outline mb-3">
                                            <label className="form-label">Country</label>
                                            <select
                                                id="country_drop"
                                                className="form-control form-control-lg lucky-select"
                                                value={formik.values.country}
                                                onChange={(e) => {
                                                    formik.handleChange(e);
                                                    handleChangeCountry(e); // Call handleChangeCountry to update cities
                                                }}
                                                name="country"
                                            >
                                                <option value=""></option>
                                                {countries.map((country) => (
                                                    <option value={country.id} key={country.id}>
                                                        {country.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-outline mb-3">
                                            <label className="form-label">City</label>
                                            <select
                                                name="city"
                                                className="form-control form-control-lg lucky-select"
                                                value={formik.values.city}
                                                onChange={formik.handleChange}
                                            >
                                                <option value=""></option>
                                                {selectedCountry &&
                                                    cities
                                                        .filter((city) => city.path.includes(selectedCountry))
                                                        .map((city) => (
                                                            <option value={city.id} key={city.id}>
                                                                {city.name}
                                                            </option>
                                                        ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-outline mb-3">
                                            <div className="form-outline mb-3">
                                                <label className="form-label">Email</label>
                                                <input
                                                    placeholder=""
                                                    type="email"
                                                    className="form-control form-control-lg"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    name="email"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-outline mb-3">
                                            <div className="form-outline mb-3">
                                                <label className="form-label">Password</label>
                                                <input
                                                    placeholder=""
                                                    type="password"
                                                    id="password"
                                                    className="form-control form-control-lg"
                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                    name="password"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="mba-text">
                                            <p>
                                                By signing up to the Design studio of Databox.mu platform you understand
                                                and agree with our{' '}
                                                <a href="#" className="mba_link">
                                                    Terms of Service and Privacy Policy
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <button className="btn btn-info btn-lg regi-btn" type="submit">
                                            Continue
                                        </button>
                                    </div>

                                    <div className="value_text">
                                        <p>
                                            Already Haven An Account? <Link href="/login"> Login Now</Link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileForm;
