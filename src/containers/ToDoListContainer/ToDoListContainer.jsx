import React from 'react'
import List from '../../components/List /List'
import { useState } from "react";
import ToDoForm from '../../components/ToDoForm/ToDoForm';
import "./ToDoListContainer.scss"

const ToDoList = ({time}) => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  const removeTodos = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  let timeID;
  

  if (time >= 17 || time <= 6) {
    timeID = "night";
    
  } else {
    timeID = "day";
    
  }


  return (
    <div className='container' id={timeID}>
      <h1 className='container__title'>TO-DO LIST</h1>
      <ToDoForm addTodo={addTodo}/>
      <List todos={todos}  removeTodos={removeTodos}/>
    </div>
  )
}

export default ToDoList