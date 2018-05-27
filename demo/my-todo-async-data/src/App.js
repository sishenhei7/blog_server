import React from 'react'
import AddTodoContainer from './containers/AddTodo.container'
import TodoListContainer from './containers/TodoList.container'
import FooterContainer from './containers/Footer.container'
import PostsContainer from './containers/Posts.container'

const App = ({ match }) => (
  <div>
    <AddTodoContainer />
    <TodoListContainer />
    <FooterContainer  filter={ match.params.filter } />
    <PostsContainer />
  </div>
)

export default App



