import React from 'react'
import PropTypes from 'prop-types'
import './TodosFilter.css'

function TodosFilter({ filter, filterChange }) {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ]

  return (
    <>
      {buttons.map(({ name, label }) => {
        const isActive = filter === name

        return (
          <li key={name}>
            <button type="button" className={isActive && 'selected'} onClick={() => filterChange(name)}>
              {label}
            </button>
          </li>
        )
      })}
    </>
  )
}

TodosFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
}

export default TodosFilter
