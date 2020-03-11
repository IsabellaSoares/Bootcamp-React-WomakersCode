import React, { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

export default function App () {

  const [todos, setTodos] = useState(
    [
      {
        key: '1',
        todo: 'John Brown'
      },
      {
        key: '2',
        todo: 'Jim Green'
      },
      {
        key: '3',
        todo: 'Joe Black'
      },
    ]
  );

  const addTodo = (newTodo) => {
    setTodos([...todos, {
      key: todos.length + 1,
      todo: newTodo
    }]);
  }

  return (
    <div style={{padding: 10}}>
        <AddTodo addTodo={addTodo} />
        <VisibleTodoList todos={todos} />
        {/* <Footer/> */}
    </div>
  )
}

