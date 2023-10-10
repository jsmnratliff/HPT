import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Spells from './components/Pages/Spells';
import Elixirs from './components/Pages/Elixirs';
import Houses from './components/Pages/Houses';
import Ingredients from './components/Pages/Ingredients';
import Wizards from './components/Pages/Wizards';

function App() {
  return (
    <Router> 
      <div>
        <NavBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/elixirs" element={<Elixirs />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/wizards" element={<Wizards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;