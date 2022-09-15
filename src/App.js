import { useState } from 'react'
import { nanoid } from 'nanoid'

import TodosList from './components/TodosList'
import Footer from './components/Footer'
import Header from './components/Header'
import toggleProperty from './utils/toggleProperty'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  const addTodoHandler = (text, min, sec) => {
    const newTodo = {
      text,
      id: nanoid(),
      time: Date.now(),
      isCompleted: false,
      isEditing: false,
      min: +min,
      sec: +sec,
    }
    setTodos([...todos, newTodo])
  }
  const deleteTodoHandler = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleCompletedHandler = (id) => {
    setTodos((prev) => toggleProperty(id, prev, 'isCompleted'))
  }

  const displayCompletedTodosHandler = () => {
    setTodos((prev) =>
      prev.map((todo) => (todo.isCompleted ? { ...todo, isHidden: false } : { ...todo, isHidden: true }))
    )
  }

  const displayActiveTodosHandler = () => {
    setTodos((prev) =>
      prev.map((todo) => (todo.isCompleted ? { ...todo, isHidden: true } : { ...todo, isHidden: false }))
    )
  }

  const displayAllHandler = () => {
    setTodos((prev) => prev.map((todo) => ({ ...todo, isHidden: false })))
  }

  const deleteCompletedTodosHandler = () => {
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted))
  }

  const editTodoHandler = (id) => {
    setTodos((prev) => toggleProperty(id, prev, 'isEditing'))
  }

  const filterTodos = (items, filterWord) => {
    switch (filterWord) {
      case 'all':
        return items

      case 'active':
        return items.filter((item) => !item.isCompleted)

      case 'completed':
        return items.filter((item) => item.isCompleted)
      default:
        return items
    }
  }

  const filterChangeHandler = (filterWord) => {
    setFilter(filterWord)
  }

  const visibleItems = filterTodos(todos, filter)

  return (
    <section className="todoapp">
      <Header title="todos" addTodo={addTodoHandler} />
      <section className="main">
        <TodosList
          todos={visibleItems}
          deleteTodo={deleteTodoHandler}
          toggleCompletedTodo={toggleCompletedHandler}
          editTodo={editTodoHandler}
        />
        {todos.length > 0 && (
          <Footer
            activeLength={todos.filter((todo) => !todo.isCompleted).length}
            deleteCompletedTodos={deleteCompletedTodosHandler}
            completedLength={todos.filter((todo) => todo.isCompleted).length}
            completedTodos={displayCompletedTodosHandler}
            displayActiveTodos={displayActiveTodosHandler}
            displayAll={displayAllHandler}
            filterChange={filterChangeHandler}
            filter={filter}
          />
        )}
      </section>
    </section>
  )
}

export default App
