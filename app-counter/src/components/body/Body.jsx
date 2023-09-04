import React, { useState } from "react";
import TextButton from "../buttons/TextButton";
import IconButton from "../buttons/IconButton";
import { default as refreshIcon } from "../../assets/icons/refresh_icon.svg";

function Body() {
  let [count, setCount] = useState(0);

  let onIncrement = () => setCount(count++);
  let onDecrement = () => setCount(count--);
  let onReset = () => setCount((count = 0));

  return (
    <body>
      <div className="container">
        <p className="counter">{count}</p>
        <div className="action_buttons">
          <TextButton title={"Increment"} action={onIncrement} />
          <IconButton src={refreshIcon} action={onReset} />
          <TextButton title={"Decrement"} action={onDecrement} />
        </div>
      </div>
    </body>
  );
}

export default Body;
