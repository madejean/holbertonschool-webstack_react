import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from './Button.jsx';

export function increment(){
  return {
    type: 'INCREMENT',
  }
};

export function decrement(){
  return {
    type: 'DECREMENT',
  }
};

class CounterContainer extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <Button text="Increment" fct={()=>this.props.increment()} />
        <Button text="Decrement" fct={()=>this.props.decrement()} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    increment,
    decrement
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CounterContainer);
