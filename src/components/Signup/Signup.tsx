import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from '../Footer/Footer.jsx';
import './Signup.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


interface SignupFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Signup(): React.ReactElement {
    // Schéma de validation Yup
    const signupValidationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), ''], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    // Initialisation de Formik
    const signupFormik = useFormik<SignupFormValues>({
        initialValues: { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' },
        validationSchema: signupValidationSchema,
        onSubmit: (values: SignupFormValues) => {
            console.log('Sign Up Form Data:', values);
            alert('Signup Successful!');
            signupFormik.resetForm();
        },
    });

    // Initialisation des animations AOS
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const { t } = useTranslation();

    return (
        <>
            <div className="for" data-aos="fade-up">
                <div className="formslog" data-aos="fade-up">
                    <h2 data-aos="fade-down" className="title_signup">{t('signup.sign.title')}</h2>
                    <form onSubmit={signupFormik.handleSubmit}>
                        <div className="field-wrap" data-aos="fade-up">
                            <label>{t('signup.sign.Fname')}<span className="req">*</span></label>
                            <input
                                type="text"
                                name="firstName"
                                value={signupFormik.values.firstName}
                                onChange={signupFormik.handleChange}
                            />
                            {signupFormik.touched.firstName && signupFormik.errors.firstName && (
                                <div className="error">{signupFormik.errors.firstName}</div>
                            )}
                        </div>

                        <div className="field-wrap" data-aos="fade-up">
                            <label>{t('signup.sign.Lname')}<span className="req">*</span></label>
                            <input
                                type="text"
                                name="lastName"
                                value={signupFormik.values.lastName}
                                onChange={signupFormik.handleChange}
                            />
                            {signupFormik.touched.lastName && signupFormik.errors.lastName && (
                                <div className="error">{signupFormik.errors.lastName}</div>
                            )}
                        </div>

                        <div className="field-wrap" data-aos="fade-up">
                            <label>{t('signup.sign.Email')}<span className="req">*</span></label>
                            <input
                                type="email"
                                name="email"
                                value={signupFormik.values.email}
                                onChange={signupFormik.handleChange}
                            />
                            {signupFormik.touched.email && signupFormik.errors.email && (
                                <div className="error">{signupFormik.errors.email}</div>
                            )}
                        </div>

                        <div className="field-wrap" data-aos="fade-up">
                            <label>{t('signup.sign.pass')}<span className="req">*</span></label>
                            <input
                                type="password"
                                name="password"
                                value={signupFormik.values.password}
                                onChange={signupFormik.handleChange}
                            />
                            {signupFormik.touched.password && signupFormik.errors.password && (
                                <div className="error">{signupFormik.errors.password}</div>
                            )}
                        </div>

                        <div className="field-wrap" data-aos="fade-up">
                            <label>{t('signup.sign.confpass')}<span className="req">*</span></label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={signupFormik.values.confirmPassword}
                                onChange={signupFormik.handleChange}
                            />
                            {signupFormik.touched.confirmPassword && signupFormik.errors.confirmPassword && (
                                <div className="error">{signupFormik.errors.confirmPassword}</div>
                            )}
                        </div>

                        <button type="submit" className="button button-block" data-aos="zoom-in">
                            {t('signup.sign.start')}
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}
