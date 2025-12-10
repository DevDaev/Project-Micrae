import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const formRef = useRef(null);
    const [status, setStatus] = useState(''); // 'sending' | 'success' | 'error'

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.sendForm(
                process.env.SERVICE_ID,
                process.env.TEMPLATE_ID,
                formRef.current,
                { publicKey: process.env.PUBLIC_KEY }
            );

            setStatus('success');
            formRef.current.reset();

            // Clear success message after 3 seconds
            setTimeout(() => setStatus(''), 3000);
        } catch (error) {
            console.error('Email send failed', error);
            setStatus('error');
        }
    };

    const isSending = status === 'sending';

    return (
        <section className={styles.contactSection}>
            <h2>Contact Us</h2>

            <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Name</label>
                    <input type="text" name="user_name" required />
                </div>

                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" name="user_email" required />
                </div>

                <div className={styles.formGroup}>
                    <label>Message</label>
                    <textarea name="message" required />
                </div>

                <button type="submit" disabled={isSending}>
                    {isSending ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                    <p className={styles.success}>Message sent successfully!</p>
                )}
                {status === 'error' && (
                    <p className={styles.error}>Failed to send message. Please try again.</p>
                )}
            </form>
        </section>
    );
};

export default ContactForm;
