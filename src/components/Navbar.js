import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Navbar = () => (
  <header className="bg-white text-primary p-4 h-8p flex items-center justify-center">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">3salaz.dev</Link>
      </h1>
      <Nav />
    </div>
  </header>
);

export default Navbar;