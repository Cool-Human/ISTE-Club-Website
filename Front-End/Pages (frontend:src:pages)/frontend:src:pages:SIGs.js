// frontend/src/pages/SIGs.js

import React, { useState, useEffect } from 'react';
import { getSIGs } from '../services/api';
import SIGCard from '../components/SIGCard';
import { useTheme } from '../context/ThemeContext';

function SIGs() {
    const [sigs, setSigs] = useState([]);
    const { darkMode } = useTheme();

    useEffect(() => {
        const fetchSIGs = async () => {
            try {
                const response = await getSIGs();
                setSigs(response.data);
            } catch (error) {
                console.error("Error fetching SIGs:", error);
            }
        };

        fetchSIGs();
    }, []);

    return (
        <div className={`container mx-auto p-8 ${darkMode ? 'text-white' : ''}`}>
            <h1 className="text-3xl font-bold mb-4">Special Interest Groups (SIGs)</h1>
            <p className="mb-6">Explore our diverse range of SIGs, each dedicated to a specific area of engineering and technology.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sigs.map(sig => (
                    <SIGCard key={sig.id} sig={sig} />
                ))}
            </div>
        </div>
    );
}

export default SIGs;