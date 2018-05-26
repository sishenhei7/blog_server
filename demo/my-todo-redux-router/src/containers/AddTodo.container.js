import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import {
  addTodo
} from '../actions'

const mapDispatchToProps = dispatch => ({
  addTodo: (text) => dispatch(addTodo(text))
})

export default connect(
  null,
  mapDispatchToProps
)(AddTodo)
