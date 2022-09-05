import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function NewTodoForm({ addTodo }) {
  const [text, setText] = useState('')

  function onKeyDown(e) {
    if (e.code === 'Enter') {
      addTodo(text)
      setText('')
    }
  }

  return (
    <input
      placeholder="What needs to be done?"
      className="new-todo"
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={onKeyDown}
    />
  )
}

NewTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
