import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CounterContainer,{ increment, decrement } from '../containers/Counter.jsx';
import Button from '../containers/Button.jsx';

class App extends React.Component {
  render() {
    return (
     <div>
      <CounterContainer />
      <Button text="Increment" fct={()=>this.props.increment()} />
      <Button text="Decrement" fct={()=>this.props.decrement()} />
    </div>
   );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    increment,
    decrement
  }, dispatch);
}

export default connect(null, matchDispatchToProps)(App);
