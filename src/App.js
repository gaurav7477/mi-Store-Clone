import React from 'react';
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Slider from './components/Slider';
import data from './data/data.json'
import Offers from './components/Offers';

const App = () => {
  // console.log("start",Alldata.banner.start)
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start = {data.banner.start} />
      <Offers offer={data.offer} />
    </Router>
  );
}

export default App;