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
        const upcoming = response.data.filter(event => event.is_upcoming).slice(0, 3); // Show only 3
        setUpcomingEvents(upcoming);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const galleryImages = [
    '/path/to/image1.jpg', // Replace with your image URLs
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
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
        <h2 className="text-3xl font-bold mb-4">About ISTE NITK</h2>
        <p className