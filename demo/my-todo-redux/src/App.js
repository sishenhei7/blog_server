import React from 'react'
import AddTodoContainer from './containers/AddTodo.container'
import TodoListContainer from './containers/TodoList.container'
import FooterContainer from './containers/Footer.container'

const App = () => (
  <div>
    <AddTodoContainer />
    <TodoListContainer />
    <FooterContainer />
  </div>
)

export default App



