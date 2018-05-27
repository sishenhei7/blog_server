import { connect } from 'react-redux'
import Posts from '../components/Posts'
import {
  nextText,
  nextPost
} from '../actions'

const mapStateToProps = state => ({
  title: state.post
})

const mapDispatchToProps = dispatch => ({
  nextText: () => dispatch(nextText()),
  nextPost: () => dispatch(nextPost())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)


