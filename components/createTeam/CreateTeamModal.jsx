import Avter from '/public/images/avter.png';
import Linkedin from '/public/images/linkedin.png';
import Twitter from '/public/images/twitter.png';
import Image from 'next/image';
import { RiFileCopyLine, RiPencilFill } from 'react-icons/ri';
import { AiOutlineLeft } from 'react-icons/ai';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState, useRef } from 'react';
import TeamService from '../../services/teamService';
const CreateTeamModal = () => {
    const backToHomeRef = useRef();

    const [additionalEmails, setAdditionalEmails] = useState([]);

    const initialValues = {
        teamName: '',
        sharingLink: '',
        invites: [{ email: '' }],
    };

    const validationSchema = Yup.object().shape({
        teamName: Yup.string().required('Team Name is required'),
        sharingLink: Yup.string(),
        invites: Yup.array().of(
            Yup.object().shape({
                email: Yup.string().email('Invalid email address'),
            }),
        ),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            const invites = additionalEmails.map((email) => ({ email }));
            values.invites = [...values.invites, ...invites];

            try {
                // Call  TeamService to create the team
                const response = await TeamService.createTeam(values);
                console.log('Team created:', response);

                // Reset the form
                formik.setValues(initialValues);
                setAdditionalEmails([]);

                // Close the modal
                // Trigger a click event on the back-to-home element
                if (backToHomeRef.current) {
                    backToHomeRef.current.click();
                }
            } catch (error) {
                console.error('Error creating team:', error);
            } finally {
                setSubmitting(false);
            }
        },
    });

    const handleAddEmail = () => {
        setAdditionalEmails([...additionalEmails, '']);
        formik.setFieldValue('invites', [...formik.values.invites, { email: '' }]);
    };

    const handleEmailChange = (index, value) => {
        const updatedEmails = [...formik.values.invites];
        updatedEmails[index].email = value;
        formik.setFieldValue('invites', updatedEmails);
    };

    return (
        <div className="transperentModal">
            <div className="modal fade" id="createTeamModal" aria-labelledby="createTeamModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="team-bg-area">
                            <div
                                className="back-to-home"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                ref={backToHomeRef}
                            >
                                <span>
                                    {' '}
                                    <i>
                                        <AiOutlineLeft />
                                    </i>{' '}
                                    Back to homepage
                                </span>
                            </div>
                            <div className="title">Create a Team, Play together</div>
                            <div className="row">
                                <div className="col-lg-4 teamFormContent">
                                    <div className="form-area">
                                        {/* <div className="avter_option_ara">
                                            <div className="choose-avater">
                                                <div className="avaterImage">
                                                    <Image src={Avter} className="avter" alt="avter" />
                                                    <button type="button" className="avaterEdit">
                                                        <i>
                                                            <RiPencilFill />
                                                        </i>
                                                    </button>
                                                </div>
                                                <p>Choose Avatar</p>
                                            </div>
                                            <div className="social-icon avter_option">
                                                <a href="#">
                                                    <Image src={Twitter} className="twitter" alt="twitter" />
                                                </a>
                                                <a href="#">
                                                    <Image src={Linkedin} className="linkedin" alt="linkedin" />
                                                </a>
                                            </div>
                                        </div> */}

                                        <div className="choose-form-input">
                                            <form onSubmit={formik.handleSubmit}>
                                                <div className="input-group-item">
                                                    <label>Team Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Name"
                                                        name="teamName"
                                                        className={`form-control choose ${
                                                            formik.touched.teamName && formik.errors.teamName
                                                                ? 'is-invalid'
                                                                : ''
                                                        }`}
                                                        value={formik.values.teamName}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.touched.teamName && formik.errors.teamName ? (
                                                        <div className="invalid-feedback">{formik.errors.teamName}</div>
                                                    ) : null}
                                                </div>

                                                {/* <div className="input-group-item">
                                                    <label>Sharing link</label>
                                                    <div className="sharingLink">
                                                        <input
                                                            type="text"
                                                            placeholder="HYGGFJF"
                                                            id="sharingLink"
                                                            name="sharingLink"
                                                            className={`form-control choose link ${
                                                                formik.touched.sharingLink && formik.errors.sharingLink
                                                                    ? 'is-invalid'
                                                                    : ''
                                                            }`}
                                                            value={formik.values.sharingLink}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                        />
                                                        {formik.touched.sharingLink && formik.errors.sharingLink ? (
                                                            <div className="invalid-feedback">
                                                                {formik.errors.sharingLink}
                                                            </div>
                                                        ) : null}
                                                        <button type="button" className="btn btn-success link_copy">
                                                            {' '}
                                                            <i>
                                                                <RiFileCopyLine />
                                                            </i>{' '}
                                                            Copy
                                                        </button>
                                                    </div>
                                                </div> */}

                                                {/* <div className="social-icon">
                                                    <a href="#">
                                                        <Image src={Twitter} className="twitter" alt="twitter" />
                                                    </a>
                                                    <a href="#">
                                                        <Image src={Linkedin} className="linkedin" alt="linkedin" />
                                                    </a>
                                                </div> */}

                                                <div className="input-group-item btm">
                                                    <label>Invite Via Email</label>
                                                    {formik.values.invites.map((invite, index) => (
                                                        <div key={index} className="mb-4">
                                                            <input
                                                                type="email"
                                                                id={`invites[${index}].email`}
                                                                name={`invites[${index}].email`}
                                                                placeholder="Email Address"
                                                                className={`form-control ${
                                                                    formik.touched.invites &&
                                                                    formik.touched.invites[index] &&
                                                                    formik.errors.invites &&
                                                                    formik.errors.invites[index]
                                                                        ? 'is-invalid'
                                                                        : ''
                                                                }`}
                                                                value={invite.email}
                                                                onChange={(e) =>
                                                                    handleEmailChange(index, e.target.value)
                                                                }
                                                                onBlur={formik.handleBlur}
                                                            />
                                                            {formik.touched.invites &&
                                                            formik.touched.invites[index] &&
                                                            formik.errors.invites &&
                                                            formik.errors.invites[index] ? (
                                                                <div className="invalid-feedback">
                                                                    {formik.errors.invites[index].email}
                                                                </div>
                                                            ) : null}
                                                        </div>
                                                    ))}

                                                    <button
                                                        type="button"
                                                        className="anotherEmail"
                                                        onClick={handleAddEmail}
                                                    >
                                                        Add another email{' '}
                                                    </button>
                                                </div>
                                                <div className="button-invite">
                                                    <button type="submit" className="btn btn-success invite">
                                                        Invite
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTeamModal;
