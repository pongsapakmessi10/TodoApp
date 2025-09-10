import { useState } from "react";
import Form from "./Form/Form";
import Todolist from "./TodoList/Todolist";

export default function TodoApp() {

    const [todos,setTodos] = useState([])
  

  return (
    <div>
      <Form todos={todos} setTodos={setTodos}/> {/* Send todos and setTodos to Form.jsx */}
      <Todolist todos={todos}/>  {/* Send todos to Todolist.jsx */}
    </div>
  )
  
}
