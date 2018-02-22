import React from 'react';
import Loader from './Loader.jsx';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Repos extends React.Component {
  render() {
    if (this.props.fetching) {
      return (
        <Loader />
      )
    }
    else {
      return (
        <div>
          <h1>Repositories</h1>
          <ul>
            {this.props.repos[0].map(function(repo,i) {
              return (
                <li key={i}><Link to={"/repo/" + repo.name}>{repo.name}</Link></li>
              )
            })}
          </ul>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    fetching: state.fetching,
    repos: state.repos
  }
}

export default connect(mapStateToProps)(Repos);
