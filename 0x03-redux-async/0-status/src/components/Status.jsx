import React from 'react';
import PropTypes from 'prop-types';

export default class Status extends React.Component {
  render() {
    const style = {
      width: "200px",
      height: "200px",
      backgroundColor: this.props.value === "OK" ? "#008000" : "#FF0000",
      display: this.props.display ? "block" : "none"
    };
    return (
      <div style={style}>
      </div>
    );
  }
}

Status.propTypes = {
  value: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired
};

Status.defaultProps = {
  display: true
};
