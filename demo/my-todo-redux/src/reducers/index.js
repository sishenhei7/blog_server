import { combineReducers } from 'redux'
import showContent from './showContent'
import content from './content'

const todoApp = combineReducers({
  showContent,
  content
})

export default todoApp
