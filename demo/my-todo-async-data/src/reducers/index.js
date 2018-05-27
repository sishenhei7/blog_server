import { combineReducers } from 'redux'
import showContent from './showContent'
import content from './content'
import post from './post'

const todoApp = combineReducers({
  showContent,
  content,
  post
})

export default todoApp
