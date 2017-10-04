import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      initValue: this.props.initValue
    }
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    var timerId = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
   clearInterval(this.state.timerId);
  }

  timer() {
    this.setState({
      value: this.state.value + 1
    })
  }

  onClick(e){
    this.setState({
      value: this.state.initValue
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
