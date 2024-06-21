import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  boldText: string;
  regularText: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ boldText, regularText }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex justify-center items-center h-96 sm:h-[32rem] md:h-[32rem] bg-white text-center">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="text-2xl sm:text-4xl md:text-4xl"
      >
        <span className="font-bold text-emtechBlue">{boldText}</span> 
        <span className="font-normal bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x">
          {regularText}
        </span>
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
