import {
  RECEIVE_POSTS,
  RECEIVE_ING,
  RECEIVE_ERROR
} from '../actions'

const post = (state = '无数据', action) => {

  switch(action.type) {
    case RECEIVE_POSTS:
      return action.title
    case RECEIVE_ING:
      return action.text
    case RECEIVE_ERROR:
      return action.error
    default:
      return state
  }
}

export default post









