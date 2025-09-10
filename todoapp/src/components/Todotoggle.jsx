import React, { useState } from 'react'
import './Todo.css'


function Todotoggle({item}) {

const [toggle,setToggle] = useState(false)

  function handleToggle() {
        setToggle(!toggle)
    }


  return (
    <h3 onClick={handleToggle} className={toggle ? 'text-done' : 'text'} >{item}</h3>
  )
}

export default Todotoggle