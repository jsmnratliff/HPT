import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
      <div>
        <h1>Harry Potter Homepage</h1>
        <p>Welcome to the Harry Potter world!</p>
        <Link to="/App">Open</Link>
      </div>
    );
  }
  
  export default HomePage;