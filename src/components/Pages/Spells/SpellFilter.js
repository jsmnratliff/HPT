import React from 'react';
import './SpellFilter.css';

// SpellFilter component
function SpellFilter({ onFilterChange }) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter((letter) => !['J', 'K', 'Q', 'V', 'X', 'Y', 'Z'].includes(letter));

  return (
    <div className='filter'>
      <div className="alphabet-buttons-container">
      {alphabet.map((letter) => (
        <button key={letter} className="alphabet-button" onClick={() => onFilterChange(letter)}>
           {letter}
        </button>
      ))}
      </div>
    </div>
  );
}

export default SpellFilter;