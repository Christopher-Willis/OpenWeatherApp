import topNav from "../components/topNav"
import { connect } from 'react-redux';
import {changeZip} from "../actions"



const mapDispatchToProps = {
  setZip:changeZip,
}

function mapStateToProps(state){
  return {
    zip:state.zipcode,
    theme:state.theme
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(topNav);