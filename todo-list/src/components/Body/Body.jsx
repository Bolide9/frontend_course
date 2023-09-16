import { useState } from "react";

import "./Body.css";
import Form from "../Form/Form";
import Title from "../Title/Title";
import TodoList from "../TodoList/TodoList";

const Body = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Изучить JavaScript",
    },
    {
      id: 2,
      title: "Изучить паттерны проектирования",
    },
    {
      id: 3,
      title: "Изучить Redux (redux-observable, redux-saga)",
    },
  ]);

  const onRemove = (_, id) => setTodos(todos.filter((item) => item.id !== id));

  const onAdd = (title) =>
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: title,
      },
    ]);

  return (
    <div className="container">
      <Title count={todos.length} />
      <TodoList todos={todos} onRemove={onRemove} />
      <Form onAdd={onAdd} />
    </div>
  );
};

export default Body;
