import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../actions'

const showContent = (state = 'ALL', action) => {
  switch(action.type) {
    case SHOW_ALL:
      return 'ALL'
    case SHOW_ACTIVE:
      return 'ACTIVE'
    case SHOW_COMPLETED:
      return 'COMPLETED'
    default:
      return state
  }
}

export default showContent
