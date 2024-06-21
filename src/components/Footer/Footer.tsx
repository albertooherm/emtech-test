import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import images from '../../utils/images';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 text-center md:text-left">
            <img src={images.svgemtech} alt="Logo" className="h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Let's connect</h3>
            <p className="mb-4">Follow us!</p>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.instagram.com/emtech.inst/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/emtech.inst" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/school/emtechinstitute/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@emtechinstitute" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
            <address className="not-italic">
              EmTech Institute, 23180 Ravensbury Ave.<br />
              Los Angeles Hills, California 94024, United States.
            </address>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="mb-2 hover:underline">Home</a>
            <a href="#" className="mb-2 hover:underline">How do we do it?</a>
            <a href="#" className="mb-2 hover:underline">Why choose EmTech?</a>
            <a href="#" className="mb-2 hover:underline">Contact us</a>
          </div>
        </div>
        <div className="border-t border-blue-500 mt-8 pt-4 text-center text-sm">
          Emerging Technologies Institute | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
