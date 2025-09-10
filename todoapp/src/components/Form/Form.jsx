import React, { useState } from 'react'

function Form({todos,setTodos}) { // Receive from Todo.jsx 

    const [todo, setTodo] = useState("")
    

    function handleSubmit(e){
    e.preventDefault()

    if (todo.trim() === "") {
      alert("Please Fill Value !")
      return
    }

    setTodos([...todos,[todo]])
    setTodo("")
  }

  function handleChange(e) {
    setTodo(e.target.value)
  }

  return (
     <form onSubmit={handleSubmit} >
        <input type="text"
        placeholder="Task..."
        value={todo}
        onChange={handleChange}
        />
        <button type="submit">Add</button> 
      </form>
  )
}

export default Form