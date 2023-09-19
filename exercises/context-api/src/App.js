import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
