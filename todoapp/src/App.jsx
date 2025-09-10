import { useState } from "react";
import Todo from "./components/Todo"
import Header from "./components/Header/Header";
import './index.css'

export default function TodoApp() {
  
  return (
    <div className="w-auto min-h-screen place-items-center">
      <Header />
      <Todo />
    </div>
  )
  
}
