import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/spells">Spells</Link>
          </li>
          <li>
            <Link to="/houses">Houses</Link>
          </li>
          <li>
            <Link to="/wizards">Wizards</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;