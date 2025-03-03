// frontend/src/components/GallerySlider.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function GallerySlider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { darkMode } = useTheme();

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className={`relative w-full h-96 overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
      <motion.img
        key={currentImageIndex}  // Key prop for smooth transitions
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="absolute w-full h-full object-cover"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      />

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-70 hover:opacity-100"
        onClick={prevImage}
        aria-label="Previous"
      >
        &lt;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-70 hover:opacity-100"
        onClick={nextImage}
        aria-label="Next"
      >
        &gt;
      </button>
    </div>
  );
}

export default GallerySlider;