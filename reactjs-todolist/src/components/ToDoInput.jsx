import React, { useState } from "react";

const ToDoInput = (props) => {
  const { handleAddTodos, toDoValue, setToDoValue } = props;
  const handleAddValue = (e) => {
    setToDoValue(e.target.value);
  };
  return (
    <header>
      <input
        value={toDoValue}
        onChange={handleAddValue}
        placeholder="Enter todo...."
      />
      <button
        onClick={() => {
          handleAddTodos();
          setToDoValue(""); // make input clear after typing and adding
        }}
      >
        Add
      </button>
    </header>
  );
};

export default ToDoInput;
