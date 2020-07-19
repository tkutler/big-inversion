import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={ 45} hairColor="Brown" /> 
      <PersonCard firstName="Jane" lastName="Smith" age={ 90 } hairColor="Brown" /> 
      <PersonCard firstName="Joe" lastName="Gordon" age={ 23 } hairColor="Red" /> 
      <PersonCard firstName="Maria" lastName="Smith" age={ 40 } hairColor="Brown" /> 
    </div>
  );
}

export default App;
