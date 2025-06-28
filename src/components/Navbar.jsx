import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex justify-center gap-6 p-4 bg-violet-800 text-white font-semibold shadow-md">
    <Link to="/">Home</Link>
    <Link to="/recent">Recent</Link>
  </nav>
);

export default Navbar;
