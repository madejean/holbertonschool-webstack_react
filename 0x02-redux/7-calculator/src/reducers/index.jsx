const initialState = {
  values: 0,
  lastValues: [],
  operation: ''
}

export default function(state=initialState, action) {
  switch(action.type){
    case "UPDATE":
      if (state.values === '+' || state.values === '-' || state.values === 'x' || state.values === '/' || state.values === '=') {
        return {
          ...state,
          values: action.number,
          lastValues: [state.lastValues.join(''), action.number]
        }
      }
      return {
        ...state,
        values: (state.values === 0) ? action.number : [state.values, action.number],
        lastValues: [...state.lastValues, action.number]
      }
    case "ADD":
      return {
        ...state,
        values: '+',
        operation: '+',
      }
    case "SUB":
      return {
        ...state,
        values: '-',
        operation: '-'
      }
    case "MUL":
      return {
        ...state,
        values: 'x',
        operation: 'x'
      }
    case "DIV":
      return {
        ...state,
        values: '/',
        operation: '/'
      }
    case "RESULT":
      if (state.operation === '+') {
        return {
          ...state,
          values: Number(state.lastValues[0]) + state.lastValues[1]
        }
      }
      if (state.operation === '-') {
        return {
          ...state,
          values: Number(state.lastValues[0] - state.lastValues[1])
        }
      }
      if (state.operation === 'x') {
        return {
          ...state,
          values: Number(state.lastValues[0] * state.lastValues[1])
        }
      }
      if (state.operation === '/') {
        return {
          ...state,
          values: Number(state.lastValues[0] / state.lastValues[1])
        }
      }
    case "RESET": {
      state = initialState
    }
  default:
    return state;
  }
}
