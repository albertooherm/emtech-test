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
      'service_ppytz94', // ID de servicio de EmailJS
      'template_fk4wa3q', // ID de plantilla de EmailJS
      templateParams,
      'G8eJCHpTb59JUCGwE' // ID de usuario de EmailJS
    )
    .then((response) => {
      setLoading(false);
      setSuccess('Email enviado exitosamente!');
      console.log('Email enviado exitosamente!', response.status, response.text);
    })
    .catch((error) => {
      setLoading(false);
      setError('Error al enviar el email.');
      console.error('Error al enviar el email:', error);
    });
  };

  return { sendEmail, loading, error, success };
};

export default useSendEmail;
