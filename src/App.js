import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App" id="App">
      <Navbar />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
