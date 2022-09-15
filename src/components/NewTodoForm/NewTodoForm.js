import React, { useEffect, createRef, useState } from 'react'
import PropTypes from 'prop-types'

import './NewTodoForm.css'

export default function NewTodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const inputRef = createRef()
  useEffect(() => inputRef.current.focus(), [])

  const timeInputHandler = (value) => Math.min(+value.replace(/[^+\d]/g, ''), 59)

  const submitHandler = (e) => {
    e.preventDefault()
    addTodo(text, min, sec)

    setText('')
    setMin('')
    setSec('')
    inputRef.current.focus()
  }

  return (
    <form className="new-todo-form" onSubmit={submitHandler}>
      <input
        placeholder="What needs to be done?"
        className="new-todo"
        type="text"
        value={text}
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        type="text"
        value={min}
        onChange={(e) => setMin(timeInputHandler(e.target.value))}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        type="text"
        value={sec}
        onChange={(e) => setSec(timeInputHandler(e.target.value))}
      />
      <input className="hidden" type="submit" />
    </form>
  )
}

NewTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
