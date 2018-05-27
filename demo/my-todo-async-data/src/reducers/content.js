import {
  ADD_TODO,
  TOGGLE_STATE
} from '../actions'

const content = (state = [], action) => {
  if(action.type === ADD_TODO) {
    return [
        ...state,
        {
          text: action.text,
          id: action.id,
          completed: false
        }
    ]
  }else if(action.type === TOGGLE_STATE) {
    return state.map(todo => {
      if(todo.id === action.id){
        return {text: todo.text, id: todo.id, completed: !todo.completed}
      }else {
        return todo
      }
    })
  }else {
    return state
  }
}

export default content
