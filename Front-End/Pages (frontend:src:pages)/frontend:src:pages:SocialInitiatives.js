// frontend/src/pages/SocialInitiatives.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';
function SocialInitiatives() {
  const { darkMode } = useTheme();
  return (
    <div className={`container mx-auto p-8 ${darkMode ? 'text-white' : ''}`}>
      <h1 className="text-3xl font-bold mb-4">Social Initiatives</h1>
      <p className="mb-8">
        ISTE NITK is committed to giving back to society. Learn about our past initiatives
        and how you can get involved.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Past Initiatives</h2>
        <ul>
          <li className="mb-4">
            <strong>Old Age Home Drive:</strong> Description of the event, dates, and impact.
            {/* Add images if available */}
          </li>
          <li className="mb-4">
            <strong>Engineering Fair Fest for Schools:</strong> Details about the fest,
            participating schools, and activities.
          </li>
          <li>
            <strong>Raksha Bandhan Event for Security Guards:</strong> Description of the event and its significance.
          </li>
          {/* Add more initiatives */}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Volunteer Sign-Up</h2>
        <p>
          Interested in volunteering for our social initiatives?  Fill out the form below!
        </p>
        {/* Add a form (you'll need to create a backend endpoint to handle form submissions) */}
        <form className="mt-4">
          {/* Form fields: Name, Email, Year of Study, Contact Number, Area of Interest */}
            <div className="mb-4">
               <label htmlFor="name" className="block text-sm font-medium">Name</label>
               <input type='text' id="name" className={`mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${darkMode?'bg-gray-700 text-white border-gray-600':''}`}/>
            </div>

          {/* Add other form fields similarly */}

          <button
            type="submit"
            className="px-4 py-2 bg-iste-blue text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
}

export default SocialInitiatives;