import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: this.props.initValue
    }
  }
  onClick(e){
    this.setState({
      value: 1000
    })
  }
  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.onClick.bind(this)}>New value</button>
      </div>
    );
  }
}
