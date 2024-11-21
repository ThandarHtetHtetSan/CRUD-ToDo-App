import React, { useState } from 'react'

const ToDoInput = (props) => {
  const {handleAddTodos, toDoValue, setToDoValue}=props
  
  return (
    <header>
      <input value={toDoValue} onChange={(e)=>{
        setToDoValue(e.target.value)
      }}placeholder='Enter todo....'/>
      <button onClick={()=>{
        handleAddTodos(toDoValue)
        setToDoValue('')// make input clear after typing and adding
      }}>Add</button>
    </header>
  )
}

export default ToDoInput