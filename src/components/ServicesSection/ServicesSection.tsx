import React, { useState, useEffect, useCallback } from 'react';
import images from '../../utils/images';
import { AnimatePresence, motion } from 'framer-motion';

interface Service {
  name: string;
  description: string;
  link: string;
}

const services: Service[] = [
  { name: 'Digital talent review', description: 'Ensuring your talent evolves simultaneously is critical in a rapidly changing technological landscape. With our Digital Talent Review, power your digital transformation by understanding your current digital skills, forecasting talent needs, and strategizing your talent roadmap.', link: 'https://emtech.digital/digital_review' },
  { name: 'Training academies', description: 'EmTech Institute caters to professionals in corporations needing professional development in different technology areas. Our academies are designed to keep pace with the rapid evolution of technology, offering a cutting-edge learning experience.', link: 'https://emtech.digital/digital_review' },
  { name: 'Centers of excellence', description: 'While technology provides the necessary infrastructure and tools, we offer specialized expertise and strategic guidance to ensure successful implementation, thus maximizing return on investment and positive business impact.', link: 'https://emtech.digital/digital_review' },
  { name: 'Talent acquisition', description: 'We power technology talent acquisition by blending deep understanding, strategic sourcing, and holistic evaluation; we tailor our services to meet the unique needs of each client, ensuring a perfect fit between the talent and the corporate culture.', link: 'https://emtech.digital/digital_review' },
  { name: 'Talent ecosystems', description: 'EmTech Institute works with governments, foundations, and universities to empower underserved populations with crucial technology skills, enabling them to access rewarding careers in the tech sector and contribute meaningfully to the competitiveness of their communities.', link: 'https://emtech.digital/digital_review' },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(window.innerWidth > 768 ? services[0] : null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

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

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="bg-blue-600 flex-1 flex flex-col justify-center p-8 text-white">
        <h2 className="text-4xl font-bold mb-4">How do we do it?</h2>
        <p className="text-lg mb-8">
          At EmTech Institute, we offer a wide range of services designed to meet the diverse needs of today's businesses and individuals.
        </p>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={listVariants}
          className="space-y-4"
        >
          {services.map((service, index) => (
            <motion.div key={index}>
              <motion.li
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                whileTap={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                className={`bg-white font-bold text-emtechSecondary rounded-lg shadow-lg p-4 flex justify-between items-center cursor-pointer transition-colors duration-100 ${
                  selectedService === service && isMobile ? 'selected' : ''
                }`}
                onClick={() => handleServiceClick(service)}
                style={{ willChange: 'transform, opacity' }}
              >
                <span className="flex-1">{service.name}</span>
                <motion.div
                  initial={{ backgroundImage: `url(${images.flecha})` }}
                  whileHover={{ backgroundImage: `url(${images.arrow})`, backgroundSize: 'contain' }}
                  whileTap={{ backgroundImage: `url(${images.arrow})`, backgroundSize: 'contain' }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 bg-no-repeat bg-center"
                />
              </motion.li>
              {selectedService === service && isMobile && (
                <div className="mt-4 text-sm text-white p-4 bg-blue-600 rounded-lg transition-all duration-300 ease-in-out">
                  <p className="text-justify">{service.description}</p>
                  <div className="flex justify-center">
                    <a
                      href={service.link}
                      className="mt-4 bg-emtechThird text-white py-3 px-6 rounded"
                    >
                      Find out how
                    </a>
                  </div>
                </div>
              )}
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
                className="text-lg mb-4"
              >
                <div className="mb-12 h-1 bg-emtechBlue w-16"></div>
                <p className="text-justify">{selectedService?.description}</p>
                <a
                  href="https://emtech.digital/digital_review"
                  className="mt-24 inline-block bg-emtechBlue text-white py-2 px-4 rounded-lg"
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
