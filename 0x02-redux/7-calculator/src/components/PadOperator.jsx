import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export function operator(operation) {
  if (operation === 'c') {
    return {
      type: 'RESET',
    }
  }
  else if (operation === '+') {
    return {
      type: 'ADD'
    }
  }
  else if (operation === '-') {
    return {
      type: 'SUB'
    }
  }
  else if (operation === 'x') {
    return {
      type: 'MUL'
    }
  }
  else if (operation === '/') {
    return {
      type: 'DIV'
    }
  }
  else if (operation === '=') {
    return {
      type: 'RESULT'
    }
  }
}

class PadOperator extends React.Component {
  render() {
    return (
      <div className="pad operator" onClick={()=>this.props.operator(this.props.value)}>
        {this.props.value}
      </div>
     );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    operator,
  }, dispatch);
}

PadOperator.propTypes = {
  value: PropTypes.string.isRequired,
  fct: PropTypes.func
};

export default connect(null, matchDispatchToProps)(PadOperator);
