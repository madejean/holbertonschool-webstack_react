const initialState = {
  status: '',
  is_fetching: false
}

export default function(state=initialState, action) {
  switch(action.type){
    case "FETCHING":
      return {
        is_fetching: true,
        status: "is_fetching"
      }
    case "RECEIVED":
      return {
        is_fetching: false,
        status: action.status
      }
  default:
    return state;
  }
}
