import React from 'react'
import "./ToDo.scss"

const ToDo = ({todo, removeTodos}) => {


    const handleRemoveClick = () => {
        removeTodos(todo.id);
    }


  return (
    <div className='todo'>
        <li className='todo__task'>{todo.task}</li>
        <button className='todo__button' onClick={handleRemoveClick}>X</button>
    </div>
  )
}

export default ToDo