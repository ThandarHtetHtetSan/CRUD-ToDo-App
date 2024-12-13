import React from "react";
import ToDoCard from "./ToDoCard";

export default function ToDoList(props) {
  let { todos, handleDeleteToDo, handleEditToDo } = props;
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <ToDoCard
            handleEditToDo={handleEditToDo}
            handleDeleteToDo={handleDeleteToDo}
            key={todoIndex}
            index={todoIndex}
          >
            <p>{todo}</p>
          </ToDoCard>
        );
      })}
    </ul>
  );
}
