// frontend/src/pages/Blogs.js

import React, { useState, useEffect } from 'react';
import { getBlogs } from '../services/api';
import BlogCard from '../components/BlogCard';
import { useTheme } from '../context/ThemeContext';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(''); // State for search
    const [selectedCategory, setSelectedCategory] = useState(''); // State for filter
    const { darkMode } = useTheme();
    useEffect(() => {
      const fetchBlogsData = async () => {
        try {
          const response = await getBlogs(selectedCategory); //Pass the category
          setBlogs(response.data);
        } catch (error) {
          console.error('Error fetching blogs:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchBlogsData();
    }, [selectedCategory]); // Refetch when selectedCategory changes

    // Filter blogs based on search query
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (blog.author_username && blog.author_username.toLowerCase().includes(searchQuery.toLowerCase())) // Check if author exists
    );



    return (
        <div className={`container mx-auto p-8 ${darkMode ? 'text-white' : ''}`}>
            <h1 className="text-3xl font-bold mb-4">Blogs</h1>

             <div className="mb-4 flex flex-col md:flex-row md:items-center gap-4">
                <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`p-2 border rounded w-full md:w-1/2 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white border-gray-300'}`}
          />

        <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`p-2 border rounded w-full md:w-1/2 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white border-gray-300'}`}
          >
            <option value="">All Categories</option>
            <option value="technical">Technical Blogs</option>
            <option value="creative">Creative Writing</option>
            <option value="event_report">Event Reports</option>
          </select>

             </div>

            <p className="mb-6">Read articles written by ISTE members on various topics.</p>

            {loading ? (
                <p>Loading blogs...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map(blog => (  // Use filteredBlogs
                    <BlogCard key={blog.id} blog={blog} />
                ))}
                </div>
            )}

              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-2">Contribute to the Blog</h2>
                <p>
                    Are you an ISTE member with a story to tell? Submit your blog post!
                </p>
            {/* Add a form for blog submission (Requires Authentication/Backend) */}
             </section>
        </div>
    );
}

export default Blogs;