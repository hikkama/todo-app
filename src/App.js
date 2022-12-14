import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import TodosList from './components/TodosList'
import Footer from './components/Footer'
import Header from './components/Header'
import toggleProperty from './utils/toggleProperty'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      id: uuidv4(),
      time: Date.now(),
      isCompleted: false,
      isHidden: false,
      isEditing: false,
    }
    setTodos([...todos, newTodo])
  }
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleCompletedHandler = (id) => {
    setTodos(toggleProperty(id, todos, 'isCompleted'))
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
          toggleTodo={toggleCompletedHandler}
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
