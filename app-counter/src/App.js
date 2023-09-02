import './App.css';
import React, { useState } from "react";
import Button from './appButton/button';


function App() {
  let [count, setCount] = useState(0);

  let onIncrement = () => setCount(count++);
  let onDecrement = () => setCount(count--);
  let onReset = () => setCount(count = 0);


  return (
    <div>
      <header className="App-header">
        <p>Current count: {count}</p>

        <div className='action_buttons'>
          <Button title={"Increment"} action={onIncrement} />
          <Button title={"Decrement"} action={onDecrement} />
          <Button title={"Reset"} action={onReset} />
        </div>
      </header>
    </div>
  );
}

export default App;
