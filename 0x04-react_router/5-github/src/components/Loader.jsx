import React from 'react';
var spinner = require('../images/spinner.gif');

export default class Loader extends React.Component {
  render() {
    return (
      <img src={spinner} />
     );
  }
}
