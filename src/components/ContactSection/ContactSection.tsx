import React, { useState, useEffect } from 'react';
import useSendEmail from '../../hooks/useSendEmail/useSendEmail';
import images from '../../utils/images';

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const { sendEmail, loading, error, success } = useSendEmail();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail(email, message);
    setEmail('');
    setMessage('');
    setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="w-full py-24 bg-emtechSecondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-8 text-left">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
              <img src={images.contacto} alt="Contact" className="w-20 h-20" />
            </div>
          </div>
          <h3 className="text-3xl font-bold">Get in touch with us!</h3>
        </div>
        {showAlert && success && (
          <div className="mb-4 p-4 text-green-800 bg-green-200 border border-green-600 rounded relative">
            {success}
            <button
              onClick={handleCloseAlert}
              className="absolute top-0 right-0 mt-2 mr-2 text-green-800"
            >
              &times;
            </button>
          </div>
        )}
        {showAlert && error && (
          <div className="mb-4 p-4 text-red-800 bg-red-200 border border-red-600 rounded relative">
            {error}
            <button
              onClick={handleCloseAlert}
              className="absolute top-0 right-0 mt-2 mr-2 text-red-800"
            >
              &times;
            </button>
          </div>
        )}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Your e-mail</label>
            <div className="flex items-center border-b border-white py-2">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Write here</label>
            <div className="flex items-center border-b border-white py-2">
              <input
                type="text"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
