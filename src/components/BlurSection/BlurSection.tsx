import React from 'react';
import { motion } from 'framer-motion';

const BlurSection: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative flex flex-col justify-center items-center py-12 sm:py-24 px-4 sm:px-8 md:px-16 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-[-300px] left-[-150px] w-[350px] h-[350px] bg-gradient-to-br from-blue-600 to-blue-500 opacity-30 blur-[50px] rounded-full"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="md:flex md:justify-between md:items-center mb-12 sm:mb-24">
          <motion.div
            className="mb-4 sm:mb-8 md:mb-0 md:w-1/3 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-emtechBlue">
              Why choose EmTech?
            </h1>
          </motion.div>
          <motion.div
            className="md:w-2/3 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl text-emtechBlue">
              Your strategic partner for technological excellence and business innovation.
            </h3>
          </motion.div>
        </div>
        <div className="mt-4 sm:mt-8 md:flex md:justify-between md:items-start">
          <div className="md:w-1/3"></div>
          <motion.div
            className="md:w-2/3 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-base md:text-lg text-gray-800">
              Choosing EmTech Institute means selecting a partner committed to <b className="text-emtechBlue">excellence, fostering innovation, continuous learning, integrity, and collaboration.</b>
            </p>
            <p className="text-base md:text-lg text-gray-800 mt-2 sm:mt-4">
              <b>Our unique approach</b> is grounded in strategic foresight and an in-depth understanding of the digital arena. We are your partners in navigating the complexities of digital transformation and talent management.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlurSection;
