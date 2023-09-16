import React, { useState } from "react";

import "./Form.css";
import { default as addIcon } from "../../assets/icons/add_icon.svg";

function Form({ onAdd }) {
  const [text, setText] = useState("");

  function _onAdd(_) {
    onAdd(text);
    setText("");
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <div className="form-container">
      <button onClick={_onAdd}>
        <img src={addIcon} alt="AddIcon" />
      </button>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Новая задача" value={text} onChange={(e) => setText(e.target.value)} />
      </form>
    </div>
  );
}

export default Form;
