import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/Pages/HomePage/HomePage';
import Spells from './components/Pages/Spells';
import Houses from './components/Pages/Houses/Houses';
import Wizards from './components/Pages/Wizards/Wizards';
import './App.css';

function App() {
  return (
    <Router> 
      <div>
        <NavBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/wizards" element={<Wizards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;