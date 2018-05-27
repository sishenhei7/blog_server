import React from 'react'
import PropTypes from 'prop-types'

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

TodoList.propTypes = {
  toggleState: PropTypes.func.isRequired,
  list: PropTypes.shape({
    showContent: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
  }).isRequired
}
