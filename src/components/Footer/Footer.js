import React from 'react'
import PropTypes from 'prop-types'

import TodosFilter from '../TodosFilter'

import './Footer.css'

function Footer({
  deleteCompletedTodos,
  activeLength,
  completedLength,
  completedTodos,
  displayAll,
  displayActiveTodos,
}) {
  return (
    <footer className="footer">
      {activeLength > 0 && <span className="todo-count">{activeLength} items left</span>}
      <ul className="filters">
        <TodosFilter
          displayAll={displayAll}
          activeTodos={deleteCompletedTodos}
          completedTodos={completedTodos}
          displayActiveTodos={displayActiveTodos}
        />
      </ul>
      {completedLength > 0 && (
        <button type="button" className="clear-completed" onClick={deleteCompletedTodos}>
          Clear completed
        </button>
      )}
    </footer>
  )
}

Footer.propTypes = {
  deleteCompletedTodos: PropTypes.func.isRequired,
  activeLength: PropTypes.number.isRequired,
  completedLength: PropTypes.number.isRequired,
  completedTodos: PropTypes.func.isRequired,
  displayAll: PropTypes.func.isRequired,
  displayActiveTodos: PropTypes.func.isRequired,
}

export default Footer
