//frontend/src/components/SIGCard.js

import React from 'react'
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function SIGCard({sig}) {
    const { darkMode } = useTheme();
    return (
        <div className={`p-4 border rounded-lg shadow-md my-4 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white border-gray-200'}`}>
            {sig.image && (
                <img src={sig.image} alt={sig.name} className='w-full h-48 object-cover mb-4 rounded-t-lg' />
            )}
            <Link to={`/sigs/${sig.name.toLowerCase()}`} className="text-xl font-semibold hover:underline">
                {sig.name}
            </Link>
            <p>{sig.short_description}</p>
        </div>
    )
}

export default SIGCard