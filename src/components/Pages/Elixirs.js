import React, { useEffect, useState } from 'react';

function Elixirs() {
  const [elixirs, setElixirs] = useState([]);

  useEffect(() => {
    fetch('https://potterdb.com/potions?q=')
      .then((response) => response.json())
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
  {elixirs.map((elixir, index) => (
    <li key={index}>
      <h2>{elixir.name}</h2>
      <div className="elixir-details">
        <p>
            <strong>Name:</strong> {elixir.name}
        </p>
        <p>
            <strong>Description:</strong> {elixir.description}
        </p>
        <p>
            <strong>Effects:</strong> {elixir.effects}
        </p>
        <p>
            <strong>Side Effects:</strong> {elixir.side_effects}
        </p>
        <p>
            <strong>Ingredients:</strong> {elixir.ingredients}
        </p>
        <p>
            <strong>Difficulty:</strong> {elixir.difficulty}
        </p>
      </div>
    </li>
  ))}
</ul>
    </div>
  );
}

export default Elixirs;