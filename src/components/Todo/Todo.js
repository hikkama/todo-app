import React, { useState } from 'react'
import { useStopwatch } from 'react-timer-hook'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import './Todo.css'

function Todo({
  text,
  time,
  id,
  deleteTodo,
  toggleTodo,
  isHidden = false,
  isEditing = false,
  isCompleted = false,
  editTodo,
  sec = 0,
  min = 0,
}) {
  const [edit, setEdit] = useState(text)
  const [textTwo, setTextTwo] = useState('')
  const [disabled, setDisabled] = useState(false)

  const stopwatchOffset = new Date()
  stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + sec + min * 60)
  const { start, pause, seconds, minutes, hours } = useStopwatch({ offsetTimestamp: stopwatchOffset })
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
        <input
          type="checkbox"
          className="toggle"
          onChange={() => {
            toggleTodo(id)
            pause()
          }}
        />
        <label>
          <span className="title">{textTwo || text}</span>
          <div className="description">
            {!isCompleted && (
              <>
                <button
                  type="button"
                  disabled={disabled}
                  className="icon icon-play"
                  onClick={() => {
                    start()
                    setDisabled(true)
                  }}
                />
                <button
                  type="button"
                  className="icon icon-pause"
                  onClick={() => {
                    setDisabled(false)
                    pause()
                  }}
                />
              </>
            )}
            <div className="timer">
              {!!hours && `${hours}:`}
              {minutes > 9 ? minutes : `0${minutes}`}:{seconds > 9 ? seconds : `0${seconds}`}
            </div>
          </div>
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
  isHidden: PropTypes.bool,
  isEditing: PropTypes.bool,
  isCompleted: PropTypes.bool,
  editTodo: PropTypes.func.isRequired,
  min: PropTypes.number,
  sec: PropTypes.number,
}

export default Todo
