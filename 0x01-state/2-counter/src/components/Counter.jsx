import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 89
    }
  }
  render() {
    return (
      <div>
        {this.state.value}
      </div>
    );
  }
}
