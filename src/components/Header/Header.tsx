import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import images from '../../utils/images';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    closeMenu();
  };

  const linkClasses = (link: string) =>
    link === activeLink || link === 'Home' ? 'text-emtechBlue font-bold' : 'text-gray-600 hover:text-gray-800 font-medium';

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.reload();
              }}
            >
              <img
                src={images.logo}
                alt="Emtech Institute"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
          <a href="#" className={linkClasses('Home')} onClick={() => handleLinkClick('Home')}>
              Home
            </a>
            <span className="text-emtechBlue">|</span>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-600 hover:text-gray-800 font-medium focus:outline-none flex items-center"
              >
                How do we do it?
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-600" />
                </motion.div>
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                  >
                    <div className="py-1">
                    <a href="https://emtech.digital/digital_review" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>
                        Digital Talent Review
                      </a>
                      <a href="https://emtech.digital/training_academies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>
                        Training Academies
                      </a>
                      <a href="https://emtech.digital/centers_excellence" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>
                        Centers of Excellence
                      </a>
                      <a href="https://emtech.digital/talent_acquisition" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>
                        Talent Acquisition
                      </a>
                      <a href="https://emtech.digital/talent_acquisition" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>
                        Talent Ecosystems
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <span className="text-emtechBlue">|</span>
            <a href="#" className={linkClasses('Why choose EmTech?')} onClick={() => handleLinkClick('Why choose EmTech?')}>
              Why choose EmTech?
            </a>
            <span className="text-emtechBlue">|</span>
            <a href="#" className={linkClasses('Events')} onClick={() => handleLinkClick('Events')}>
              Events
            </a>
            <span className="text-emtechBlue">|</span>
            <a href="#" className={linkClasses('Blog')} onClick={() => handleLinkClick('Blog')}>
              Blog
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden md:hidden"
        >
          <a href="#" className="block text-emtechBlue hover:text-blue-800 font-medium py-2" onClick={closeMenu}>
            Home
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="block text-gray-600 hover:text-gray-800 font-medium py-2 focus:outline-none flex items-center"
            >
              How do we do it?
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-600" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1">
                    <a href="https://emtech.digital/digital_review" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>
                      Digital Talent Review
                    </a>
                    <a href="https://emtech.digital/training_academies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>
                      Training Academies
                    </a>
                    <a href="https://emtech.digital/centers_excellence" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>
                      Centers of Excellence
                    </a>
                    <a href="https://emtech.digital/talent_acquisition" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>
                      Talent Acquisition
                    </a>
                    <a href="https://emtech.digital/talent_acquisition" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>
                      Talent Ecosystems
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#" className="block text-gray-600 hover:text-gray-800 font-medium py-2" onClick={closeMenu}>
            Why choose EmTech?
          </a>
          <a href="#" className="block text-gray-600 hover:text-gray-800 font-medium py-2" onClick={closeMenu}>
            Events
          </a>
          <a href="#" className="block text-gray-600 hover:text-gray-800 font-medium py-2" onClick={closeMenu}>
            Blog
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
