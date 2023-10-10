import React, { useEffect, useState } from 'react';

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://wizard-world-api.herokuapp.com/Ingredients')
      .then((response) => response.json())
      .then((data) => {
        // Update the ingredients state with the fetched data
        setIngredients(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Ingredients</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            <h2>{ingredient.name}</h2>
            <p>{ingredient.description}</p>
            {/* Add more ingredient details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;