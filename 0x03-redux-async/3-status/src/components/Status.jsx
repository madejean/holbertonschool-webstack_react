import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader.jsx';

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
        <Loader is_loading={this.props.is_loading}/>
      </div>
    );
  }
}

Status.propTypes = {
  value: PropTypes.string.isRequired,
  is_loading: PropTypes.bool.isRequired,
  display: PropTypes.bool.isRequired
};

Status.defaultProps = {
  display: true
};
