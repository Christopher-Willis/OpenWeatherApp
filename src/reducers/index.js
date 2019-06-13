import { combineReducers } from 'redux'

function currentWeather(state={}, action){
  if(action.type === "ADD_CURRENTWEATHER"){
    return action.value
  }
  return state;
}
//storing the entire openweather object, components will pretify it   

function forecastWeather(state={}, action){
  if(action.type === "ADD_FORECASTWEATHER"){
    return action.value
  }
  return state;
}   
//storing the entire openweather object, components will pretify it   

function theme(state=0,action){
  if(action.type === "CHANGE_THEME"){
    return action.value
  }
  return state
}
//eventual theme object for stylized components

function zipcode(state="78704",action){
  if(action.type === "CHANGE_ZIPCODE"){
    return action.value
  }
  return state
}

const reducers = combineReducers({
  currentWeather,forecastWeather,theme,zipcode
})

export default reducers;