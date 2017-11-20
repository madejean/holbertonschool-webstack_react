const initialState = {
  values: 0
}
export default function(state=initialState, action) {
  switch(action.type){
  case "UPDATE":
    return {
      ...state,
      values: state.values === 0 ? [action.number] : [state.values, action.number],
    }
  default:
    return state;
  }
}
