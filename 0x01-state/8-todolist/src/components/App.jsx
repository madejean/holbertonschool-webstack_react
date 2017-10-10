import React from 'react';
import Item from './Item.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Read documentation", "Do the tutorial", "Add comment"]
    }
  }
  render() {
    const listItems = this.state.items.map((i =>
      <Item key={i} value={i} />
    ))
    return (
      <div>
        <form>
          <ul>
            {listItems}
          </ul>
        </form>
      </div>
    );
  }
}
