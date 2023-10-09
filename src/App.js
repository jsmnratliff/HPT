import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';

const houseImages = {
  Gryffindor: 'url_to_gryffindor_image.jpg',
  Hufflepuff: 'url_to_hufflepuff_image.jpg',
  Ravenclaw: 'url_to_ravenclaw_image.jpg',
  Slytherin: 'url_to_slytherin_image.jpg',
};

function App() {
  const [selectedHouse, setSelectedHouse] = useState('');
  const [enteredName, setEnteredName] = useState('');

  const handleHouseSelect = (e) => {
    setSelectedHouse(e.target.value);
  };

  const handleNameInput = (e) => {
    setEnteredName(e.target.value);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <h1>O.W.L. Trivia: Prove Your Harry Potter Mastery</h1>
        
        <div>
          <label>Choose Your House:</label>
          <select value={selectedHouse} onChange={handleHouseSelect}>
            <option value="">Select a House</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>
        </div>

        <div>
          <label>Enter Your Name:</label>
          <input
            type="text"
            value={enteredName}
            onChange={handleNameInput}
            placeholder="Your Name"
          />
        </div>

        {selectedHouse && enteredName && (
          <div>
            <p>Welcome, {enteredName} of {selectedHouse}!</p>
            {/* Display the selected house image */}
            {houseImages[selectedHouse] && (
              <div>
                <img
                  src={houseImages[selectedHouse]}
                  alt={`${selectedHouse} House`}
                  width="100" // Adjust the size as needed
                  height="100"
                />
              </div>
            )}
          </div>
        )}

        {/* Your game content goes here... */}
      </div>
    </div>
  );
}

export default App;