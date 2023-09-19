import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext); //? From context.

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text); //? From context.
    setText("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new to-do"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
