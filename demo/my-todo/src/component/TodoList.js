import React from 'react'

const TodoList = ({ list, toggleState }) => {

  switch(list.showContent) {
    case 'ACTIVE':
      return(
        <ul>
          { list.content.map(({ text, completed, id }) => (
            !completed &&
              <li
                onClick={() => toggleState(id)}
                style={{textDecoration: completed ? 'line-through' : 'none'}}
                key={ id }
              >{ text }</li>
          )) }
        </ul>
      )
    case 'COMPLETED':
      return(
        <ul>
          { list.content.map(({ text, completed, id }) => (
            completed &&
              <li
                onClick={() => toggleState(id)}
                style={{textDecoration: completed ? 'line-through' : 'none'}}
                key={ id }
              >{ text }</li>
          )) }
        </ul>
      )
    default:
      return(
        <ul>
          { list.content.map(({ text, completed, id }) => (
            <li
              onClick={() => toggleState(id)}
              style={{textDecoration: completed ? 'line-through' : 'none'}}
              key={ id }
            >{ text }</li>
          )) }
        </ul>
      )
  }
}

export default TodoList


