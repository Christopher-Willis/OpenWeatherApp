import React from 'react';
import './App.css';
import Navbar from "./containers/topNavContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <p>
          Enter Zip Code and press Enter
        </p>
      </header>
    </div>
  );
}

export default App;
