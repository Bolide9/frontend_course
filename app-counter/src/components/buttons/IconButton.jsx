import React from "react";

function IconButton(props) {
  let { src, alt, action } = props;

  return (
    <button className="btn" onClick={action}>
      <img src={src} alt={alt} />
    </button>
  );
}

export default IconButton;
