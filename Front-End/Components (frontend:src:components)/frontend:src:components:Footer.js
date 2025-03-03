// frontend/src/components/Footer.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`py-4 text-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'}`}>
      Made with love by ISTE Fam ❤️
    </footer>
  );
}

export default Footer;