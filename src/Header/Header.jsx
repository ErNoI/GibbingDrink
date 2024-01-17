import React from "react";
import Waves from "./Waves";
import "./header.css";
import Quiz from "../Quiz/Quiz";

function Header() {
  const handleLearnMoreClick = () => {
    const listElements = document.getElementsByClassName("content");

    // Check if there's at least one element with the specified class
    if (listElements.length > 0) {
      const firstElement = listElements[0];
      const yOffset = firstElement.offsetTop;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="overlay"></div>
      <div className="inner-header flex">
        <h1>GIBBING DRINK</h1>
        <h2>DO YOU KNOW WHAT IT IS?</h2>
        <div className="flex" style={{ marginTop: "20px" }}>
          <Quiz />
          <button
            onClick={handleLearnMoreClick}
            className="button headerButton "
          >
            Learn More
          </button>
        </div>
      </div>
      <Waves />
    </div>
  );
}

export default Header;
