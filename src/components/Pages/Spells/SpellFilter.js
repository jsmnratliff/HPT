import React from 'react';
import './SpellFilter.css';

// SpellFilter component
function SpellFilter({ onFilterChange }) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className='filter'>
      <p>Filter Spells by First Letter:</p>
      {alphabet.map((letter) => (
        <button key={letter} className="alphabet-button" onClick={() => onFilterChange(letter)}>
           {letter}
        </button>
      ))}
    </div>
  );
}

export default SpellFilter;