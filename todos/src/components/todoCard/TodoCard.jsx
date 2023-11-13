import "./TodoCard.css";
import React, { useState } from "react";

function TodoCard() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      userId: 1,
      completed: false,
      title: "delectus aut autem",
    },
    {
      id: 2,
      userId: 1,
      completed: true,
      title: "quis ut nam facilis et officia qui",
    },
  ]);

  function toggleCompleted(todo) {
    todos.find((e) => e.id === todo.id).completed = !todo.completed;
    return setTodos([...todos]);
  }

  function onRemove(todo) {
    return setTodos([...todos.filter((e) => e.id !== todo.id)]);
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <ul key={todo.id}>
          <li className={todo.completed ? "checked" : ""}>
            <div onClick={() => toggleCompleted(todo)}>
              <span>{todo.title}</span>
            </div>
            <span className="close" onClick={() => onRemove(todo)}>
              ×
            </span>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default TodoCard;
