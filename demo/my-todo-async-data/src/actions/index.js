import fetch from 'cross-fetch'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_STATE = 'TOGGLE_STATE'
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_ERROR = 'RECEIVE_ERROR'
export const RECEIVE_ING = 'RECEIVE_ING'

let todoId = 0,
    titleId = 1,
    maxTitle = 14

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

function fetchSource() {
  return fetch(`https://api.github.com/repos/sishenhei7/sishenhei7.github.io/issues/${titleId % maxTitle}`)
}

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    title: json.title
  }
}

function receiveError() {
  return {
    type: RECEIVE_ERROR,
    error: '请求太频繁，请稍后再试'
  }
}

export function fetchPosts() {
  return dispatch => fetchSource()
    .then(response => response.json())
    .then(json => {
      if(!json.title) {
        return dispatch(receiveError())
      }
      return dispatch(receivePosts(json))
    })
    .catch(() => dispatch(receiveError()))
}

export function nextText() {
    return {
    type: RECEIVE_ING,
    text: '正在请求数据...'
  }
}

export function nextPost() {
  titleId++;
  return fetchPosts()
}



