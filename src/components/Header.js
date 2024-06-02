// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold"><Link to="/">My Portfolio</Link></h1>
    <nav>
      <Link to="/about" className="mr-4">About</Link>
      <Link to="/projects" className="mr-4">Projects</Link>
      <Link to="/services" className="mr-4">Services</Link>
      <Link to="/contact" className="mr-4">Contact</Link>
      <Link to="/login" className="mr-4">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  </header>
);

export default Header;
