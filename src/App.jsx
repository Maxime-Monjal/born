import React from 'react';
import './App.css';
import Home from './components/Home';
import Sexe from './components/Sexe';
import Year from './components/Year';
import Occurence from './components/Occurence';
import ChildList from './components/ChildList';

function App() {
  return (
    <div className="App">
      <Home />
      <Sexe />
      <Year />
      <Occurence />
      <ChildList />
    </div>
  );
}

export default App;
