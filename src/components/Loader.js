import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import logo from '../assets/3salaz-logo.png'; // Update the path to your logo

const Loader = ({ onLoadComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 0,
      transition: { duration: 1, delay: 1 },
    }).then(onLoadComplete);
  }, [controls, onLoadComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={controls}
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
    >
      <motion.img
        src={logo}
        alt="Loading..."
        className="w-32 h-32"
        animate={{ rotate: [0, 360] }}
        transition={{
          loop: Infinity,
          ease: "linear",
          duration: 1.2,
        }}
      />
    </motion.div>
  );
};

export default Loader;
