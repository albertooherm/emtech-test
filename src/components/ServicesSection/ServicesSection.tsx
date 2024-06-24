import React, { useState, useEffect, useCallback } from 'react';
import images from '../../utils/images';
import { AnimatePresence, motion } from 'framer-motion';
import { services } from '../../utils/services/services';
import { Service } from '../../utils/types/Services/ServicesTypes';

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(window.innerWidth > 768 ? services[0] : null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [hoveredService, setHoveredService] = useState<Service | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768 && selectedService === null) {
        setSelectedService(services[0]);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedService]);

  const handleServiceClick = useCallback((service: Service) => {
    setSelectedService((prevSelectedService) => {
      if (prevSelectedService?.name === service.name && window.innerWidth > 768) {
        return service;
      }
      return prevSelectedService === service ? null : service;
    });
  }, []);

  const handleMouseEnter = (service: Service) => {
    if (!isMobile) {
      setHoveredService(service);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredService(null);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="bg-blue-600 flex-1 flex flex-col justify-center p-8 text-white">
        <h2 className="text-4xl font-bold mb-4">How do we do it?</h2>
        <p className="text-lg mb-8">
          At EmTech Institute, we offer a wide range of services designed to meet the diverse needs of today's businesses and individuals.
        </p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={listVariants}
          className="space-y-4"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.li
                whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                whileTap={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                className={`bg-white font-bold text-emtechSecondary rounded-lg shadow-lg p-4 flex justify-between items-center cursor-pointer transition-colors duration-100 ${
                  selectedService === service && isMobile ? 'selected' : ''
                }`}
                onClick={() => handleServiceClick(service)}
                onMouseEnter={() => handleMouseEnter(service)}
                onMouseLeave={handleMouseLeave}
                style={{ willChange: 'transform, opacity' }}
              >
                <span className="flex-1">{service.name}</span>
                <motion.div
                  initial={{ backgroundImage: `url(${images.flecha})` }}
                  animate={{ backgroundImage: selectedService === service && isMobile ? `url(${images.arrowdown})` : hoveredService === service ? `url(${images.arrow})` : `url(${images.flecha})` }}
                  transition={{ duration: 0.3 }}
                  className={`w-6 h-8 bg-no-repeat bg-center ${hoveredService === service ? 'bg-contain' : ''}`}
                />
              </motion.li>
              <AnimatePresence>
                {selectedService === service && isMobile && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="mt-4 text-sm text-white p-4 bg-blue-600 rounded-lg"
                  >
                    <p className="text-justify">{service.description}</p>
                    <div className="flex justify-center">
                      <a
                        href={service.link}
                        className="mt-4 bg-emtechThird text-white py-3 px-6 rounded"
                      >
                        Find out how
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.ul>
      </div>
      {!isMobile && (
        <div
          className="flex-1 relative bg-cover bg-center"
          style={{ backgroundImage: `url(${selectedService?.name === services[0].name ? images.background : images.background2})` }}
        >
          <div className="absolute inset-0 flex flex-col justify-center p-8 text-white bg-black bg-opacity-50">
            <AnimatePresence>
              <motion.div
                key={selectedService?.name}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="text-lg mt-20"
              >
                <div className="mb-12 h-1 bg-emtechBlue w-44"></div>
                <p className="text-justify">{selectedService?.description}</p>
                <a
                  href="https://emtech.digital/digital_review"
                  className="mt-12 inline-block bg-emtechBlue text-white py-3 px-12 rounded"
                >
                  Find out how
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
