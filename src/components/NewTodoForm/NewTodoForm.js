import React, { useEffect, createRef, useState } from 'react'
import PropTypes from 'prop-types'

import './NewTodoForm.css'

export default function NewTodoForm({ addTodo }) {
  const [todo, setTodo] = useState({ text: '', min: '', sec: '' })
  const inputRef = createRef()
  useEffect(() => inputRef.current.focus(), [])

  const timeInputHandler = (entry, value) => ({
    ...todo,
    [entry]: Math.min(+value.replace(/[^+\d]/g, ''), 59),
  })

  const submitHandler = (e) => {
    e.preventDefault()
    addTodo(todo)
    setTodo({ text: '', min: '', sec: '' })
    inputRef.current.focus()
  }

  return (
    <form className="new-todo-form" onSubmit={submitHandler}>
      <input
        placeholder="What needs to be done?"
        className="new-todo"
        type="text"
        value={todo.text}
        ref={inputRef}
        onChange={(e) => setTodo({ ...todo, text: e.target.value })}
        required
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        type="text"
        value={todo.min}
        onChange={(e) => setTodo(timeInputHandler('min', e.target.value))}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        type="text"
        value={todo.sec}
        onChange={(e) => setTodo(timeInputHandler('sec', e.target.value))}
      />
      <input className="hidden" type="submit" />
    </form>
  )
}

NewTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
