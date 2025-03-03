// frontend/src/components/SocialIcons.js
import React from 'react';
import { FaInstagram, FaLinkedin, FaWordpress, FaYoutube } from 'react-icons/fa';

function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <a href="https://www.instagram.com/istenitk/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram size={24} />
      </a>
      <a href="https://in.linkedin.com/company/istenitk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={24} />
      </a>
      <a href="https://istenitk.wordpress.com/" target="_blank" rel="noopener noreferrer" aria-label="WordPress">
        <FaWordpress size={24} />
      </a>
      <a href="https://www.youtube.com/@ISTENITK" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <FaYoutube size={24} />
      </a>
    </div>
  );
}

export default SocialIcons;
