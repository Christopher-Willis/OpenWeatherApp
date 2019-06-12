import { combineReducers } from 'redux'

function currentWeather(state=[], action){
  if(action.type === "ADD_CURRENTWEATHER"){
    return [...state,...action.value]
  }
  return state;
}   

function forecastWeather(state=[], action){
  if(action.type === "ADD_FORECASTWEATHER"){
    return [...state,...action.value]
  }
  return state;
}   

function theme(state="",action){
  if(action.type === "CHANGE_ELEMENTISOTOPE"){
    return action.value
  }
  return state
}

const reducers = combineReducers({
  currentWeather,forecastWeather,theme
})

export default reducers;