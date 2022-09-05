import React from 'react'
import PropTypes from 'prop-types'

import NewTodoForm from '../NewTodoForm'
import './Header.css'

function Header({ title = 'Title', addTodo }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <NewTodoForm addTodo={addTodo} />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  addTodo: PropTypes.func.isRequired,
}

export default Header
