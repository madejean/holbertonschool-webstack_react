import React from 'react';

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        {this.props.value ? this.props.value : 0}
      </div>
    );
  }
}
