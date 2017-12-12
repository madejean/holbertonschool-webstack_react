const initialState = {
  status: '',
  is_fetching: false
}

export default function(state=initialState, action) {
  switch(action.type){
    case "FETCHING":
      return {
        ...state,
        is_fetching: action.is_fetching
      }
    case "RECEIVED":
      return {
        ...state,
        is_fetching: action.is_fetching,
        status: action.res
      }
    case "RESET":
      return {
        is_fetching: false,
        status: ""
      }
  default:
    return state;
  }
}
