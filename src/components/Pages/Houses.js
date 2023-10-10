import React, { useEffect, useState } from 'react';

function Houses() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://wizard-world-api.herokuapp.com/Houses')
      .then((response) => response.json())
      .then((data) => {
        // Update the houses state with the fetched data
        setHouses(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Houses</h1>
      <ul>
        {houses.map((house) => (
          <li key={house.id}>
            <h2>{house.name}</h2>
            <p>{house.description}</p>
            {/* Add more house details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Houses;