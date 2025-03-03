// frontend/src/components/DarkModeToggle.js

import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

function DarkModeToggle() {
const { darkMode, toggleDarkMode } = useTheme();

return (
    <button
    onClick={toggleDarkMode}
    className="p-2 rounded-full focus:outline-none"
    aria-label="Toggle Dark Mode"
    >
    {darkMode ? <FiSun className="text-yellow-400" size={20} /> : <FiMoon size={20} />}
    </button>
);
}

export default DarkModeToggle;