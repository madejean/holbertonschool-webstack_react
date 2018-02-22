import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from './Loader.jsx';
import { fetchCommits } from '../actions/Actions.jsx';

class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(fetchCommits(this.props.match.params.repo))
  }

  render() {
    if(this.props.fetching) {
      return (
        <Loader />
      )
    }
    else if(!this.props.commits) {
      return (
        <h1>Nothing</h1>
      )
    }
    else {
      return (
        <div>
          <Link to="/">Back</Link>
          <h1>{this.props.match.params.repo}</h1>
          <ul>
            {this.props.commits[0].map(function(commit, i) {
              return (
                <li key={i}><b>{commit.sha}</b>: {commit.commit.message} by <b>{commit.commit.author.name}</b> (<em>{commit.commit.author.date}</em>)</li>
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
    commits: state.commits
  }
}

export default connect(mapStateToProps)(Repo);
