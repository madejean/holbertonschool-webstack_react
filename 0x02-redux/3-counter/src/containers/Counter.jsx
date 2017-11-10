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
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(CounterContainer);
