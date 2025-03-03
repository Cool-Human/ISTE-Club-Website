// frontend/src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function Hero() {
    const { darkMode } = useTheme();
  return (
    <motion.div
      className={`relative h-64 bg-cover bg-center flex items-center justify-center ${darkMode ? 'text-white' : 'text-gray-800'}`}
      style={{ backgroundImage: `url('/path/to/your/background.jpg')` }} // Replace with actual path
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <img src="/path/to/iste-logo.png" alt="ISTE Logo" className="h-20 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">ISTE NITK</h1>
        <p className="text-lg">Your Tagline Here</p>
      </div>
    </motion.div>
  );
}

export default Hero;