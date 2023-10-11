import React, { useEffect, useState } from 'react';
import '../Wizards/Wizard.css';

function Wizards() {
  const [wizards, setWizards] = useState([]);
 
  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setWizards(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1 id="h1"> Wizards</h1>
      <ul style={{listStyleType: 'none'}}>
        {wizards.map((wizard, index) => (
          <li key={index}>
            <div className="wizard-details">
            <h2>{wizard.name}</h2>
                <img src={wizard.image} alt={wizard.name} />
              <p>
                <strong>House:</strong> {wizard.house}
              </p>
              <p>
                <strong>Date of Birth:</strong> {wizard.dateOfBirth}
              </p>
              <p>
                <strong>Ancestry:</strong> {wizard.ancestry}
              </p>
              <p>
                <strong>Patronus:</strong> {wizard.patronus}
              </p>
                {wizard.wand && (
              <p>
                 <strong>Wand:</strong> {wizard.wand.wood}, {wizard.wand.core}, {wizard.wand.length}
              </p>
            )}
          </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wizards;