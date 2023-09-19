import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoForm() {
  // Define a local state for the input value
  const [text, setText] = useState("");
  // TODO: Access the `addTodo` function from the TodoContext using useContext
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
