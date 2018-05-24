import React from 'react'
let id = 0;
const AddTodo = ({ addTodo }) => {
  let input;
  return(
    <form onSubmit={e => {
        e.preventDefault();
        if(!input.value.trim()) {
          return
        }
        addTodo({text: input.value, completed: false, id: id});
        id++;
        input.value = '';
      }}>
      <input ref={node => {input=node}}/>
      <button type="submit">添加</button>
    </form>
  )
}
export default AddTodo




