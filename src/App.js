import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import DatePicker from './components/DatePicker/DatePicker';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <DatePicker />
    </div>
  );
}

export default App;
