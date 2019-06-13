import topNav from "../components/TopNav"
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