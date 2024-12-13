import React from "react";

function ToDoCard(props) {
  const { children, handleDeleteToDo, index, handleEditToDo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditToDo(index);
          }}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteToDo(index);
          }}
        >
          {" "}
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}

export default ToDoCard;
