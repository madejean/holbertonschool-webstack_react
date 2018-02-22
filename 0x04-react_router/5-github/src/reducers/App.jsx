export default function(state={}, action) {
  switch(action.type){
    case "FETCHING":
      return {
        ...state,
        fetching: action.fetching
      }
    case "RECEIVED_REPOS":
      return {
        ...state,
        fetching: action.fetching,
        repos: [action.repos]
      }
    case "RECEIVED_COMMITS":
      return {
        ...state,
        fetching: action.fetching,
        commits: [action.commits]
      }
  default:
    return state;
  }
}
