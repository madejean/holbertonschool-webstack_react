const initialState = {
  values: 0,
  lastValues: [],
  operation: ''
}

export default function(state=initialState, action) {
  switch(action.type){
    case "UPDATE":
      if (state.values === '+' || state.values === '-' || state.values === 'x' || state.values === '/') {
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
    var secondNumber = [];
      for(let i = 0; i < state.lastValues.length; i++) {
        if (Number.isInteger(state.lastValues[i])) {
          secondNumber.push(state.lastValues[i])
        }
      }
      if (state.operation === '+') {
        return {
          ...state,
          values: Number(state.lastValues[0]) + Number(secondNumber.join(''))
        }
      }
      if (state.operation === '-') {
        return {
          ...state,
          values: Number(state.lastValues[0]) - Number(secondNumber.join(''))
        }
      }
      if (state.operation === 'x') {
        return {
          ...state,
          values: Number(state.lastValues[0]) * Number(secondNumber.join(''))
        }
      }
      if (state.operation === '/') {
        return {
          ...state,
          values: Number(state.lastValues[0]) / Number(secondNumber.join(''))
        }
      }
    case "RESET": {
      state = initialState
    }
  default:
    return state;
  }
}
