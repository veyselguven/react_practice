import React from "react";

export default function Todo({ todo, handleToggle }) {
  console.log(todo);
  function handleClick() {
    handleToggle(todo.id);
  }
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleClick} />
        {todo.name}
      </label>
    </div>
  );
}
