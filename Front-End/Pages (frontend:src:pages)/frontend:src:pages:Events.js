// frontend/src/pages/Events.js

import React, { useState, useEffect } from 'react';
import { getEvents } from '../services/api';
import EventCard from '../components/EventCard';
import { useTheme } from '../context/ThemeContext';

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

    const categorizeEvents = (events) => {
        const categorized = {
          technical: [],
          talks: [],
          workshops: [],
        };

        events.forEach((event) => {

          if (event.category === 'technical') {
            categorized.technical.push(event);
          } else if (event.category === 'talk') {
            categorized.talks.push(event);
          } else {
            categorized.workshops.push(event); // Default to workshops if no category
          }
        });
        return categorized;
      };
    const categorizedEvents = categorizeEvents(events);

  return (
    <div className={`container mx-auto p-8 ${darkMode ? 'text-white' : ''}`}>
      <h1 className="text-3xl font-bold mb-4">Events & Workshops</h1>
      <p className="mb-8">
        Browse our calendar of past and upcoming events. Register for upcoming events using
        the provided links.
      </p>

      {/* Add a basic calendar view here (consider using a library like FullCalendar) */}

        {loading ? (
            <p>Loading events...</p>
        ) : (
            <>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Technical Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorizedEvents.technical.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
                {categorizedEvents.technical.length === 0 && <p>No technical events found.</p>}
            </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Talks</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorizedEvents.talks.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
           {categorizedEvents.talks.length === 0 && <p>No talks found.</p>}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorizedEvents.workshops.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
            {categorizedEvents.workshops.length === 0 && <p>No workshops found.</p>}
        </div>
      </section>
         </>
      )}
    </div>
  );
}

export default Events;