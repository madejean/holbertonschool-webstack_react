import fetch from 'cross-fetch';

export function fetchRepos() {
  return(dispatch) => {
    dispatch({
      type: "FETCHING",
      fetching: true
    })
  return fetch('https://api.github.com/users/madejean/repos')
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      return res.json();
    })
    .then(repos => {
      dispatch({
        type: "RECEIVED_REPOS",
        fetching: false,
        repos: repos
      })
    })
    .catch(err => {
      console.error(err);
    });
  }
}

export function fetchCommits(repo) {
  return(dispatch) => {
    dispatch({
      type: "FETCHING",
      fetching: true
    })
  return fetch(`https://api.github.com/repos/madejean/${repo}/commits`)
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      return res.json();
    })
    .then(commits => {
      dispatch({
        type: "RECEIVED_COMMITS",
        fetching: false,
        commits: commits
      })
    })
    .catch(err => {
      console.error(err);
    });
  }
}
