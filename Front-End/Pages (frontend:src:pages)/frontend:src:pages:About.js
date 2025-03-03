// frontend/src/pages/About.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

function About() {
    const { darkMode } = useTheme();
  return (
    <div className={`container mx-auto p-8 ${darkMode ? 'text-white' : ''}`}>
      <h1 className="text-3xl font-bold mb-4">About ISTE NITK</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our History</h2>
        <p>
          Detailed history of ISTE NITK, its founding, and major milestones.  Include
          information about ISTE as a national organization as well.
        </p>
        {/* Example Timeline (You can use a library for a more interactive timeline) */}
        <div className="timeline mt-4">
          <div className="timeline-item">
            <div className="timeline-year">1990</div>
            <div className="timeline-content">ISTE NITK Chapter was founded.</div>
          </div>
           <div className="timeline-item">
            <div className="timeline-year">2005</div>
            <div className="timeline-content">Hosted the first major technical event.</div>
          </div>
            <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">This website you're looking at was built!</div>
           </div>

          {/* Add more timeline items */}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p>
          ISTE NITK's mission statement. Focus on student development, technical excellence,
          and contribution to society.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Faculty Advisor</h2>
        <p>
          Name: Dr. Professor Name<br />
          Department: Department Name<br />
          Email: professor.email@nitk.edu.in<br />  {/* Replace with actual details */}
          Office: Room Number, Building Name
        </p>
      </section>
    </div>
  );
}

export default About;