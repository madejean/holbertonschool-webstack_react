import React from 'react';
import PropTypes from 'prop-types';

export default class PadOperator extends React.Component {
  render() {
    return (
      <div className="pad operator">
        {this.props.value}
      </div>
     );
  }
}

PadOperator.propTypes = {
  value: PropTypes.string.isRequired,
  fct: PropTypes.func
};
