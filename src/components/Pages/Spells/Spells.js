import React, { useState, useEffect } from 'react';
import SpellFilter from './SpellFilter'; 
import './Spells.css';

function Spells() {
  const [spells, setSpells] = useState([]);
  const [filteredSpells, setFilteredSpells] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('');

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/spells')
      .then((response) => response.json())
      .then((data) => {
        setSpells(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedLetter) {
      const filtered = spells.filter((spell) =>
        spell.name.startsWith(selectedLetter)
      );
      setFilteredSpells(filtered);
    } else {
      setFilteredSpells(spells);
    }
  }, [selectedLetter, spells]);

  const handleFilterChange = (letter) => {
    setSelectedLetter(letter);
  };

  return (
    <div>
      <h1>Spells</h1>
      <SpellFilter onFilterChange={handleFilterChange} />
      <ul className='spells-container'> 
        {filteredSpells.map((spell, index) => (
          <li key={index}>
            <h2>{spell.name}</h2>
            <div className="spell-details">
              <p>
                <strong>Description:</strong> {spell.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Spells;