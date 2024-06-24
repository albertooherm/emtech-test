import { useState } from 'react';
import emailjs from 'emailjs-com';

const useSendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const sendEmail = (email: string, message: string) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    const templateParams = {
      user_email: email,
      message: message,
    };

    emailjs.send(
      'service_ppytz94',
      'template_fk4wa3q',
      templateParams,
      'G8eJCHpTb59JUCGwE'
    )
    .then((response) => {
      setLoading(false);
      setSuccess('Email sent successfully!');
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((error) => {
      setLoading(false);
      setError('Error sending email.');
      console.error('Error sending email:', error);
    });
  };

  return { sendEmail, loading, error, success };
};

export default useSendEmail;
