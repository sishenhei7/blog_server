import React from 'react'
import PropTypes from 'prop-types'
const AddTodo = ({ addTodo }) => {
  let input;
  const onSubmit = (e) => {
    e.preventDefault();
    if(!input.value.trim()) {
      return
    }
    addTodo(input.value);
    input.value = '';
  }
  return(
    <form onSubmit={e => {onSubmit(e)}}>
      <input ref={node => {input=node}}/>
      <button type="submit">添加</button>
    </form>
  )
}
export default AddTodo

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}


