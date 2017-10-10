import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }

  onClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      done: !prevState.done
    }));
  }

  render() {
    return (
      <li className={this.state.done ? "done" : ""} onClick={this.onClick.bind(this)}>
        {this.props.value}
      </li>
    );
  }
}

Item.propTypes = {
  value: PropTypes.string.isRequired
}
