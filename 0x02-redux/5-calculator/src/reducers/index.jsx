const initialState = {
  values: []
}
export default function(state=initialState, action) {
  switch(action.type){
    case "UPDATE":
      return {
        ...state,
        values: [...state.values, action.number],
      }
      break;
  default:
    return state;
  }
}
