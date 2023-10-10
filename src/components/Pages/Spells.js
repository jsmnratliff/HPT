import React, { useEffect, useState } from 'react';

function Spells() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://wizard-world-api.herokuapp.com/Spells')
      .then((response) => response.json())
      .then((data) => {
        // Update the spells state with the fetched data
        setSpells(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Spells</h1>
      <ul>
        {spells.map((spell) => (
          <li key={spell.id}>
            <h2>{spell.name}</h2>
            <p>{spell.description}</p>
            {/* Add more spell details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Spells;