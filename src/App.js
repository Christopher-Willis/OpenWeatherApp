import React from 'react';
import './App.css';
import Navbar from "./containers/topNavContainer"

function App(props) {
  let conditionalRender = ""
  if(props.current.cod === undefined){
    conditionalRender= 
    <p>
      Enter Zip Code and press Enter
    </p>
  }else if(props.current.cod !== 200){

  }
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {conditionalRender}
      </header>
    </div>
  );
}

export default App;
