import React from 'react';
import './App.css';
import Navbar from "./containers/topNavContainer"
import CurrentWeather from "./containers/currentWeatherContainer"
import ForecastWeather from "./containers/forecastWeatherContainer"

class App extends React.Component {

  

  render() {

  const theme = {
    backgroundColor: this.props.theme===0? "#ffffff" : "#000000",
    color:           this.props.theme===0? "#000000" : "#ffffff "
  }


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
    <div className="weather-container" >
      <CurrentWeather/>
      <div className="forecast-container">
        <ForecastWeather/>
      </div>
    </div>
  }
  // this is ugly, I hate it, I want to switch to routes as soon as I can! The night is young!
  // also, this is a horrible way to do error messages, would be super better if 
  // I was logging error messages more generally then displaying the message. 
  // I know how to do that, but might not have time. Id likely just pop it in an array
  // then propagate some messages on the form via some kinda of map/error component

  return (
    <div className="App" style={{backgroundColor: theme.backgroundColor,color:theme.color}}>
      <header className="App-header">
        <Navbar/>
      </header>
      {conditionalRender}
    </div>
  );

  }

  
}

export default App;
