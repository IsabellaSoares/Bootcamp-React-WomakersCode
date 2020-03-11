import React, { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

export default function App () {

  const [todos, setTodos] = useState(
    [
      {
        key: '1',
        todo: 'John Brown',
        completed: false
      },
      {
        key: '2',
        todo: 'Jim Green',
        completed: false
      },
      {
        key: '3',
        todo: 'Joe Black',
        completed: false
      },
    ]
  );

  const addTodo = (newTodo) => {
    setTodos([...todos, {
      key: todos.length + 1,
      todo: newTodo,
      completed: false
    }]);
  }

  const setTodoComplete = (key) => {
    var prevState = todos;

    for (var i = 0; i < prevState.length; i++) {
      if (prevState[i].key == key) {
        prevState[i].completed = !prevState[i].completed;
        break;
      }
    }

    setTodos(prevState);
  }

  return (
    <div style={{padding: 10}}>
        <AddTodo addTodo={addTodo} />
        <VisibleTodoList todos={todos} setTodoComplete={setTodoComplete} />
        {/* <Footer/> */}
    </div>
  )
}

