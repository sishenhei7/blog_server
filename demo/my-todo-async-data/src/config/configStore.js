import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import todoApp from '../reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    todoApp,
    preloadedState,
    applyMiddleware(
      thunk,
      loggerMiddleware
    )
  )
}



