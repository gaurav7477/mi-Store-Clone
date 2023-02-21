import React from 'react';
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
    </Router>
  );
}

export default App;