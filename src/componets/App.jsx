import React, { Component } from 'react';
//import  {connect} from 'react-redux';
//import {setObv} from './action/obv';
import obv from '../obv.json'
import axios from 'axios';
import ObvCard from './ObvCard.jsx';
//import {Card} from 'semantic-ui-react';
import {Card} from 'semantic-ui-react';

class App extends Component {

   componentWillMount() {
 const {setObv} = this.props;
    /* axios.get('/obv.json').then(({data}) => {
      setObv(data);
    });*/
   }

  render(){
//  const {obv}= this.props;
 return(

<div>
   <Card.Group itemsPerRow={4}>
{

  obv.map((obv,i)=> <ObvCard key={i} {...obv}/>)}
  </Card.Group>
    </div>
 );
  }
}
/*const mapStateToProps= ({obv}) =>({
  obv:obv.items,
  isReady:obv.isReady
});

const mapDispatchToProps = dispatch =>({
setObv:obv => dispatch(setObv(obv))

})*/
export default App;
//export default App;
