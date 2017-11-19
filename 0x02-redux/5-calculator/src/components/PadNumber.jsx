import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export function update(number) {
  return {
    type: 'UPDATE',
    number
  }
}

class PadNumber extends React.Component {
  render() {
    return (
      <div className="pad" onClick={()=>this.props.update(this.props.value)}>
        {this.props.value}
      </div>
     );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    update,
  }, dispatch);
}

PadNumber.propTypes = {
  value: PropTypes.number.isRequired,
  fct: PropTypes.func
};

export default connect(null, matchDispatchToProps)(PadNumber);
