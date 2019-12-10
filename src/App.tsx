import React from 'react';
import Helloworld from './Helloworld';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Helloworld who={'mike'} i={10}/>
      </header>
     </div>
  );
}

export default App;
