import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {
  toggleState
} from '../actions'

const mapStateToProps = state => ({
  list: state
})

const mapDispatchToProps = dispatch => ({
  toggleState: (id) => dispatch(toggleState(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
