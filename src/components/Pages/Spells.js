import React, { useEffect, useState } from 'react';

function Spells() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/spells')
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
        {spells.map((spells, index) => (
          <li key={index}>
            <h2>{spells.name}</h2>
            <div className="spell-details">
              <p>
                <strong>Description:</strong> {spells.description}
                </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Spells;