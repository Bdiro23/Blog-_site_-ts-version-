import Navbar from "../Navbar/Navbar";
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from "../Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";
import './Contact.css';

interface ContactFormValues {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const Contact: React.FC = () => {
    const { t, i18n } = useTranslation();

    const contactValidationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
        message: Yup.string().required('Message is required'),
    });

    const contactFormik = useFormik<ContactFormValues>({
        initialValues: { name: '', email: '', phone: '', message: '' },
        validationSchema: contactValidationSchema,
        onSubmit: (values: ContactFormValues) => {
            console.log('Contact Form Data:', values);
            alert(t('contact_us.form.success_message'));
        },
    });

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const bgImage1: string = '/public/contact.jpg';
    const titre: string = i18n.language === 'en' ? 'Stay Connected' : 'Restons Connectés';
    const paragraphe: string = i18n.language === 'en' ? 'If you have any questions or suggestions, please do not hesitate to contact us. We are here to help!' : 'Pour toute question ou suggestion, n\'hésitez pas à nous contacter. Nous sommes là pour vous aider !';

    return (
        <>
            <Navbar backgroundImage={bgImage1} title={titre} paragraph={paragraphe} />
            <div className="contact-form-container" data-aos="fade-up">
                <h2 className="contact_title" data-aos="fade-down">{t('contact_us.title')}</h2>
                <form onSubmit={contactFormik.handleSubmit} className="contact-form" data-aos="fade-up">
                    <div className="field-wrap">
                        <label htmlFor="name">{t('contact_us.form.name')}<span className="req">*</span></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={contactFormik.values.name}
                            onChange={contactFormik.handleChange}
                        />
                        {contactFormik.touched.name && contactFormik.errors.name ? (
                            <div className="error">{contactFormik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className="field-wrap">
                        <label htmlFor="email">{t('contact_us.form.email')}<span className="req">*</span></label>
                        <input
                            type="email"
                            id="email" // added id attribute
                            name="email"
                            value={contactFormik.values.email}
                            onChange={contactFormik.handleChange}
                        />
                        {contactFormik.touched.email && contactFormik.errors.email ? (
                            <div className="error">{contactFormik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="field-wrap">
                        <label htmlFor="phone">{t('contact_us.form.phone')}<span className="req">*</span></label>
                        <input
                            type="text"
                            id="phone" // added id attribute
                            name="phone"
                            value={contactFormik.values.phone}
                            onChange={contactFormik.handleChange}
                        />
                        {contactFormik.touched.phone && contactFormik.errors.phone ? (
                            <div className="error">{contactFormik.errors.phone}</div>
                        ) : null}
                    </div>

                    <div className="field-wrap">
                        <label htmlFor="message">{t('contact_us.form.message')}<span className="req">*</span></label>
                        <textarea
                            id="message" // added id attribute
                            name="message"
                            rows={5}
                            value={contactFormik.values.message}
                            onChange={contactFormik.handleChange}
                        />
                        {contactFormik.touched.message && contactFormik.errors.message ? (
                            <div className="error">{contactFormik.errors.message}</div>
                        ) : null}
                    </div>

                    <button type="submit" className="button-b" data-aos="zoom-in"> {/* Fixed className */}
                        {t('contact_us.form.envoie')}
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
