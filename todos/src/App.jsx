import logo from "./logo.svg";
import "./App.css";
import TodoCard from "./components/todoCard/TodoCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <TodoCard />
      </header>
    </div>
  );
}

export default App;
