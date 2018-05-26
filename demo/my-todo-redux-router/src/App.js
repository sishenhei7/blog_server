import React from 'react'
import AddTodoContainer from './containers/AddTodo.container'
import TodoListContainer from './containers/TodoList.container'
import FooterContainer from './containers/Footer.container'

const App = ({ match }) => (
  <div>
    <AddTodoContainer />
    <TodoListContainer/>
    <FooterContainer  filter={ match.params.filter } />
  </div>
)

export default App



