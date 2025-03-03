// frontend/src/components/BlogCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function BlogCard({ blog }) {
const { darkMode } = useTheme();

return (
    <div className={`p-4 border rounded-lg shadow-md my-4 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white border-gray-200'}`}>
      {blog.image && (
        <img src={blog.image} alt={blog.title} className='w-full h-48 object-cover mb-4 rounded-t-lg' />
      )}
    <h3 className="text-xl font-semibold mb-2"><Link to={`/blogs/${blog.id}`} className="hover:underline">{blog.title}</Link></h3>
    <p className="mb-2 line-clamp-3">{blog.content}</p>
    <p className="text-sm">Author: {blog.author_username || 'Anonymous'}</p>
    <p className="text-sm">Published: {new Date(blog.publication_date).toLocaleDateString()}</p>
    <p className="text-sm">Category: {blog.category}</p>
    </div>
);
}

export default BlogCard;