import React from 'react'
import Todotoggle from '../Todotoggle'


function Todolist({todos}) { // Receive todos from Todo.jsx
  return (
    <div>
        {todos.map((item) => (
            <Todotoggle key={item} item={item}/>
        ))}
    </div>
  )
}

export default Todolist