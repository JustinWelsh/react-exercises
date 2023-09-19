import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useContext(TodoContext); //? From context.

  return (
    <ul className="todoList">
      {todos.map(
        (
          todo,
          index //? From context.
        ) => (
          <TodoItem key={index} index={index} todo={todo} />
        )
      )}
    </ul>
  );
}

export default TodoList;
