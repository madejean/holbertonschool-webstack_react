import React from 'react';
import Item from './Item.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      items: ["Read documentation", "Do the tutorial", "Add comment"]
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({inputValue: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      inputValue: "",
      items: [...this.state.items, this.state.inputValue]
    });
  }

  render() {
    const listItems = this.state.items.map((i =>
      <Item key={i} value={i} />
    ))
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.inputValue} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}
