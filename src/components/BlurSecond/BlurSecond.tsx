import React from 'react';
import { motion } from 'framer-motion';

const BlurSecond: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative flex flex-col justify-center items-center py-28 px-4 sm:px-8 md:px-16 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-[-300px] right-[-100px] w-[350px] h-[350px] bg-gradient-to-br from-blue-600 to-blue-500 opacity-30 blur-[50px] rounded-full"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="md:flex md:justify-between md:items-center mb-24">
          <motion.div
            className="mb-8 md:mb-0 md:w-1/3 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-emtechBlue">
              At EmTech Institute,
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
            <h3 className="text-2xl md:text-4xl text-emtechBlue">
              We master the tools and skills for your organization to thrive in the digital world.
            </h3>
          </motion.div>
        </div>
        <div className="md:flex md:justify-between md:items-start mt-12">
          <div className="md:w-1/3"></div>
          <motion.div
            className="md:w-2/3 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-base md:text-lg text-gray-800 mb-6">
              We empower organizations through a comprehensive suite of services designed to align your business, talent, and technology strategies, ensuring you are future-ready in a rapidly evolving digital world.
            </p>
            <p className="text-base md:text-lg text-gray-800 mt-8">
              <b className="text-emtechBlue">We specialize in serving large and mid-sized corporations</b>, encompassing sectors from technology and finance to retail and logistics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlurSecond;
