import topNav from "../components/topNav"
import { connect } from 'react-redux';
import {changeZip,addCurrentWeather,addForecastWeather} from "../actions"



const mapDispatchToProps = {
  setZip:changeZip,
  setCurrent:addCurrentWeather,
  setForecast:addForecastWeather,
}

function mapStateToProps(state){
  return {
    zip:state.zipcode,
    theme:state.theme
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(topNav);