function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <span>{todo.text}</span>
      <div>
        <button onClick={() => onToggle(todo.id)}>Toggle</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </li>
  );
}
export default TodoItem;
