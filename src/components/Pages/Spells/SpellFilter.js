import React from 'react';

// SpellFilter component
function SpellFilter({ onFilterChange }) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className='filter'>
      <p>Filter Spells by First Letter:</p>
      {alphabet.map((letter) => (
        <button key={letter} onClick={() => onFilterChange(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
}

export default SpellFilter;