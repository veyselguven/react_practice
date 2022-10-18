import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, handleToggle }) {
  //  console.log(props.todos); ['Todo1', 'Todo2']
  return todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} handleToggle={handleToggle} />;
  });
}
