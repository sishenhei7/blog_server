import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ showAll, showActive, showCompleted }) => (
  <div>
    <span>Show: </span>
    <button onClick={ showAll }> All </button>
    <button onClick={ showActive }> Active </button>
    <button onClick={ showCompleted }> Completed </button>
  </div>
)

export default Footer

Footer.propTypes = {
  showAll: PropTypes.func.isRequired,
  showActive: PropTypes.func.isRequired,
  showCompleted: PropTypes.func.isRequired
}

