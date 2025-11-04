import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Question Bank</h2>
      <div className="nav-links">
        <Link to="/">All Questions</Link>
        <Link to="/create">Create</Link>
      </div>
    </nav>
  );
};

export default Navbar;
