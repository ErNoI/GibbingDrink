import React, { useState, useEffect } from "react";
import "./buttons.css";
import useScroll from "../hooks/useScroll";

const ScrollButton = ({ onClick }) => {
  const isVisible = useScroll();

  return (
    <div
      className={`scroll-button button ${isVisible ? "visible" : ""}`}
      onClick={onClick}
    >
      Start quiz
    </div>
  );
};

export default ScrollButton;
