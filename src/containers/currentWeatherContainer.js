import CurrentWeather from "../components/CurrentWeather"
import { connect } from 'react-redux';

function mapStateToProps(state){
  return {
    theme:state.theme,
    current:state.currentWeather
  }
}


export default connect(mapStateToProps)(CurrentWeather);