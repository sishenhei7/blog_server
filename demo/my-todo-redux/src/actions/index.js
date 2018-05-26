export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_STATE = 'TOGGLE_STATE'
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'

let todoId = 0

export function addTodo(text) {
  return { type: ADD_TODO, id: todoId++, text}
}

export function toggleState(id) {
  return { type: TOGGLE_STATE, id}
}

export function showAll() {
  return { type: SHOW_ALL }
}

export function showActive() {
  return { type: SHOW_ACTIVE }
}

export function showCompleted() {
  return { type: SHOW_COMPLETED }
}



