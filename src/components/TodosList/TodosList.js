import React from 'react'
import PropTypes from 'prop-types'

import Todo from '../Todo'

import './TodosList.css'

function TodosList({ todos, deleteTodo, toggleTodo, editTodo }) {
  function classNames(todo) {
    if (todo.isCompleted) {
      return 'completed'
    }
    if (todo.isEditing) {
      return 'editing'
    }
    return ''
  }
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={classNames(todo)}>
          <Todo {...todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
        </li>
      ))}
    </ul>
  )
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      isHidden: PropTypes.bool.isRequired,
      isEditing: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
}

export default TodosList
