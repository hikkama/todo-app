import { useState } from 'react'
import { nanoid } from 'nanoid'

import TodosList from './components/TodosList'
import Footer from './components/Footer'
import Header from './components/Header'
import toggleProperty from './utils/toggleProperty'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = ({ text, min, sec }) => {
    const newTodo = {
      text,
      id: nanoid(),
      time: Date.now(),
      isCompleted: false,
      isHidden: false,
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
    const elementIndex = todos.findIndex((el) => el.id === id)
    todos[elementIndex].isCompleted = !todos[elementIndex].isCompleted

    setTodos([...todos])
  }

  const displayCompletedTodosHandler = () => {
    setTodos(todos.map((todo) => (todo.isCompleted ? { ...todo, isHidden: false } : { ...todo, isHidden: true })))
  }

  const displayActiveTodosHandler = () => {
    setTodos(todos.map((todo) => (todo.isCompleted ? { ...todo, isHidden: true } : { ...todo, isHidden: false })))
  }

  const displayAllHandler = () => {
    setTodos(todos.map((todo) => ({ ...todo, isHidden: false })))
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const editTodoHandler = (id) => {
    setTodos(toggleProperty(id, todos, 'isEditing'))
  }

  return (
    <section className="todoapp">
      <Header title="todos" addTodo={addTodoHandler} />
      <section className="main">
        <TodosList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleCompletedTodo={toggleCompletedHandler}
          editTodo={editTodoHandler}
        />
        {todos.length > 0 && (
          <Footer
            activeLength={todos.length - todos.filter((todo) => todo.isCompleted).length}
            deleteCompletedTodos={deleteCompletedTodosHandler}
            completedLength={todos.filter((todo) => todo.isCompleted).length}
            completedTodos={displayCompletedTodosHandler}
            displayActiveTodos={displayActiveTodosHandler}
            displayAll={displayAllHandler}
          />
        )}
      </section>
    </section>
  )
}

export default App
