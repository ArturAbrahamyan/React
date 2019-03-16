import  {connect} from 'react-redux';
import {setObv} from './action/obv';
import App from '../componets/Appx';
const mapStateToProps= ({obv}) =>({
  obv:obv.items,
  isReady:obv.isReady
});

const mapDispatchToProps = dispatch =>({
setObv:obv => dispatch(setObv(obv))

})
export default connect(mapStateToProps,mapDispatchToProps)(App);
