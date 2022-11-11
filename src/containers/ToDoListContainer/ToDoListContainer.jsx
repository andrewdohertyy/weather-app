import React from 'react'
import List from '../../components/List /List'
import { useState, useEffect } from "react";
import ToDoForm from '../../components/ToDoForm/ToDoForm';
import "./ToDoListContainer.scss"

const ToDoList = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  const removeTodos = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // useEffect(() => {

  // }, [])


  return (
    <div className='container'>
      <h1 className='container__title'>TO-DO LIST</h1>
      <ToDoForm addTodo={addTodo}/>
      <List todos={todos}  removeTodos={removeTodos}/>
    </div>
  )
}

export default ToDoList