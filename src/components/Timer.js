import React from 'react'
import { useStopwatch } from 'react-timer-hook'

function Timer() {
  const { seconds, minutes, hours, start, pause, reset } = useStopwatch({})
  const newHours = `${hours}:`
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '12px' }}>
        <span>{newHours}</span>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button type="button" onClick={start}>
        Start
      </button>
      <button type="button" onClick={pause}>
        Pause
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  )
}

export default Timer
