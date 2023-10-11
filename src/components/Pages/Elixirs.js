import React, { useEffect, useState } from 'react';

function Elixirs() {
  const [elixirs, setElixirs] = useState([]);

  useEffect(() => {
    fetch('https://wizard-world-api.herokuapp.com/Elixirs')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data:', data); // Log data to the console
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