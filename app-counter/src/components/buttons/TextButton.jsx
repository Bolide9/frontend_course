import React from "react";

function TextButton(props) {
  let { action, title } = props;

  return (
    <button className="btn" onClick={action}>
      {title}
    </button>
  );
}

export default TextButton;
