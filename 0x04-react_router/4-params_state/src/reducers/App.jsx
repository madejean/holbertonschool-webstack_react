export default function(state={}, action) {
  switch(action.type){
    case "INIT_CURRICULUMS":
      return {
        curriculums: [action.curriculums]
      }
  default:
    return state;
  }
}
