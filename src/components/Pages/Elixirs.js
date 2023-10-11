import React, { useEffect, useState } from 'react';

function Elixirs() {
  const [elixirs, setElixirs] = useState([]);

  useEffect(() => {
    // Fetch elixirs data from the API when the component mounts
    fetch('https://wizard-world-api.herokuapp.com/Elixirs')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
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
            <p><strong>Effects:</strong> {elixir.effect}</p>
            <p><strong>Side Effects:</strong> {elixir.sideEffects || 'None'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Elixirs;