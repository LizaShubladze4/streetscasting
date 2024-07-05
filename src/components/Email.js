import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Email.css'

export const ContactUs = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n007ets', 'template_udjlnia', form.current, {
        publicKey: 'KKP1IaWABMptNjG2S',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setShowSuccessMessage(true);
          resetForm();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const resetForm = () => {
    form.current.reset();
  };

  return (
    <div className="formContainer">
      {!showSuccessMessage ? (
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder='Name' required />
          <input type='number' name='user_age' placeholder='Age' required />
          <input type='text' name='user_socials' placeholder='Socials' required />
          <input type="email" name="user_email" placeholder='E-mail' required />
          <input type='tel' name='user_phone' placeholder='Phone' required />
          <input type='text' name='user_photo' placeholder='WeTransfer Link (Photos)' required />
          <button type="submit">Send</button>
        </form>
      ) : (
        <p className="successMessage">Message sent successfully!</p>
      )}
    </div>
  );
};