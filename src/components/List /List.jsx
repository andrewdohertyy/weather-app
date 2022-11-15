import React from 'react'
import ToDo from '../ToDo/ToDo'
import "./List.scss"

const List = ({todos, removeTodos}) => {

return (
    <div className='list'>
        <ul>
            {todos.map(todo => (<ToDo key={todo.id} todo={todo} removeTodos={removeTodos}/>))}
        </ul>
    </div>
  )
}

export default List