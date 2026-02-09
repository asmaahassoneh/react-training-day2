import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (input === "") return;

    setTodos([
      ...todos,
      { id: Date.now(), text: input, completed: false }
    ]);

    setInput("");
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div>
      <h2>To-Do List</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New task"
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
