import React from 'react'
import PropTypes from 'prop-types'
import './TodosFilter.css'

function TodosFilter({ completedTodos, displayAll, displayActiveTodos }) {
  return (
    <>
      <div className="container-radio-btn">
        <input id="all-radio" type="radio" name="radio" onChange={displayAll} />
        <label htmlFor="all-radio">All</label>
      </div>

      <div className="container-radio-btn">
        <input id="active-radio" type="radio" name="radio" onChange={displayActiveTodos} />
        <label htmlFor="active-radio">Active</label>
      </div>

      <div className="container-radio-btn">
        <input id="completed-radio" type="radio" name="radio" onChange={completedTodos} />
        <label htmlFor="completed-radio">Completed</label>
      </div>
    </>
  )
}

TodosFilter.propTypes = {
  completedTodos: PropTypes.func.isRequired,
  displayAll: PropTypes.func.isRequired,
  displayActiveTodos: PropTypes.func.isRequired,
}

export default TodosFilter
