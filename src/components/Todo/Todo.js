import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import './Todo.css'

function Todo({ text, time, id, deleteTodo, toggleTodo, isHidden, isEditing, editTodo }) {
  const [edit, setEdit] = useState(text)
  const [textTwo, setTextTwo] = useState('')
  let classNames = 'view'
  if (isHidden) {
    classNames += ' hidden'
  }
  function onKeyDown(e) {
    if (e.code === 'Enter') {
      setTextTwo(edit)
      editTodo(id)
    }
  }
  return (
    <>
      <div className={classNames}>
        <input type="checkbox" className="toggle" onChange={() => toggleTodo(id)} />
        <label>
          <span className="description">{textTwo || text}</span>
          <span className="created">created {formatDistanceToNow(time)} ago</span>
        </label>
        <button type="button" title="Edit" onClick={() => editTodo(id)} className="icon icon-edit" id="edit-btn" />
        <button type="button" title="Delete" className="icon icon-destroy" onClick={() => deleteTodo(id)} />
      </div>
      {isEditing && (
        <input
          type="text"
          className="edit"
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
          onKeyDown={onKeyDown}
        />
      )}
    </>
  )
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  editTodo: PropTypes.func.isRequired,
}

export default Todo
