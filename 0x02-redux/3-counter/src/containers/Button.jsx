import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.fct()}>{this.props.text}</button>
      </div>
    );
  }
}


export default Button;
