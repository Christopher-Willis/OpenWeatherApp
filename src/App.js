import React from 'react';
import './App.css';
import Navbar from "./containers/topNavContainer"

class App extends React.Component {

  

  render() {


  // will change to react router if I have time, conditional rendering is sub optimal
  // given time I would like to have routes with /(zipcode) properly send
  // fetch requests front side. My current button pushing version of the site doesn't
  // do that. This is easier, though, and not in the spec (muhahaha)
  let conditionalRender = ""
  if(this.props.current.cod === undefined){
    conditionalRender= 
    <p>
      Enter Zip Code and press Enter
    </p>
  }else if(this.props.current.cod !== 200){
    conditionalRender = 
    <p>
      Invalid Zip Code, try again
    </p>
  }else{
    conditionalRender=
    <p>
      {this.props.current.weather[0].description}
    </p>
  }


  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      {conditionalRender}
    </div>
  );

  }

  
}

export default App;
