export function fetching() {
  return(dispatch, getState) => {
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
  }
}

export function reset() {
  return(dispatch, getState) => {
    dispatch({
      type: 'RESET'
    })
  }
}
