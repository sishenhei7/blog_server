import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showContent: 'ALL',
      content: []
    }
  }

  addTodo(item) {
    this.setState( prevState => (
      {
      content: [
        ...prevState.content,
        item]
    }))
  }

  toggleState(id) {
    this.setState( prevState => {
      const newContent = prevState.content.map(todo => {
        if(todo.id === id){
          return {text: todo.text, id: todo.id, completed: !todo.completed}
        }else {
          return todo
        }
      })
      return {
        content: newContent
      }
    })
  }

  showAll() {
    this.setState({showContent: 'ALL'})
  }

  showActive() {
    this.setState({showContent: 'ACTIVE'})
  }

  showCompleted() {
    this.setState({showContent: 'COMPLETED'})
  }

  render() {
    return (
      <div>
        <AddTodo addTodo={ item => this.addTodo(item) }  />
        <TodoList list={ this.state } toggleState={ (id) => this.toggleState(id)}/>
        <Footer
          showAll = {() => this.showAll()}
          showActive = {() => this.showActive()}
          showCompleted = {() => this.showCompleted()}
        />
      </div>
    );
  }
}

export default App
