import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({ index, todo }) {
  const { toggleTodo, removeTodo } = useContext(TodoContext); //? From context.

  return (
    <div className={`TodoItem ${todo.completed ? "completed" : ""}`}>
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(index)} //? From context.
        />
        {todo.text}
        <button onClick={() => removeTodo(index)}>Remove</button>
      </li>
    </div>
  );
}

export default TodoItem;
