import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link> {/* Link to the HomePage */}
        </li>
        <li>
          <Link to="/spells">Spells</Link>
        </li>
        <li>
          <Link to="/elixirs">Elixirs</Link>
        </li>
        <li>
          <Link to="/houses">Houses</Link>
        </li>
        <li>
          <Link to="/ingredients">Ingredients</Link>
        </li>
        <li>
          <Link to="/wizards">Wizards</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;