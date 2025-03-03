// frontend/src/pages/BlogPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { getBlog , deleteBlog} from '../services/api';
import { useTheme } from '../context/ThemeContext';

function BlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state
  const { darkMode } = useTheme();
    const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getBlog(id);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError(error); // Set error state
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

   const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            try {
                await deleteBlog(id);
                navigate('/blogs'); // Redirect to the blogs list
            } catch (error) {
                console.error("Error deleting blog:", error);
                alert("Failed to delete the blog.");
            }
        }
    };

  if (loading) {
    return <div className={`container mx-auto p-8 ${darkMode ? 'text-white' : ''}`}>Loading...</div>;
  }
    if (error) {
    return <div className={`container mx-auto p-8 ${darkMode ? 'text-white' : ''}`}>Error: {error.message} </div>;
  }
  if (!blog) {
    return <div className={`container mx-auto p-8 ${darkMode ? 'text-white' : ''}`}>Blog not found.</div>;
  }

  return (
    <div className={`container mx-auto p-8 ${darkMode ? 'text-white' : ''}`}>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      {blog.image && (
        <img src={blog.image} alt={blog.title} className='w-full h-96 object-cover mb-6 rounded-lg' />
      )}
      <p className="text-sm mb-2">
        Author: {blog.author_username || 'Anonymous'} | Published: {new Date(blog.publication_date).toLocaleDateString()} | Category: {blog.category}
      </p>
      <div className="prose prose-lg max-w-full" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        {/* Example Edit/Delete buttons (Requires Authentication) */}
      {/*Conditionally render based on user role*/}
        {
            true &&
                (<div className="mt-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2">Edit</button>
                <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                </div>)
        }
    </div>
  );
}

export default BlogPage;