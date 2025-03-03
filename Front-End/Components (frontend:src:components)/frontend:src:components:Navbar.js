 import React from 'react';
 import { Link } from 'react-router-dom';
 import { useTheme } from '../context/ThemeContext';
 import DarkModeToggle from './DarkModeToggle';


 function Navbar() {
     const { darkMode } = useTheme();

     return (
         <nav className={`p-4 shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
             <div className="container mx-auto flex justify-between items-center">
                 <Link to="/" className="text-xl font-bold">ISTE NITK</Link>
                 <div className="flex space-x-4">
                     <Link to="/about" className="hover:text-iste-blue">About</Link>
                     <Link to="/sigs" className="hover:text-iste-blue">SIGs</Link>
                     <Link to="/project-expo" className="hover:text-iste-blue">Project Expo</Link>
                     <Link to="/events" className="hover:text-iste-blue">Events</Link>
                     <Link to="/social-initiatives" className="hover:text-iste-blue">Social Initiatives</Link>
                     <Link to="/she" className="hover:text-iste-blue">SHE</Link>
                     <Link to="/blogs" className="hover:text-iste-blue">Blogs</Link>
                     <Link to="/the-team" className="hover:text-iste-blue">The Team</Link>
                     <Link to="/contact" className="hover:text-iste-blue">Contact Us</Link>
                     <DarkModeToggle />
                 </div>
             </div>
         </nav>
     );
 }

 export default Navbar;