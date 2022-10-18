import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuidv4 from "uuid/v4";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const LOCAL_STOREAGE_KEY = "todoApp.todos";

  useEffect(() => {
    const stroredTodos = JSON.parse(localStorage.getItem(LOCAL_STOREAGE_KEY));
    if (stroredTodos) setTodos(stroredTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STOREAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleToggle = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    // console.log(name);
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  };

  const handleClearTodos = () => {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  };
  const handleClearAll = () => {
    setTodos([]);
  };
  return (
    <>
      <TodoList todos={todos} handleToggle={handleToggle} />
      <input ref={todoNameRef} text="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <button onClick={handleClearAll}>Clear Alll</button>
      <div>{todos.filter((todo) => !todo.complete).length} left Todo</div>
    </>
  );
}

export default App;
