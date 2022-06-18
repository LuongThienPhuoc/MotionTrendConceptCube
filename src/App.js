import React from 'react';
import './App.css';
import AppBar from './components/Home/AppBar';
import ScrollBar from './components/Home/ScrollBar';
import Filter from './components/Home/Filter';
import Home from './components/Home/Home'
function App() {
  return (
    <div className="Home">
      <AppBar></AppBar>
      <ScrollBar></ScrollBar>
      <Filter></Filter>
      <Home></Home>
    </div>
  );
}

export default App;
