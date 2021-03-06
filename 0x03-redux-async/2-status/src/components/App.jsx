import React from 'react';
import { connect } from 'react-redux';
import fetch from 'cross-fetch';
import Loader from './Loader.jsx';
import Button from './Button.jsx';
import Status from './Status.jsx';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Button text="Fetching..." fct={() => this.props.fetching()} />
        <Button text="Reset" fct={() => this.props.reset()} />
        <hr />
        <Loader is_loading={this.props.is_fetching} />
        <Status display={!this.props.is_fetching} value={this.props.status} />
      </div>
     );
  }
}

const mapStateToProps = state => {
  return {
    is_fetching: state.is_fetching,
    status: state.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetching: () => {
      dispatch({
        type: 'FETCHING',
        is_fetching: true
      })
      fetch('http://0.0.0.0:5001/api/v1/status')
        .then(res => {
          dispatch({
            type: 'RECEIVED',
            is_fetching: false,
            res: res.statusText
          })
        })
    },
    reset: () => {
      dispatch({
        type: 'RESET'
      })
    },
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App
