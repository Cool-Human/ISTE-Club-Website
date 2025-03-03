// frontend/src/pages/ProjectExpo.js
import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/api';
import { useTheme } from '../context/ThemeContext';

function ProjectExpo() {
    const [projects, setProjects] = useState([]);
  const { darkMode } = useTheme();
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await getProjects();
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className={`container mx-auto p-8 ${darkMode ? 'text-white' : ''}`}>
            <h1 className="text-3xl font-bold mb-4">Project Expo</h1>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">About Project Expo</h2>
                <p>
                    Project Expo is an annual event held in March where 3rd-year students present their projects.
                    It's a showcase of innovation and a platform for students to demonstrate their technical skills.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Current & Past Projects</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {projects.map(project => (
                    <div key={project.id} className={`p-4 border rounded-lg shadow-md ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                        {project.image && (
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
                        )}
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="mb-2 line-clamp-3">{project.description}</p>
                        <p className="text-sm">Year: {project.year}</p>
                    </div>
                ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Registration Details for Juniors</h2>
                <p>
                    Information for junior students interested in participating in Project Expo.  Include
                    deadlines, guidelines, and contact information.  Consider adding a form (you'll need
                    to create a backend endpoint for this).
                </p>
            </section>
        </div>
    );
}

export default ProjectExpo;