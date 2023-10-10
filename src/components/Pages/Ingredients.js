import React, { useEffect, useState } from 'react';

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/spells')
      .then((response) => response.json())
      .then((data) => {
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
            <div className="ingredient-details">
              <p><strong>Description:</strong> {ingredient.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;