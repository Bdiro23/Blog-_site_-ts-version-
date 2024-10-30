import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.css';
import Footer from '../Footer/Footer.jsx';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

interface loginFormValues {
    email: string;
    password: string;
}

export default function Login(): React.ReactElement {
    const loginValidationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const loginFormik = useFormik<loginFormValues>({
        initialValues: { email: '', password: '' },
        validationSchema: loginValidationSchema,
        onSubmit: (values: loginFormValues) => {
            console.log('Log In Form Data:', values);
            alert('Login Successful!');
            loginFormik.resetForm();
        },
    });

    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className="formsl" data-aos="fade-up">
                <div className="log" data-aos="fade-up">
                    <h2 data-aos="fade-down" className="title_login">{t('login.log.login')}</h2>
                    <form onSubmit={loginFormik.handleSubmit}>
                        <div className="field-wrap" data-aos="fade-up">
                            <label htmlFor="email">{t('login.log.adress')}<span className="req">*</span></label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={loginFormik.values.email}
                                onChange={loginFormik.handleChange}
                                onBlur={loginFormik.handleBlur}
                                aria-label="Email"
                            />
                            {loginFormik.touched.email && loginFormik.errors.email ? (
                                <div className="error">{loginFormik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className="field-wrap" data-aos="fade-up">
                            <label htmlFor="password">{t('login.log.pass')}<span className="req">*</span></label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={loginFormik.values.password}
                                onChange={loginFormik.handleChange}
                                onBlur={loginFormik.handleBlur}
                                aria-label="Password"
                            />
                            {loginFormik.touched.password && loginFormik.errors.password ? (
                                <div className="error">{loginFormik.errors.password}</div>
                            ) : null}
                        </div>

                        <p className="forgot" data-aos="fade-up">
                            <a href="javascript:void(0)">{t('login.log.forgot_password')} ?</a>
                        </p>

                        <button type="submit" className="button button-block" data-aos="zoom-in">
                            {t('login.log.identify')}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
