// frontend/src/pages/TheTeam.js

import React from 'react';
import { useTheme } from '../context/ThemeContext';

function TheTeam() {
    const { darkMode } = useTheme();
    // Sample team data (Replace this with data fetched from an API)
    const team = [
        { name: "Professor X", role: "Faculty Advisor", image: "/images/team/professor-x.jpg" }, // Replace with actual paths
        { name: "John Doe", role: "Core Team - President", image: "/images/team/john-doe.jpg" },
        { name: "Jane Smith", role: "Core Team - Vice President", image: "/images/team/jane-smith.jpg" },
        { name: "SIG Lead 1", role: "Catalyst Lead", image: "/images/team/sig-lead-1.jpg" },
        // Add more team members
    ];

    // Sample alumni data (Optional)
    const alumni = [
        { name: "Alumnus 1", role: "Software Engineer at Google", image: "/images/alumni/alumnus-1.jpg" },
         { name: "Alumnus 2", role: "Founder, Startup XYZ", image: "/images/team/alumnus-2.jpg" },

        // ... more alumni
    ];


    return (
        <div className={`container mx-auto p-8 ${darkMode ? 'text-white' : ''}`}>
            <h1 className="text-3xl font-bold mb-4">The Team</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Faculty Advisor</h2>
                {/* Display Faculty Advisor details */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {team.filter(member => member.role.includes("Faculty Advisor")).map((member) => (
                    <div key={member.name} className={`p-4 border rounded-lg shadow-md ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                        <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg mb-2"/>
                        <h3 className='text-xl font-semibold'>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                  ))}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Core Team</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.filter(member => member.role.includes("Core Team")).map((member) => (
                      <div key={member.name} className={`p-4 border rounded-lg shadow-md ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                      <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg mb-2"/>
                      <h3 className='text-xl font-semibold'>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>

                    ))}
                </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">SIG Leads</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Display SIG Leads */}
                {team.filter(member => member.role.includes("Lead")).map((member) => (
                  <div key={member.name} className={`p-4 border rounded-lg shadow-md ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                     <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg mb-2"/>
                    <h3 className='text-xl font-semibold'>{member.name}</h3>
                      <p>{member.role}</p>
                  </div>
                ))}
              </div>
            </section>

             <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Members</h2>
                <p>A big thank you to all our dedicated ISTE members!</p>

                {/*Optionally display a list or grid of member names/photos*/}
            </section>



            <section>
                <h2 className="text-2xl font-semibold mb-2">Alumni Network (Optional)</h2>
                {/* Display Alumni */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {alumni.map((alum) => (
                      <div key={alum.name} className={`p-4 border rounded-lg shadow-md ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                      <img src={alum.image} alt={alum.name} className="w-full h-48 object-cover rounded-t-lg