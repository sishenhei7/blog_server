import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Footer = ({ filter, showAll, showActive, showCompleted }) => {
  switch(filter) {
    case 'active':
      showActive();
      break;
    case 'completed':
      showCompleted();
      break;
    default:
      showAll();
  }
  return (
    <div>
      <span>Show: </span>
      <Link
        to=''
        onClick={ showAll }> All </Link>
      <Link
        to='active'
        onClick={ showActive }> Active </Link>
      <Link
        to='completed'
        onClick={ showCompleted }> Completed </Link>
    </div>
  )
}

export default Footer

Footer.propTypes = {
  showAll: PropTypes.func.isRequired,
  showActive: PropTypes.func.isRequired,
  showCompleted: PropTypes.func.isRequired
}

