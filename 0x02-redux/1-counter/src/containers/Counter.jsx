import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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
        <button onClick={()=>this.props.increment()}>Increment</button>
        <button onClick={()=>this.props.decrement()}>Decrement</button>
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
