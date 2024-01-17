import React from "react";
import "./buttons.css";

function Button(props) {
  const handleClick = () => {
    props.onClick(props.text);
  };

  return (
    <button
      className={`button scroll ${props.active ? "active" : ""}`}
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
