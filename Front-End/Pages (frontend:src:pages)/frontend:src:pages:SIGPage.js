// frontend/src/pages/SIGPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSIG } from '../services/api';
import { useTheme } from '../context/ThemeContext';

function SIGPage() {
    const { name } = useParams(); // Get the SIG name from the URL
    const [sig, setSIG] = useState(null);
    const { darkMode } = useTheme();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSIG = async () => {
            try {
                const response = await getSIG(name);
                setSIG(response.data);
            } catch (error) {
                console.error("Error fetching SIG:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchSIG();
    }, [name]);

    if (loading) {
        return <div className={`container mx-auto p-8 ${darkMode?'text-white':''}`}>Loading...</div>;
    }
    if(error){
        return <div className={`container mx-auto p-8 ${darkMode?'text-white':''}`}>Error: {error.message}</div>
    }

    if (!sig) {
        return <div className={`container mx-auto p-8 ${darkMode ? 'text-white' : ''}`}>SIG not found.</div>;
    }

    return (
        <div className={`container mx-auto p-8 ${darkMode ? 'text-white' : ''}`}>
            <h1 className="text-3xl font-bold mb-4">{sig.name}</h1>
            {sig.image && (
                <img src={sig.image} alt={sig.name} className="w-full h-64 object-cover mb-4 rounded-lg" />

            )}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">About {sig.name}</h2>
                <p>{sig.long_description}</p>
            </section>

            {/* Add sections for Contributions, Projects, Events, and Workshops */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Contributions & Projects</h2>
                <p>
                    Details about ISTE's contributions and projects related to this SIG's field.  You can
                    list specific projects with descriptions, images, and links.
                </p>
                {/* Example Project List (Replace with actual data) */}

            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Events & Workshops</h2>
                <p>
                  Information on events and workshops conducted by this SIG. Include past events
                  and any upcoming events.
                </p>
                {/* Example Event List (Use EventCard component if appropriate) */}

            </section>
        </div>
    );
}

export default SIGPage;