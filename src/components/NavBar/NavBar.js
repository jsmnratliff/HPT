import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
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
  );
};

export default NavBar;