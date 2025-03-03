// frontend/src/pages/Home.js
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import GallerySlider from '../components/GallerySlider';
import EventCard from '../components/EventCard';
import { getEvents } from '../services/api';
import CountdownTimer from '../components/CountdownTimer';
import SocialIcons from '../components/SocialIcons';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const { darkMode } = useTheme();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await getEvents();
                // Filter for upcoming events and limit to 3
                const upcoming = response.data.filter(event => new Date(event.date) >= new Date()).slice(0, 3);
                setUpcomingEvents(upcoming);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);

    // Replace with your actual image URLs for the gallery
    const galleryImages = [
        '/images/gallery-image-1.jpg',
        '/images/gallery-image-2.jpg',
        '/images/gallery-image-3.jpg',
        // ... more images
    ];

     const quickLinks = [
        { name: 'Social Initiatives', path: '/social-initiatives' },
        { name: 'SHE', path: '/she' },
        { name: 'SIGs', path: '/sigs' },
        { name: 'Events', path: '/events' },
        { name: 'Blogs', path: '/blogs' },
    ];

    return (
        <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
            <Hero />

            <section className="container mx-auto p-8">
                <motion.h2
                    className="text-3xl font-bold mb-4 text-center"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                 >
                    About ISTE NITK
                </motion.h2>
                <p className="text-center mb-8">
                    A brief introduction to ISTE NITK.  Your mission, vision, and values go here.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                    {/* Quick Links */}
                    {quickLinks.map((link) => (
                        <Link key={link.name} to={link.path} className={`p-4 border rounded-lg shadow-md text-center hover:bg-gray-100 dark:hover:bg-gray-700 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="my-12">
                    <h2 className="text-2xl font-bold mb-4 text-center">Upcoming Events</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {upcomingEvents.length > 0 ? (
                            upcomingEvents.map(event => <EventCard key={event.id} event={event} />)
                        ) : (
                            <p className="text-center">No upcoming events at the moment.</p>
                        )}
                    </div>
                </div>

                <div className="text-center my-12">
                   <h2 className="text-2xl font-bold mb-4">Project Expo 2025 Countdown</h2>
                   {/* Set the target date for Project Expo 2025 (March) */}
                    <CountdownTimer targetDate="2025-03-01T00:00:00" />
                </div>

                <div className="my-12">
                    <h2 className="text-2xl font-bold mb-4 text-center">Past Event Highlights</h2>
                    <GallerySlider images={galleryImages} />
                </div>
                <div className="text-center mt-8">
                    <SocialIcons />
                </div>
            </section>
        </div>
    );
}

export default Home;