import React, { createContext, useState } from "react";

// ? The TodoContext is a central data store in the application that provides the state and functions necessary for managing a to-do list, allowing various components to access, modify, and display the to-do list data consistently and efficiently.

// TODO 1: Create a new context
const TodoContext = createContext();

// TODO 2: Create a provider component
const TodoProvider = ({ children }) => {
  // TODO 3: Define state to manage the to-do list
  const [todos, setTodos] = useState([]);

  // TODO 4: Define functions to manipulate the to-do list
  const addTodo = (text) => {
    // Add a new to-do item to the todos array
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    // Create a copy of the todos array to update the completion status
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    // Update the state with the modified array
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    // Create a copy of the todos array and remove the specified item
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    // Update the state with the modified array
    setTodos(updatedTodos);
  };

  // TODO 5: Provide the state and functions to child components
  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// TODO 6: Export the provider component and context
export { TodoProvider, TodoContext };

/* 
1.) Create a new context: We create a new context using the createContext function. This context will be used to share state and functions related to the to-do list across components.

2.) Create a provider component: We define a TodoProvider component responsible for providing the context and managing the state of the to-do list.

3.) Define state: We set up a state variable todos using the useState hook to manage the to-do list data. It starts as an empty array.

4.) Define functions: We define three functions (addTodo, toggleTodo, removeTodo) to manipulate the to-do list data. These functions will be used by child components.

5.) Provide the state and functions: We wrap the children (child components) with the TodoContext.Provider, passing the todos array and functions as a value. This provides access to the state and functions to all child components nested within the TodoProvider.

6.) Export the provider component and context: We export the TodoProvider and TodoContext so that they can be used in other parts of your application to provide and consume the to-do list context.
*/
