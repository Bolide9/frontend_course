import "./TodoList.css";
import Todo from "../Todo/Todo";
import RemoveButton from "../RemoveButton/RemoveButton";

function TodoList({ todos, onRemove }) {
  return todos.map((todo, index) => {
    return (
      <div key={index} className="todo-list">
        <Todo title={todo.title} />
        <RemoveButton id={todo.id} onRemove={onRemove} />
      </div>
    );
  });
}

export default TodoList;
