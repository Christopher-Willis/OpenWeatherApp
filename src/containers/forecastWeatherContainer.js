import Forecastweather from "../components/ForecastWeather"
import { connect } from 'react-redux';

function mapStateToProps(state){
  return {
    theme:state.theme,
    forecast:state.forecastWeather
  }
}


export default connect(mapStateToProps)(Forecastweather);