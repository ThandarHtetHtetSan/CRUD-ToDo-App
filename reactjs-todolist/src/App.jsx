import { useState, useEffect } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [toDoValue, setToDoValue] = useState("");

  function persistData(todos) {
    localStorage.setItem("todos", JSON.stringify({ todos }));
  }
  function handleAddTodos() {
    const newTodoList = [...todos, toDoValue];
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function handleDeleteToDo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return index !== todoIndex;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function handleEditToDo(index) {
    const valueToBeEdited = todos[index];
    setToDoValue(valueToBeEdited);
    handleDeleteToDo(index);
  }
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);
  return (
    <>
      <ToDoInput
        toDoValue={toDoValue}
        setToDoValue={setToDoValue}
        handleAddTodos={handleAddTodos}
      />
      <ToDoList
        todos={todos}
        handleDeleteToDo={handleDeleteToDo}
        handleEditToDo={handleEditToDo}
      />
    </>
  );
}

export default App;
