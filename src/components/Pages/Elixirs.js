import React, { useEffect, useState } from 'react';

function Elixirs() {
  const [elixirs, setElixirs] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://wizard-world-api.herokuapp.com/Elixirs')
      .then((response) => response.json())
      .then((data) => {
        // Update the elixirs state with the fetched data
        setElixirs(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Elixirs</h1>
      <ul>
        {elixirs.map((elixir) => (
          <li key={elixir.id}>
            <h2>{elixir.name}</h2>
            <p>{elixir.description}</p>
            {/* Add more elixir details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Elixirs;