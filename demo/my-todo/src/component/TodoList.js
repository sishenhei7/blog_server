import React from 'react'

const TodoList = ({ list, toggleState }) => {

  const setLi = ( text, completed, id ) => (
    <li
      onClick={() => toggleState(id)}
      style={{textDecoration: completed ? 'line-through' : 'none'}}
      key={ id }
    >{ text }</li>
  )

  switch(list.showContent) {
    case 'ACTIVE':
      return(
        <ul>
          { list.content.map(({ text, completed, id }) => (
            !completed && setLi(text, completed, id)
          )) }
        </ul>
      )
    case 'COMPLETED':
      return(
        <ul>
          { list.content.map(({ text, completed, id }) => (
            completed && setLi(text, completed, id)
          )) }
        </ul>
      )
    default:
      return(
        <ul>
          { list.content.map(({ text, completed, id }) => (
            setLi(text, completed, id)
          )) }
        </ul>
      )
  }
}

export default TodoList


