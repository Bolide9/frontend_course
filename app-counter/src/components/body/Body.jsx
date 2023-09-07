import React, { useState } from "react";
import TextButton from "../buttons/TextButton";
import IconButton from "../buttons/IconButton";
import { default as refreshIcon } from "../../assets/icons/refresh_icon.svg";

function Body() {
  let [count, setCount] = useState(0);

  let onReset = () => setCount((count = 0));

  let onIncrement = () => setCount((count += 3));

  let onDecrement = () => {
    let _count = count;
    if ((_count -= 2) < 0) return;
    setCount(count -= 2);
  };

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
