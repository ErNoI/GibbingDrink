import React from "react";

function Button(props) {
  const handleClick = () => {
    props.onClick(props.text);
  };

  return (
    <button
      className={`button ${props.active ? "active" : ""}`}
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
