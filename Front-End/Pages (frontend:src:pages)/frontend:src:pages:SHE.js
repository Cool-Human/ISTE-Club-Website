// frontend/src/pages/SHE.js

import React from 'react';
import { useTheme } from '../context/ThemeContext';

function SHE() {
    const { darkMode } = useTheme();
  return (
    <div className={`container mx-auto p-8 ${darkMode ? 'text-white' : ''}`}>
      <h1 className="text-3xl font-bold mb-4">Society for Her Empowerment (SHE)</h1>
      <p className="mb-8">
        ISTE NITK's initiative to support women in STEM and leadership roles. We aim to
        create an inclusive and empowering environment for women engineers.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Initiatives</h2>
        <ul>
          <li className="mb-4">
            <strong>Talks:</strong> We organize talks by successful women engineers and leaders
            to inspire and motivate our members.
          </li>
          <li className="mb-4">
            <strong>Mentorship Programs:</strong> We connect students with experienced women
            engineers for guidance and support.
          </li>
          <li>
            <strong>Workshops:</strong> We conduct workshops on technical skills, leadership
            development, and career advancement.
          </li>
          {/* Add more initiatives */}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Success Stories</h2>
        <p>
          Share stories of women engineers who have been part of ISTE NITK and have achieved
          significant success in their careers. Include profiles and testimonials.
        </p>
      </section>
    </div>
  );
}

export default SHE;