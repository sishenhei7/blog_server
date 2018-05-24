import React from 'react'
import DataFilters from '../utils/DataFilters'

const Footer = ({ showAll, showActive, showCompleted }) => (
  <div>
    <span>Show: </span>
    <button onClick={ () => showAll() }> All </button>
    <button onClick={ () => showActive() }> Active </button>
    <button onClick={ () => showCompleted() }> Completed </button>
  </div>
)

export default Footer



