import app from "../App.js"
import { connect } from 'react-redux';

function mapStateToProps(state){
  return {
    theme:state.theme,
    current:state.currentWeather,
    forecast:state.forecastWeather,
  }
}

export default connect(mapStateToProps)(app);