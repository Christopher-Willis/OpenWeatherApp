export function changeZip(zip) {
  return {
    type:"CHANGE_ZIPCODE",
    value:zip
  }
}

export function addCurrentWeather(weather) {
  return {
    type:"ADD_CURRENTWEATHER",
    value:weather
  }
}

export function addForecastWeather(weather) {
  return {
    type:"ADD_FORECASTWEATHER",
    value:weather
  }
}

export function toggleTheme(){
  return {
    type:"CHANGE_THEME",
  }
}