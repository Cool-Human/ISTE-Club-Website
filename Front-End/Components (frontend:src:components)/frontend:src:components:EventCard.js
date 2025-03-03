import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

function EventCard({ event }) {
    const { darkMode } = useTheme();
return (
    <div className={`p-4 border rounded-lg shadow-md my-4 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="mb-2">{event.description}</p>
        <p className="text-sm">Date: {new Date(event.date).toLocaleString()}</p>
        <p className="text-sm">Location: {event.location}</p>
        {event.registration_link && (
            <a href={event.registration_link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-iste-blue text-white rounded hover:bg-blue-600 mt-2">
            Register
            </a>
        )}
    </div>
);
}

export default EventCard;